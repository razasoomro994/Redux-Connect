import React,{useReducer} from 'react'
const initialState=0
function UseReducer() {
    const[count, dispatch]=useReducer(reducer,initialState)
  return (
    <div>

        <h1>Count {count}</h1>
             <button>Increament</button>
             <button>Decreament</button>
             <button>Reset</button>

     </div>
  )
}

export default UseReducer
