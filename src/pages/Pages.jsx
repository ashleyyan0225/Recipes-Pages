import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine.jsx';
import Searched from './Searched';
import Recipe from './Recipe';
import {Route,Routes,useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

function Pages() {
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={window.location} key={window.location.pathname}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cuisine/:type' element={<Cuisine />}></Route>
          <Route path='/searched/:search' element={<Searched />}></Route>
          <Route path='/recipe/:name' element={<Recipe />}></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default Pages