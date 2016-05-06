'use strict'

import React from 'react-native';

import styles from '../../styles/application';

let {
  Text,
} = React;

class Error extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <Text className="error">{message}</Text>
    )
  }
}

export default Error;
