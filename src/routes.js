import React from 'react-native';
import { Router, Route } from 'react-native-router-flux';
import Participants from "./containers/Participants";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route name="participants"
               component={Participants}
               title="Students" />
      </Router>
    )
  }
};

export default Routes;
