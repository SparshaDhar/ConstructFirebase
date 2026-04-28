


const scriptsInEvents = {

	async EventSheet1_Event4_Act1(runtime, localVars)
	{
		globalThis.myJSON=[{"server":"us-central1","cors": "*"}];
		runtime.globalVars.JSON=JSON.stringify(globalThis.myJSON);
	},

	async EventSheet1_Event5_Act3(runtime, localVars)
	{
		var newItem={"server":runtime.globalVars.NowServer,"cors": runtime.globalVars.NowCORS};
		globalThis.myJSON.push(newItem);
		runtime.globalVars.JSON=JSON.stringify(globalThis.myJSON);
	},

	async EventSheet1_Event10_Act2(runtime, localVars)
	{
		globalThis.myJSON.splice(runtime.globalVars.NowDeleteIndex, 1);
		runtime.globalVars.JSON=JSON.stringify(globalThis.myJSON);
	},

	async EventSheet1_Event19_Act1(runtime, localVars)
	{
		function download(filename, text) {
		    var element = document.createElement('a');
		    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		    element.setAttribute('download', filename);
		
		    element.style.display = 'none';
		    document.body.appendChild(element);
		
		    element.click();
		
		    document.body.removeChild(element);
		}
		
		// Start file download.
		document.getElementById("generate").addEventListener("click", function(){
		    download("index.js.txt", GenerateScript());
		}, false);
		
		
		
		//Generate Script Text
		function GenerateScript() {
		    var myScript = 'const crypto = require("crypto");const functions = require("firebase-functions");var serviceAccount = require("./serviceAccountKey.json");var admin = require("firebase-admin");admin.initializeApp({credential: admin.credential.cert(serviceAccount)});';
		    for (var i = 0; i < globalThis.myJSON.length; i++) {
		        myScript += 'exports.getAuthToken = functions.region("' + globalThis.myJSON[i].server + '").https.onRequest((request, response) => {';
		        myScript += 'response.set("Access-Control-Allow-Origin", "' + globalThis.myJSON[i].cors + '");';
				myScript+='const hmac = crypto.createHmac("md5", "'+runtime.globalVars.NowPassword+'");';
		        myScript += 'var res_HMAC;hmac.on("readable", () => {const data = hmac.read();if (data) res_HMAC = data.toString("hex");});hmac.write(request.query.uid);hmac.end();admin.auth().createCustomToken(res_HMAC).then((customToken) => {response.send(customToken);}).catch((error) => {functions.logger.error("Sign In with Custom String Error: createCustomToken", error);response.send("Sign In with Custom String Error: createCustomToken. " + error);});});'
		    }
		    console.log(myScript);
		    return myScript;
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

