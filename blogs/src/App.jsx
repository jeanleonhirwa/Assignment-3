import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Hero from './components/Hero'
import Addblog from './components/Addblog'
import Blogs from './pages/Blogs'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/add" element={<Addblog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  )
}

export default App
