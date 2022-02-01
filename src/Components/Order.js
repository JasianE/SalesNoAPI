import React from 'react'
import Form from './Form'
import Done from './Done'
import { useSelector } from 'react-redux'

function Order(){
    const state = useSelector(state => state.done)
    return(
        <div>
            {state ? <Done /> : <Form />}
        </div>
    )
}

export default Order