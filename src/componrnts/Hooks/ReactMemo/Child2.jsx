import React from 'react';

const Child2 = (props) => {
    console.log("Props value at child2 :",props);
    
    let{decrementFunc,decremnet}=props
  return (
    <div>
        Child-2
            <button onClick={decrementFunc}>Increment | {decremnet}</button>

    </div>
  );
}

export default Child2;
