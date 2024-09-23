import React, { useReducer } from 'react'
 let initialState=0;
 const reducer=(state,action)=>{
  switch(action){
    case 'increment':return state +1;
    case 'decrement':return state -1;
    case 'reset': return 0;
    default:throw new Error('unexpected Error')
  }
 }
const ReducerExapmle1 = () => {
  let[num,dispatch]=useReducer(reducer,initialState)
   return (
    <div className='m-5'>
      <h2 style={{color:"red"}}>useReducer</h2>
      <hr />
      <h3>{num}</h3>
      <button onClick={()=>{dispatch('increment')}}>+1</button>
      <button onClick={()=>{dispatch('decrement')}}>-1</button>
      <button onClick={()=>{dispatch('reset')}}>reset</button>
    </div>
  )
}

export default ReducerExapmle1