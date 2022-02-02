// import './App.css'
// import React,{useReducer} from 'react'




// const initialState = {count: 0};

// function reducer(state, action) {
//     switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count -1};
//       case 'reset':
//         return initialState
//     default:
//       throw new Error();
//   }
// }

//   export default function App() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//     <div className='App'>
//       Count: {state.count}
//       <br/>
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//       <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

//     </div>
//   );
// }

// import React,{createContext, useReducer} from 'react'
// import ComA from './component/ComA'
// import ComB from './component/ComB'
// 

// export const Firstname = createContext()
// function App() {
//   return (
//     <div className='App'>
//       <Firstname.Provider value={'hasnain  raza'}>

//       <ComA/>
//       {/* <ComB/> */}
//       </Firstname.Provider>
//     </div>
//   )
// }

// export default App



import React from 'react'

function App() {
  return (
    <div className='App'>
      Redux Is Connect With Our Application
    </div>
  )
}

export default App
