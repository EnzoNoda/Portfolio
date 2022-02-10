import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import Main from './components/Main/Center'
import About from './components/About/About'
import Port from './components/Port/Port'
import Contatos from './components/Contatos/Contatos'
import Home from './components/pages'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
      <Main />
      <About />
      <Port />
      <Contatos />
    </Router>
  )
}

export default App
