import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'

const App = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App