import React from 'react'
import ReducerExapmle1 from './UseReducer/ReducerExapmle1'
import Comp1 from './UseContext/Comp1'
import UseMemo from './UseMemo/UseMemo'
import Parent from './ReactMemo/Parent'

const Hooks = () => {
  return (
    <div> 
        <h1 className='text-center mb-2 mt-4 text-primary'>React Popular HOOKS</h1><hr />
          <ReducerExapmle1/>
         <Comp1/>
         <UseMemo/>
         <Parent/>
    </div>
  )
}

export default Hooks