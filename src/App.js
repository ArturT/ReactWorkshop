import React from 'react-native';
import Routes from './routes';
import { Provider } from 'react-redux/native';
import store from './store'

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
