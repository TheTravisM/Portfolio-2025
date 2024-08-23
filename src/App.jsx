import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'


function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
