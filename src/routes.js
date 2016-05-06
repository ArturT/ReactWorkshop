'use strict'

import React from 'react-native';
import { Router, Route } from 'react-native-router-flux';
import Participants from "./containers/Participants";
import Enroll from "./containers/Enroll";
import NavigationButton from "./components/shared/NavigationButton";
import { Actions } from 'react-native-router-flux';

import styles from './styles/navigation';

class Routes extends React.Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}
              style={styles.scene}>
        <Route name="participants"
               component={Participants}
               title="Students"
               renderRightButton={this.renderAddButton} />
        <Route name="enroll"
               component={Enroll}
               title="Enroll" />
      </Router>
    )
  }

  renderAddButton() {
    let text = 'Add';
    let onPress = () => {
      Actions.enroll();
    };
    return (
      <NavigationButton text={text} onPress={onPress} />
    )
  }
};

export default Routes;
