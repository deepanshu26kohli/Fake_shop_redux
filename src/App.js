import React from 'react'
import Header from './Containers/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductListing from './Containers/ProductListing'
import ProductDetail from './Containers/ProductDetail'
import "./App.css"
const App = () => {
  return (
    <div className='App'>

      <Header />
      <div className='cont'>
        <BrowserRouter>

          <Routes>
            <Route exact path="/" element={<ProductListing />} />
            <Route exact path="/product/:productId" element={<ProductDetail />} />
            <Route path="*">404 not found</Route>
          </Routes>

        </BrowserRouter>
      </div>


    </div>

  )
}

export default App
