import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar_2'
import Homepage from './Pages/Homepage/Hero_2'
import {Box} from '@chakra-ui/react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Admin from './Pages/Admin'
import {app} from './firebaseConfig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="App" position={'relative'}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Login />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
      </Router>
      <Homepage />
    </Box>
  )
}

export default App
