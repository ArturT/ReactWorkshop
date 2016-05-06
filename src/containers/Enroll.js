'use strict'

import React from 'react-native';

import ParticipantsActionCreator from '../action_creators/ParticipantsActionCreator';
import EnrollActionCreator from '../action_creators/EnrollActionCreator';
import { connect } from 'react-redux';
import emitter from '../lib/Emitter';
import ActionTypes from '../constants/ActionTypes';
import { Actions } from 'react-native-router-flux';
import Error from '../components/shared/Error';

import styles from '../styles/application';

let {
  View,
  Text,
  TextInput
} = React;

class Enroll extends React.Component {
  componentWillMount() {
    this.subscription = emitter.addListener(
      ActionTypes.SAVE_PRESSED,
      this.onSavePressed.bind(this)
    );
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  renderErrorForField(field) {
    const {errors} = this.props;
    if(errors && Object.keys(errors).includes(field))
      return <Error message={errors[field][0]} />
  }

  onChangeText(type) {
    return (text) => {
      const action = EnrollActionCreator.onChanged(type, text);
      this.props.dispatch(action);
    }
  }

  onSavePressed() {
    const action = ParticipantsActionCreator.addStudent(
      this.props.form, this.redirectToList.bind(this));
    this.props.dispatch(action);
  }

  redirectToList() {
    Actions.participants();
  }

  render() {
    return (
      <View>
        <View style={styles.formRow}>
          <Text>First Name</Text>
          {this.renderErrorForField("name")}
          <TextInput placeholder="Arien"
                     onChangeText={this.onChangeText('name')}
                     style={styles.textInput} />
        </View>
        <View style={styles.formRow}>
          <Text>Surname</Text>
          {this.renderErrorForField("surname")}
          <TextInput placeholder="Doriath"
                     onChangeText={this.onChangeText('surname')}
                     style={styles.textInput} />
        </View>
      </View>
    );
  }
}

function select(state) {
  return {
    errors: state.enroll.errors,
    form: state.enroll.form,
  }
}

export default connect(select)(Enroll);
