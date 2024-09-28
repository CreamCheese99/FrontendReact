import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/็Header'
import Sidebar from './components/Sidebar'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <Form />
      </div>
    </div>
  )
  
}


export default App
