
import './App.css'
import CoinTable from './components/CoinTable'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import { useState } from 'react'

function App() {

  const [currency, setCurrency] = useState("usd")


  return (
    <>
     
      <Navbar setCurrency={setCurrency}/>
      <Banner />
      <CoinTable currency={currency} />
      
    </>
  )
}

export default App
