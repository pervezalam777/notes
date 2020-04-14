# React Native




## References
* [Official React Native Docs](https://reactnative.dev/docs)
* [showcase](https://reactnative.dev/showcase)
* [React-Native-Apps News](https://github.com/ReactNativeNews/React-Native-Apps)

## Prerequisites
1) Should have node installed
2) run **npm install expo-cli --global**
3) install **[expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN)** app on your mobile device



## [Problem with Expo](https://nagarro.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/16670590#content)


If you are on Windows and are using any version of Node v12.11 or higher you will hit a bug with React Native when trying to run expo start in the rn-starter directory:

error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more details.

There are three ways this can be handled, many students seem to prefer the quicker alternative solution #1

Solution #1 - Edit the blacklist.js file

Note - You will need to make this change to the file for every project you generate throughout the course.

Go into your project files and find the node_modules directory. Then open up the blacklist.js file in your code editor, found at the path below:

node_modules/metro-config/src/defaults/blacklist.js

Change this:
```javascript
var sharedBlacklist = [
      /node_modules[/\\]react[/\\]dist[/\\].*/,
      /website\/node_modules\/.*/,
      /heapCapture\/bundle\.js/,
      /.*\/__tests__\/.*/
    ];
```

to this:
```javascript
var sharedBlacklist = [
      /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
      /website\/node_modules\/.*/,
      /heapCapture\/bundle\.js/,
      /.*\/__tests__\/.*/
    ];
```

Solution #2 - Downgrade Node

Completely uninstall Node from your system and install v12.10.0, using this page:

https://nodejs.org/download/release/v12.10.0/

Most Windows users will need the x64.msi download available here:

https://nodejs.org/download/release/v12.10.0/node-v12.10.0-x64.msi

After installing this specific version of Node you can continue to the next lecture "App Setup"

For those students that have already started the lecture "App Setup" and are getting the error mentioned, you'll need to perform the above steps. Then do the following:

1. Change into the rn-starter directory

2. rm -r node_modules

3. rm package-lock.json

4. npm install

5. expo start

Solution #3 - Use a Node Version Manager:

If you are familiar with Node version managers, this is a possible quick solution that doesn't involve changing your local version of Node.

https://github.com/coreybutler/nvm-windows

After installing, you should be able to just run this in your terminal:

nvm install 12.10.0 and then nvm use 12.10.0

Then do the following:

1. Change into the rn-starter directory

2. rm -r node_modules

3. rm package-lock.json

4. npm install

5. expo start 

## [Using iOS and Android Simulators](https://nagarro.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/17787262#content)

published 1-23-2020

These instructions are for students who wish to use the XCode or Android Studio simulators instead of a physical device with Expo.

keep in mind, emulators require a lot of RAM, so you may find that bundling and displaying code takes much longer than when using a physical device.

The official Expo docs with some troubleshooting tips are available here:

https://docs.expo.io/versions/latest/workflow/ios-simulator/

https://docs.expo.io/versions/latest/workflow/android-studio-emulator/
macOS

XCode iOS Simulator

    Download the full version of Xcode from the App Store. This is a huge file at around 7GB, so it can take a LONG time to download and install. It might seem like it it is stuck and not installing, but it is probably not.

    Launch XCode and agree to its terms. It will start installing more tools and software

    Eventually, you will get a "Welcome to XCode" screen

    In the top menu bar, click "XCode", then "Preferences" and then "Locations".

    Make sure that the "Command Line Tools" are installed and selected.

    In the top menu bar, click XCode, then "Open Developer Tool" then click "Simulator"

    This will open an iPhone simulator on your machine. If everything is working well, it should load a generic screen with a few apps.

    Go to your terminal and in your React Native project directory, run npm start

    When the Metro Bundler opens up in your browser, click on the option in the left sidebar to “Run on iOS simulator”

    If you navigate back to your iPhone simulator you should see an “Open In Expo” button. Click Open.

    This will launch the Expo application in the simulated device and run your bundled code. Eventually, it should load the “Hi There!” screen.

Android Studio Simulator

    Install Android Studio: https://developer.android.com/studio

    After downloading, run the installer.

    A dialog box should pop up. Do not Import Settings, Just Click "Ok"

    Click “Next" to go thru the Wizard

    Click “Next” to do a Standard install

    Choose light or dark theme for your editor and click “Next”

    Click “Finish”

    You will likely get a dialog box pop and say “HAXM Installation wants to make changes”. Enter your password and click OK

    If you get a “System Extension Blocked” error, follow the prompt to Open Security Preferences and click “Allow” for “Intel Corporation Apps”

    Once the HAXM installer finished you should get a dialog box from Android Studio.

    Click “AVD Manager”

    Click “Create New Virtual Device”

    Select a Device from the list and click “Next”

    If the System Image for the most recent SDK is not installed, you will need to click the "Download" link next to the SDK version.

    After the image has been downloaded, click “Next”

    Preview the settings and then click “Finish”

    You should see the newly created device in the “Your Virtual Device” screen.

    Click the Play ▶️button all the way to the right in the "Actions" column.

    This will open an Android simulator on your machine. If everything is working well, it should load a generic screen with a few apps.

    Go to your terminal and in your React Native project directory, run npm start

    When the Metro Bundler opens up in your browser, click on the option to “Run on Android simulator”

    If you navigate back to your Android simulator you might see a “Permit Drawing Over Other Apps” message. Click the OK button and it should take you to the system settings screen to enable this. You will likely have to go back to the Metro Bundler and select “Run on Android simulator” again.

    This will launch the Expo application in the simulated device and run your bundled code. Eventually, it should load the “Hi There!” screen.

Windows

ios Simulator

Unfortunately, you cannot run iOS simulators on Windows. You can, however, use a physical iOS device running Expo with your Windows machine.

Android Studio Simulator

Make sure Virtualization is enabled in your BIOS. Also, note, your processor must support HAXM. If it does not (which is common with many AMD or non-Intel machines) you will likely not be able to run the simulators. HAXM will also conflict with the Hyper-V Manager if it is enabled.

    Install Android Studio: https://developer.android.com/studio

    After Downloading run the installer.

    Click “Next" to go through the installer wizard.

    Click “Next” on Choose Components screen

    Click “Next” on the Configuration Settings screen

    Click “Install”

    After completion click “Next”

    Click “Finish”

    In the next dialog box that pops up, do not Import settings, Just Click "Ok"

    Click “Next" to go thru the Wizard

    Click “Next” to do a Standard install

    Choose light or dark theme for your editor and click “Next”

    Click “Finish”

    Once the HAXM installer finishes you should get a dialog box from Android Studio.

    Click “AVD Manager”

    Click “Create New Virtual Device”

    Select a Device from the list and click “Next”

    If the System Image for the most recent SDK is not installed, you will need to click the "Download" link next to the SDK version.

    After the image has been downloaded, click “Next”

    Preview the settings and then click “Finish”

    You should see the newly created device in the “Your Virtual Device” screen.

    Click the Play ▶️button all the way to the right in the "Actions" column.

    This will open an Android simulator on your machine. If everything is working well, it should load a generic screen with a few apps.

    Go to your terminal and in your React Native project directory, run npm start

    When the Metro Bundler opens up in your browser, click on the option to “Run on Android simulator”. If it does not open in your browser, you may need to go to localhost:19002 in your browser.

    If you navigate back to your Android simulator you might see a “Permit Drawing Over Other Apps” message. Click the OK button and it should take you to the system settings screen to enable this. You will likely have to back to the Metro Bundler and select “Run on Android simulator” again.

    This will launch the Expo application in the simulated device and run your bundled code. Eventually, it should load the “Hi There!” screen.

### Reference
[Using iOS and Android Simulators](https://nagarro.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/17787262#content)