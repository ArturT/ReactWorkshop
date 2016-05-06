'use strict'

import React from 'react-native';

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
      <View>
        <Text>{this.studentName()}</Text>
        <View>
          <Text>House:</Text>
          <Text>{house}</Text>
        </View>
        <View>
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
