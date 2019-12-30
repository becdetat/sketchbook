import React from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import DrawingSpaceContainer from '../containers/DrawingSpaceContainer.js';
import { Provider } from 'react-redux';
import store from '../store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <SidebarContainer/>
        <DrawingSpaceContainer/>
      </div>
    </Provider>
  );
}

export default App;
