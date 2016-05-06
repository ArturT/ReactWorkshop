/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import App from './src/App.js';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactWorkshop extends Component {
  render() {
    return (
      <App />
    );
  }
};

AppRegistry.registerComponent('ReactWorkshop', () => ReactWorkshop);
