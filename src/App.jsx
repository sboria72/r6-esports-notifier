import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'

const App = () => {

  return (
    <>
      <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/project">Project</Link> | <Link to = "/course">Course</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
      </>
  )
}

export default App
