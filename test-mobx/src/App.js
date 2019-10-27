import React from 'react';

import CountryStore from './services/CountryStore'
import CountryList from './Components/CountryList'
import './App.css';
import { Provider } from 'mobx-react';

function App() {
  return (
    <div className="App">
      <Provider CountryStore={CountryStore}>
        <CountryList />
      </Provider>

    </div>
  );
}

export default App;
