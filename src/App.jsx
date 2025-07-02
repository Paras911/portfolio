import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans bg-gray-950 text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Paras Avinash Shrawaney. All rights reserved.
      </footer>
    </div>
  )
}
