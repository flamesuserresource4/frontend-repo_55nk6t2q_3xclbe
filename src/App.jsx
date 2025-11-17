import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeSections from './components/HomeSections'
import FixturesPage from './components/FixturesPage'
import PlayersPage from './components/PlayersPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

function Home() {
  return (
    <>
      <Hero />
      <HomeSections />
    </>
  )
}

function Footer() {
  return (
    <footer className="border-t border-green-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-green-800/80 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} Sankalp Cricket Club</div>
        <div className="mt-2 md:mt-0">Proudly built for our community</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-green-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixtures" element={<FixturesPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
