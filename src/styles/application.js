'use strict';

import React from 'react-native';
import colors from './colors.js';

let {
  PixelRatio,
  StyleSheet,
} = React;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },

  button: {
    padding: 5,
    margin: 5,
    backgroundColor: '#fff',
  },

  wizard: {
    width: 200,
    height: 200,
  },

  textInput: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },

  student: {
    padding: 10
  },

  studentName: {
    fontWeight: 'bold',
    padding: 5
  },

  studentInfo: {
    flexDirection: 'row',
    padding: 5
  },

  formRow: {
    padding: 10
  }
});

export default styles;
