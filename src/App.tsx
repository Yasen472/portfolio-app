import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'
import Projects from './pages/projects/projects'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/notFound/notFound'
import ScrollToTop from './components/scrollToTop'


function App() {

  return (

    <BrowserRouter>

      <div className="app-container">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
