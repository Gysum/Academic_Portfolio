import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Certificates from '../components/Certificates'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-grid-pattern min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certificates />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

