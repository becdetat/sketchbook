import React from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import DrawingSpaceContainer from '../containers/DrawingSpaceContainer.js';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DrawingSpaceRouting from './DrawingSpaceRouting';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/:id" children={(<><SidebarContainer/><DrawingSpaceRouting/></>)}/>
            <Route path="/" children={(<><SidebarContainer/><DrawingSpaceRouting/></>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
