'use strict';

import React from 'react-native';
import Routes from './routes';
import store from './store';
import { Provider } from 'react-redux/native';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Routes />}
      </Provider>
    );
  }
};

export default App;
