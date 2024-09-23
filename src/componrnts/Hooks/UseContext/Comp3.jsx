import React, { useContext } from 'react'
import { userDetailsContext } from './Comp1'
import { Button } from 'react-bootstrap';

const Comp3 = () => {
  const contextData=useContext(userDetailsContext)
  console.log("Context Value",userDetailsContext);
  return (
    <div>
       <h3>Comp3</h3><hr />
      <h4>User Name: {contextData.userDetails.name}</h4>
      <h5>Age: {contextData.userDetails.age}</h5>
      <Button onClick={contextData.changeDetails}>Toggle Name</Button>

    </div>
  )
}

export default Comp3