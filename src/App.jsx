import { Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Home from './pages/Home'
import Login from './pages/Login'
import User from './components/User'

const App = () => {
  let login = false
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as = {Link} to ="/">R6 Notifier</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <Link to="/login"><User/></Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
