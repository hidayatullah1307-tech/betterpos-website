import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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
import FeaturesPage from './pages/FeaturesPage'
import SalesPage from './pages/SalesPage'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>BetterPOS — Kasir Profesional, Sekali Bayar Selamanya</title>
        <meta name="description" content="Sistem kasir digital offline untuk toko Indonesia. Tidak perlu internet, tidak ada biaya bulanan. Sekali beli, pakai selamanya. Coba gratis 14 hari." />
        <meta property="og:url" content="https://betterpos.my.id/" />
        <meta property="og:title" content="BetterPOS — Kasir Profesional, Sekali Bayar Selamanya" />
        <meta property="og:description" content="Tidak perlu internet. Tidak ada biaya bulanan. Sistem kasir offline sekelas aplikasi premium — harga sekali bayar, pakai selamanya." />
        <link rel="canonical" href="https://betterpos.my.id/" />
      </Helmet>
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
        <Route path="/fitur" element={<FeaturesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/new-post" element={<NewPostPage />} />
        <Route path="/kemitraan" element={<SalesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
