import React from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import DrawingSpace from './DrawingSpace.js';
import { Provider } from 'react-redux';
import store from '../store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <SidebarContainer/>
        <DrawingSpace/>
      </div>
    </Provider>
  );
}

export default App;
