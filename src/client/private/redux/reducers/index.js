
import { combineReducers } from 'redux';
import mainMessageReducer from './main-message-reducer';

const reducers = combineReducers({
    mainMessageReducer: mainMessageReducer
});

console.log(reducers);

export default reducers;
