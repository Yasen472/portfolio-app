import './App.css'
import Navbar from './components/navbar/navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/notFound/notFound'
import ScrollToTop from './components/scrollToTop'
import MainPage from './pages/main/mainPage'


function App() {

  return (

    <BrowserRouter>

      <div className="app-container">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
