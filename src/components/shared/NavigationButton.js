'use strict'

import React from 'react-native';
import styles from '../../styles/navigation';

let {
  Text,
  TouchableOpacity
} = React;

class NavigationButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}
        style={styles.navBarButton}>
        <Text style={styles.navBarText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default NavigationButton;
