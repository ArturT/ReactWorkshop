import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import EnrollReducer from './reducers/EnrollReducer';
import ParticipantsReducer from './reducers/ParticipantsReducer';
import thunk from 'redux-thunk';
import routes from './routes';

const reducers = combineReducers({
  enroll: EnrollReducer,
  participants: ParticipantsReducer,
})

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
)(createStore);

const initialState = {}

export default createStoreWithMiddleware(reducers, initialState);
