import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import User from './components/User'
import SignUp from './components/SignUp';
import NoPageFound from './components/NoPageFound';
import { userContext } from './context/UserContext';
import { themeContext } from './context/ThemeContext';

function App() {

  const [user, setUser] = useState("")
  const [light, setLight] = useState(true)


  return (
    <userContext.Provider value={{user, setUser }}>
      <themeContext.Provider value={{light, setLight}}>
    <div className={light ? 'App light' : 'App dark'}>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/user" element={<User />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      </BrowserRouter>
    </div>
    </themeContext.Provider>
    </userContext.Provider>
  );
}

export default App;
