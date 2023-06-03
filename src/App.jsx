import './App.css'
import Nav from './components/Nav'
import { Home } from './pages/Home'
import { TopTracks } from './pages/TopTracks'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tracks" element={<TopTracks />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
