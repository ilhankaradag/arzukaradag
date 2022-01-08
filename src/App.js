import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/common/Footer'
import MenuBar from './components/common/MenuBar'
import TopBar from './components/common/TopBar'
import GaleriPage from './pages/GaleriPage'
import HakkimdaPage from './pages/HakkimdaPage'
import HomePage from './pages/HomePage'
import KitaplarPage from './pages/KitaplarPage'
import PoemPage from './pages/PoemPage'

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <MenuBar />
      <PoemPage />
      <Routes>
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/kitaplar" element={<KitaplarPage />} />
        <Route path="/hakkimda" element={<HakkimdaPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
