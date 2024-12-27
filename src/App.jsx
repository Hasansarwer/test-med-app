import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
