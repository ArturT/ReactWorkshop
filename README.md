## React Native workshop

### Pre-requirements

1. [Homebrew](http://brew.sh/)
2. `brew install nvm`
3. `nvm install 5.0`
4. `brew install watchman`
5. `npm install`

Tip: npm 3.7.3. node 5.9.0

    $ nvm alias default 5.9.0

    $ npm install && npm run fixFbjsConflicts

Remember to run brew update && brew install watchman (ensure you have 4.5.0 watchman version).

If you are using iterm2 then ensure the terminal (system one) has set correct node version 5.9.0 because Xcode use system terminal.

#### Android setup (optional)

1. download [Android jdk](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Install Android `sdk`: `brew install android-sdk`
3. Add `export ANDROID_HOME=/usr/local/opt/android-sdk` to `~/.bash_profile`
4. `brew install gradle`
5. `touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties`

6. Run `android` and install
  * Android SDK Build-tools version 23.0.2
  * Android 6.0 (API 23)
  * Intel x86 Atom System Image
  * from Extras install
    * Android Support Repository
    * Google Play Services
    * Intel x86 Emulator Accelerator (HAXM installer)

7. Setup Accelerator:
  * $ANDROID_HOME/extras/intel/Hardware_Accelerated_Execution_Manager/silent_install.sh
  * verify it's working: after running `kextstat | grep intel` you
    should see `com.intel.kext.intelhaxm`
8. Add Andorid Virtual Device by running `android avd` and filling form
   with:
  * name: badgerreact
  * target: Google APIs 6.0, api level 23
  * CPU/ABI: Google APIs Intel Atom (x86)
  * skin: no skin
  * RAM: 2024
  * Use Host GPU: checked

#### iOS setup

1. Xcode

#### More info

* [Android setup](https://facebook.github.io/react-native/docs/android-setup.html)
* [Getting started](https://facebook.github.io/react-native/docs/getting-started.html)

### Run

#### iOS

* `open ios/BadgerReact.xcodeproj`
* Hit `cmd` + `R`

#### Android

* run `emulator -avd badgerreact`
 You should see `HAXM is working and emulator runs in fast virt mode`
* in other tab run `react-native run-android`
* if you have problems with fetching bundle - shake device, go to Dev
  Settings and set up dev server ip and port
* Run `npm run logs` to see your app's logs

### Tutorial

Is [here](tutorial.md)
