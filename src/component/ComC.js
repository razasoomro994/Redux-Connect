import React, {  } from 'react'
import { Firstname } from '../App'
function ComC() {
  return (
    <div>
         <Firstname.Consumer>
            {(fname)=>{
                return (
                    

                  

                
                     <h1>My name is {fname}</h1>
                        

                    

                    
                );

            }}
        </Firstname.Consumer>
    </div>
  )
}

export default ComC
