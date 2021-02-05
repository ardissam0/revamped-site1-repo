import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
      </div>
    </div>
  );
}

export default App;
