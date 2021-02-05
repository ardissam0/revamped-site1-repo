import React from 'react';
import './App.css';
import './Sidebar.css';

import { Home, About, Contact, Navigation, Sidebar } from './components';
import { Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar/>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
      </div>
    </div>
  );
}

export default App;
