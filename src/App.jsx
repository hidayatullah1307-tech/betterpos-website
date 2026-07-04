import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CostComparison from './components/CostComparison'
import WhoIsThisFor from './components/WhoIsThisFor'
import ScreenGallery from './components/ScreenGallery'
import Features from './components/Features'
import Pricing from './components/Pricing'
import WhatsIncluded from './components/WhatsIncluded'
import SetupOptions from './components/SetupOptions'
import Trial from './components/Trial'
import Roadmap from './components/Roadmap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import NewPostPage from './pages/NewPostPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CostComparison />
      <WhoIsThisFor />
      <ScreenGallery />
      <Features />
      <Pricing />
      <WhatsIncluded />
      <SetupOptions />
      <Trial />
      <Roadmap />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/new-post" element={<NewPostPage />} />
      </Routes>
    </BrowserRouter>
  )
}
