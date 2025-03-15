
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'

function App() {
  return (
    <div className='content-wrapper max-w-screen-2xl mx-auto text-base font-Karla'>  
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default App
