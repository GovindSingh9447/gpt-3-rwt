import React from 'react'

import './App.css';

import { Article, Brand, CTA, Feature, Navbar } from './components'; 
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>

    </div>
  )
}

export default App
