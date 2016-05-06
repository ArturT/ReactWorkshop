'use strict'

import React from 'react-native';
import { Router, Route } from 'react-native-router-flux';
import Participants from "./containers/Participants";

import styles from './styles/navigation';

class Routes extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}
              style={styles.scene}>
        <Route name="participants"
               component={Participants}
               title="Students" />
      </Router>
    )
  }
};

export default Routes;
