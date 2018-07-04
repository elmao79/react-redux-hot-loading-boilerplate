
import { createStore } from 'redux';
import reducers from './reducers/';

export function getStore() {
    let store = createStore(reducers);

    return store;
};
