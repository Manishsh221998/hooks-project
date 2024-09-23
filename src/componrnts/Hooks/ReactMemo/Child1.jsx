import React from 'react';

const Child1 = (props) => {
    console.log("Props Value at child1 :",props);
    
    let{incrementFunc,increment}=props
    React.memo(Child1,(prevProps,nextProps) =>prevProps.increment === nextProps.increment)
  return (
    <div>
        Child-1
      <button onClick={incrementFunc}>Increment | {increment}</button>
    </div>
  );
}

export default Child1;
