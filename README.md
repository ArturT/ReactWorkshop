## React Native workshop

### Pre-requirements

1. [Homebrew](http://brew.sh/)
2. `brew install nvm`
3. `nvm install 5.0`
4. `brew install watchman`
5. `npm install`

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

1. Run empty project
  * Checkout to `rn-0` tag to have empty `React Native` project with
    some dependencies already added (see
`package.json`)
  * `open ios/BadgerReact.xcodeproj`
  * Hit `cmd` + `R`

2. Take a look on [react-native-redux-router](https://github.com/aksonov/react-native-redux-router) and create first route:
  * have in mind that we actually would use [react-native-router-flux](https://github.com/aksonov/react-native-router-flux), but in `redux` one there is better documentation for `Provider` part
  * create `Routes.js` where you define `Routes` component, which should
    render `Router` and first `Route` - `Participants`
  * create `App.js` where you define your root component (similarly to
    the `application.js` but in the `App` component don't use `Provider` yet - just render `Routes `)
  * create empty (for now) `Participants` component
  * open `index.ios.js` and add rendering `App` component there - you
    can remove uneeded imports and styles
  * check if it's working ;)

3. Create store
  * from the previous workshop copy [store.js](https://github.com/cichaczem/react-workshop/blob/master/src/store.js) and modify it to our needs - we don't need:
    * `configureStore` as method anymore - there is no server/client
      side so there is no problem with history server side
    * `reduxReactRouter` reducer

  * now we can use store in `App` component - render `Provider` there
    according to the [react-native-redux-router doc](https://github.com/aksonov/react-native-redux-router)
  * to get it fully working we need reducers, reducers need action types, so let's copy all `redux` stuff from the previous workshop:
      * `action_creators`
      * `reducers`
      * `constants`
      * `lib`

4. Update `Participants` container to render actual list of participants
  * fetch data using `redux` architecture
  * change `render` method to display data but don't bother with `ListView` for now - use simple `View`

5. It does not look nice though, let's add some styles!
  * checkout to `rn-1` - I added following style files:
    * `src/styles/navigation.js`
    * `src/styles/application.js`
    * `src/styles/colors.js`
  * checkout how to use styles in [React Native doc](https://facebook.github.io/react-native/docs/style.html#content)
  * apply `style` `styles.scene` to the `Router` and `navigationBarStyle` (this property comes from `react-native-router-flux`) `styles.navBar`
  * apply `styles.student` style to the student row
  * apply `styles.studentName` for the name and `styles.studentInfo` for rows with info

6. Let's add enroll functionality
  * create route for `Enroll` and create empty `Enroll` component for now
  * look in the [router doc](https://github.com/aksonov/react-native-router-flux) and use `renderRightButton` to add right button to the participants list.
  * in the method, render `NavigationButton` with text 'Add' and `onPress` method
  * create `NavigationButton` component in shared component directory using [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#content)
  * in the `onPress` method use `Actions` to navigate to enroll route (see
    router doc)

7. The form
  * create simple view of a form - only name and surname for now:
  * style each row with `styles.formRow` and each input with
    `styles.textInput`
  * add `onChangeText` - use `redux` (dispatch action and save it to
    props)
  * copy and adjust `renderErrorForField` from previous workshop
  * add right button to save form and `onSavePressed` action - `fbemitter` would be handy (`npm install --save fbemitter`)

