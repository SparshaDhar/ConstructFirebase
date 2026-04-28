![Construct Firebase](https://construct--database.web.app/img/logo.png)

# Construct Firebase
Firebase Plugin Collection for Construct 3

(Formerly sold as Construct Database)

<br>

|[Download](https://github.com/SparshaDhar/ConstructFirebase/archive/refs/heads/main.zip)|[Documentation](https://sparshadhar.github.io/ConstructFirebase/)|[Discord Community](https://discord.gg/9FG9M224K3)|
|---|---|---|

<br>

# Content

<br>

## BASIC Pack

Basic Essentials

> [!IMPORTANT]
> **Firebase SDK** must be added to project before proceeding with any of the plugins.
> 
> **Auth BASIC** must be added to project before proceeding with **Auth PRO**

<details>
  <summary><strong>Firebase SDK Plugin</strong></summary>

  - Connect and initialize Firebase SDK  
  - Manage multiple Firebase projects  
  - App Check (using reCAPTCHA)  
  - Debugging tools  
  - Advanced controls for connecting to specific Firebase services  

</details>

<details>
  <summary><strong>Firebase Authentication BASIC Plugin</strong></summary>

  - **Email & Password Authentication**
    - Sign up / Sign in  
    - Email verification  
    - Password reset  
    - Update email and password  
    - Username & password authentication  

  - **Phone OTP Authentication**  
    _HTML5 export only — see PRO plans for mobile export_

  - **OAuth Providers**  
    Google, Facebook, Apple, Twitter, GitHub, Microsoft, Yahoo  
    _HTML5 export only — see PRO plans for mobile export_

  - **User Management**
    - Email  
    - Username  
    - Display picture URL  
    - User ID  
    - Current auth provider  

  - Delete user  

</details>

<details>
  <summary><strong>Firebase Cloud Firestore Plugin & Firebase Realtime Database BASIC Plugin</strong></summary>

  - Write data  
  - Increment / decrement values  
  - Read data  
  - Create / read leaderboards  
  - Read data as JSON  

  - **Modes**
    - **User Account Mode**  
      Automatically uses a secure user-specific path (requires authentication)

    - **Custom Mode**  
      Read/write data at any custom path  

</details>

<details>
  <summary><strong>Firebase Cloud Storage BASIC Plugin</strong></summary>

  - Upload images and files  
  - Download images and files  

</details>

<details>
  <summary><strong>Example Files</strong></summary>

  - Google Auth.c3p  
  - Facebook Auth.c3p  
  - Phone Auth.c3p  
  - Email Verification & Error Handling.c3p  
  - Cloud Storage.c3p  
  - Handling Multiple Firebase Project.c3p  
  - [RD] Handling Data (UserAccount).c3p  
  - [RD] Leaderboards (Custom & User).c3p  
  - [RD] Nested JSON Data (Custom).c3p  
  - [RD] Using Multiple Databases (Sharding).c3p  
  - [Firestore] Handling Data (Custom).c3p  
  - [Firestore] Handling Data (UserAccount).c3p  

</details>

<br>

## Auth PRO Pack

OAuth (Google, Facebook, etc.) for Android & iOS<br/>
Phone Auth with OTP for Android & iOS<br/>
More Advanced Auth operations<br/>

<details>
  <summary>Firebase Authentication PRO & MOBILE</summary>

  - **Phone OTP Authentication**- Support on Android & iOS
  - **OAuth** - Google, Facebook - Support on Android & iOS
  - **Persistence** - Specify whether the user remains signed in or not after closing the app
  - **Anonymous Auth** - Visit the app as a Guest User
  - **Link Multiple Auth Providers** - Join two Auth accounts, can also be used with an anonymous account to convert it into a permanent account
  - **User Auth Credentials** - Allows you to control Sign In. Can be used with QR Codes to Sign In on a secondary device.
  - **Manage more User Details** - Phone number, Account Creation Time, Last Signed In Time, User Credentials, Auth Provider list

</details>

<details>
  <summary>Example Files</summary>

  - Auth Credentials-Sign In with QR Codes.c3p
  - Android-iOS Export (Google, Facebook, PhoneOTP).c3p

</details>

<br>

## Realtime-Database PRO

Socialize- Chat Rooms, Friend Management, Tag users<br />
User Online/Offline Status<br />
dvanced Lists- Sorting and querying<br />

<details>
  <summary>Firebase Realtime-Database PRO</summary>

  - **Assign mini User Keys** that can be copied and used to Tag users, send friend requests, etc.
  - **Write & Read Presence**- Get Online/Offline Status and last online timestamp of any user.
  - **Advanced List management**- querying and sorting
  - **Write Server Timestamp**
  - **Remove Sync Listeners** to save data usage

</details>

<details>
  <summary>Example Files</summary>

  - Global Chat Example.c3p
  - Sorting List (Querying).c3p

</details>

<br>

## Utilities PRO
Analytics, Remote Config, Performance, Crashlytics

<details>
  <summary>Firebase Analytics</summary>

  - **Works on Android, iOS and Web Browser**
  - **Collect automatic Analytics data**
  - **Log Events**
  - **Set Screen**
  - **Set User ID and Properties**

</details>

<details>
  <summary>Firebase Remote Config</summary>

  - **Works on Android, iOS and Web Browser**
  - **Fetch Remote Config data**

</details>

<details>
  <summary>Firebase Performance</summary>

  - **Works on Android, iOS and Web Browser**
  - **Collect automatic Performance Data, loading time, etc.**
  - **Start/Stop Custom Trace**- to track the time taken to complete a specific task

</details>

<details>
  <summary>Firebase Crashlytics</summary>

  - **Works on Android and iOS**
  - **Collect automatic Crash reports**
  - **Log data**
  - **Log errors**
  - **Set User ID**

</details>

<details>
  <summary>Example File</summary>

  - Utilities Example.c3p

</details>
