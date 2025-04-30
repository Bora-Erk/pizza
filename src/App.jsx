import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './components/Header'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Popular from './components/Popular'
import Footer from './components/Footer'
import {
  Switch,
  Route,
  Router,
  Link
} from "react-router-dom";
import Siparis from './components/Siparis'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     
     <Switch>
          <Route path="/" exact>
            <Header/>
            <Categories/>
            <Featured /> 
            <Popular/>
          </Route>
          <Route path="/siparis">
            <Siparis/>
          </Route>
        </Switch>
        <Footer/>
    </>
  )
}

export default App
