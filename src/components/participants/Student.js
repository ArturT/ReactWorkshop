'use strict'

import React from 'react-native';

import styles from '../../styles/application';

let {
  View,
  Text
} = React;

class Student extends React.Component {
  studentName() {
    const { name, surname } = this.props.data;
    return `${name} ${surname}`;
  }

  render() {
    const { house, pet } = this.props.data;

    return (
      <View style={styles.student}>
        <Text style={styles.studentName}>{this.studentName()}</Text>
        <View style={styles.studentInfo}>
          <Text>House: </Text>
          <Text>{house}</Text>
        </View>
        <View style={styles.studentInfo}>
          <Text>Pet Companion: </Text>
          <Text>{pet}</Text>
        </View>
      </View>
    )
  }
}

Student.PropTypes = {
  data: React.PropTypes.object.isRequired
}

export default Student;
