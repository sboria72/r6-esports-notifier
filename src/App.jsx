import { Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react'

import Home from './pages/Home'
import Login from './pages/Login'
import User from './components/User'
import IsLoggedIn from './components/IsLoggedIn'
import Teams from './pages/Teams'

const App = () => {
  const [user,setUser] = useState(undefined)

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as = {Link} to ="/">R6 Notifier</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <IsLoggedIn user = {user}/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setUser = {setUser}/>} />
        <Route path ="/user" element={<User/>} />
        <Route path ="/teams" element={<Teams/>} />
      </Routes>
    </>
  )
}

export default App
