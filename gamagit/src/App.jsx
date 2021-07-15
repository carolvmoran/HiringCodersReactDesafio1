// import './App.css'
import React from 'react'

import Header from './components/Header'
import Banners from './components/Banners'
// eslint-disable-next-line
export default () => (
  <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Banners></Banners>
      </main>
  </div>
);