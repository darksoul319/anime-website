import { useState } from 'react'
import Nav from './components/navbar/Nav'
import './App.css'
import Card from './components/card/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Card/>
     </>
  );
}

export default App;
