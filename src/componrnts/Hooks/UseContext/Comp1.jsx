import React from 'react'
import Comp2 from './Comp2'
import { useState } from 'react';
export const userDetailsContext=React.createContext(null);
const Comp1 = () => {
  let[userDetails,setDetails]=useState({name:'Manish',age:26,toggle:false})
let changeDetails=()=>{
if(userDetails.toggle===false){
  setDetails({...userDetails,name:'Suman',age:28,toggle:true})
}
else{
  setDetails({...userDetails,name:'Manish',age:26,toggle:false})

}
}
  return (
    <div className='m-5'>
      <br />
      <h2 style={{color:"red"}}>useContext</h2>
      <h3>Comp1</h3><hr />
  <userDetailsContext.Provider value={{userDetails,changeDetails}}>
  <Comp2/>
  </userDetailsContext.Provider>
        
    </div>
  )
}

export default Comp1