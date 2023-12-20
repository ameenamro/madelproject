import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './companats/Header'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Routers from './pages/Routers'
import Home from './pages/Home';
import Database from './database/Database'


function App() {
  const [count, setCount] = useState(0)
  return (
<div>
<Routers></Routers>

</div>


  )
}

export default App
