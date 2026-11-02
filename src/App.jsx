import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Register from './pages/Register'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import { company, navLinks } from './data'

export default function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
  window.scrollTo(0, 0)
}, [page])

  const pages = {
    home: <Home onNavigate={setPage} />,
    about: <About />,
    services: <Services onNavigate={setPage} />,
    gallery: <Gallery />,
    register: <Register />,
    contact: <Contact />,
  }

  return (
    <>
      <Header name={company.name} links={navLinks} current={page} onNavigate={setPage} />
      <main>{pages[page]}</main>
      <Footer company={company} links={navLinks} onNavigate={setPage} />
    </>
  )
}