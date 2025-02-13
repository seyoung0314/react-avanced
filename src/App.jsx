import { useState } from 'react'
import Header from './components/Layout/Header'

import './App.css'
import Meals from './components/Meals/Meals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div id="main">
        <Meals/>
      </div>
    </>
  )
}

export default App
