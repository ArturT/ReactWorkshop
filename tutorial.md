### Tutorial

1. Run empty project
  * Checkout to `rn-1` tag to have empty `React Native` project with
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
  * checkout to `rn-5-pre` - I added following style files:
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
