import React from 'react'
import '../App.css'
import Login from './Login'

function Start(){
    
    return(
        <div className='start'>
           <h1 className = 'g'>Great job on making the sale! <br></br>Here comes the easy part.</h1>
           <Login />
        </div>
    )
}

export default Start