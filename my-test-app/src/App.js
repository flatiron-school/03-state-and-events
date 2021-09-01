// Import our useState Hook
import { useState } from 'react';

import './App.css';

// Component Imports
import Header from './components/Header';
import NavBar from './components/NavBar';
import CardList from './components/CardList';

// Data
import cardData from './cards';

// What advantages does adding a new state "cards"
// offer us?

function App() {
  const [ cards, setCards ] = useState(cardData);
  
  return (
    <div className="App">
      {/* NavBar Component */}
      <NavBar isLoggedIn/>
      
      {/* Header Component */}
      <Header 
        firstName="Louis" 
        lastName="Medina" 
      />

      {/* CardList Component */}
      <CardList 
        cards={cards} 
      />
    </div>
  );
}

export default App;
