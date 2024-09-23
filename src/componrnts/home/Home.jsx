import React from 'react'
import { Navbarr } from '../DifferentParts/Navbarr'
import { Banner } from '../DifferentParts/Banner'
import { CardHeading } from '../DifferentParts/CardHeading'
import { Cards } from '../DifferentParts/Cards'
import Hooks from '../Hooks/Hooks'
 
   
const Home = () => {
  return (
    <div>
        <Navbarr/>
       <Banner/>
       <CardHeading/>
         <Cards/>
       <Hooks/>
     </div>
  )
}

export default Home