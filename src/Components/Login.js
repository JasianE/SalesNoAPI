import React, {useState} from 'react'
import _protected from '../logic/protected'
import { useDispatch } from 'react-redux'
import { authenticate } from '../Redux/reducer'

function Form(){
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password === _protected){
            dispatch(authenticate())
        } else {
            setPassword('')
            alert('Wrong password, check the pinned messages in slack or the sales logistic document.')
        }
    }

    return(
        <form className='login'>
            <input 
            type='text'
            value={password}
            name='password'
            onChange={(e) => {setPassword(e.target.value)}}
            placeholder='Password'
            className='standard loginText'
            />
            <button type='submit' onClick={handleSubmit} className='button'>Login</button>
        </form>
    )
}

export default Form