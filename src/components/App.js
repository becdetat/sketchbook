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
            {/* SidebarContainer is repeated inside the Switch so that it can
              get access to the route (for determining the current page). This
              feels a little hacky. */}
            <Route path="/:id" children={(<><SidebarContainer/><DrawingSpaceRouting/></>)}/>
            <Route path="/" children={(<><SidebarContainer/><DrawingSpaceRouting/></>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
