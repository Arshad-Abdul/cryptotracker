
import './App.css'

import Routing from './components/Routing/Routing'

// import { useState } from 'react'
import Home from './pages/Home'
// import { CurrencyContext } from './context/CurrencyContext'

function App() {

  // const [currency, setCurrency] = useState("usd")


  return (
    <>
      
      {/* <CurrencyContext.Provider value={ {currency, setCurrency} }>  */}
        <Routing />


      {/* </CurrencyContext.Provider> */}
     
      
    </>
  )
}

export default App
