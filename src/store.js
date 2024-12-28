import { createStore } from 'redux';
import libraryReducer from './libraryReducer';

export default createStore(libraryReducer);