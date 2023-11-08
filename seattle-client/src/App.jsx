import './App.css'
import { DetailsContext } from './DataContext'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [details, setDetails] = useState({})

  return (
    <DetailsContext.Provider 
    // the value gets set with the details and setDetails from the state above so that both things can be accessed from anywhere, and the context can be updated from any file we want
    value={{ 
        details,
        setDetails
      }}>
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    </DetailsContext.Provider>
  )
}

export default App
