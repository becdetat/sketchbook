import { createStore } from 'redux';
import rootReducer from './reducers';
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from './utilities/localStorageHelper';
import throttle from 'lodash/throttle'

const state = loadStateFromLocalStorage();
const store = createStore( rootReducer, state );

const saveState = () => {
  console.log(store.getState())
  saveStateToLocalStorage( store.getState() );
  // This is where remote sync would be started
};
const throttledSaveState = throttle( saveState, 100 );

store.subscribe( throttledSaveState );

export default store;
