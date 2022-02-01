import './App.css'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header/Head'
import Main from './components/Main/Center'
import About from './components/About/About'
import Port from './components/Port/Port'
import Contatos from './components/Contatos/Contatos'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <About />
      <Port />
      <Contatos />
    </div>
  )
}

export default App
