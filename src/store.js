import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import EnrollReducer from './reducers/EnrollReducer';
import ParticipantsReducer from './reducers/ParticipantsReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  enroll: EnrollReducer,
  participants: ParticipantsReducer
});

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
