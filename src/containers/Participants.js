'use strict'

import React from 'react-native';

import Student from '../components/participants/Student';
import ParticipantsActionCreator from '../action_creators/ParticipantsActionCreator';
import { connect } from 'react-redux';

let {
  View,
  ScrollView
} = React;

class Participants extends React.Component {
  componentWillMount() {
    let action = ParticipantsActionCreator.requestStudents();
    this.props.dispatch(action);
  }

  render() {
    let students = this.props.students.map((student) => {
      return <Student data={student} key={student.id} />
    });

    return (
      <View>
        <ScrollView>
          {students}
        </ScrollView>
      </View>
    )
  }
}

function select(state) {
  let students = state.participants.all;

  return {
    students: students
  };
}

export default connect(select)(Participants);
