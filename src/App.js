import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Sidebar />
      <Video />
    </Provider>
  );
}

export default App;
