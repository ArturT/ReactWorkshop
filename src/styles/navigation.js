'use strict';

import React from 'react-native';
import colors from './colors.js';

let {
  PixelRatio,
  StyleSheet,
} = React;

let styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: colors.green,
    borderBottomColor: '#2ECBC7',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navBarText: {
    fontSize: 14,
    color: '#fff',
    alignItems: 'center',
  },
  navBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  scene: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
});

export default styles;
