import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import ReducerExapmle1 from '../componrnts/Hooks/UseReducer/ReducerExapmle1'
import { Button,Row,Col } from 'react-bootstrap'
  const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='useReducer' element={<ReducerExapmle1/>}/>
        </Routes>
    </Router>
   )
}

export default Routing