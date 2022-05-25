import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

function Profile() {
  let { id } = useParams();
  return (
    <div>
     <h2>THIS IS THE PROFILE OF {id.toUpperCase()}</h2>
    </div>
  )
}

export default Profile