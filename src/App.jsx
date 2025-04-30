import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Popular from './components/Popular'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Categories/>
     <Featured /> 
     <Popular/>
     <Footer/>
    </>
  )
}

export default App
