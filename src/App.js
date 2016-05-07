import React from 'react-native';
import Routes from './routes';
import { Provider } from 'react-redux/native';

class App extends React.Component {
  render() {
    return (
      <Provider>
        {() => <Routes />}
      </Provider>
    );
  }
};

export default App;
