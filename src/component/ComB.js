import React, { useContext } from 'react'
import {Firstname} from '../App'

function ComB() {
    const user = useContext(Firstname)
  return (
    <div>
      {user}
    </div>
  )
}

export default ComB
