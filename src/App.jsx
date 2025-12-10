import './index.css'
import Hero from './components/Hero'
import Collapse from './components/Collapse'
import Shift from './components/Shift'
import Solution from './components/Solution'
import Architecture from './components/Architecture'
import Features from './components/Features'
import UseCases from './components/UseCases'
import Vision from './components/Vision'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Collapse />
      <Shift />
      <Solution />
      <Architecture />
      <Features />
      <UseCases />
      <Vision />
      <Footer />
    </div>
  )
}

export default App
