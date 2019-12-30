import { combineReducers } from 'redux';
import pages from './pages';
import currentPage from './currentPage';

export default combineReducers( {
  pages,
  currentPage,
} );
