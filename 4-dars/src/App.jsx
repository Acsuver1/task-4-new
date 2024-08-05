import './App.css'
import Nav from './components/Nav'
import About from './routes/About'
import Sign from './routes/Sign'
import Home from './routes/Home'
import { Routes , Route } from 'react-router-dom'


function App() {
 

  return (
    <>
    <Nav />
    <Routes> 
      <Route path="/" end element={<Home />} />
      <Route path="/about" element={<About />} />   
      <Route path="/sign" element={<Sign />} />
     </Routes>
     
    </>
  )
}

export default App
