import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    let[incremnet,setIncremnet]=useState(0)
    let[decremnet,setDecremnet]=useState(0)
const increment=()=>{
    setIncremnet(incremnet+1)
}
const decrement=()=>{
    setDecremnet(decremnet-1)
    }

  return (
      <div className="m-5" >
        <h2 style={{ color: "red" }}>React Memo</h2><hr />
      <Child1 incrementFunc={increment} increment={incremnet}  />
      <Child2 decrementFunc={decrement} decremnet={decremnet}  />

    </div>
  );
}

export default Parent;
