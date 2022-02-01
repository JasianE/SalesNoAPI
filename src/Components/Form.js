import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { done } from '../Redux/reducer'

function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState(0)
    const [address, setAddress] = useState('')
    const [person, setPerson] = useState('Alisa')
    const [payment, setPayment] = useState('cash')
    const [id, setId] = useState('')
    const [pickup, setPickup] = useState('Francis')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        switch(e.target.name){
            case 'name':
                setName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'number':
                if(parseInt(e.target.value, 10) > -1){
                    setNumber(e.target.value)
                } 
                break;
            case 'address':
                setAddress(e.target.value)
                break;
            case 'person':
                setPerson(e.target.value)
                break;
            case 'payment':
                setPayment(e.target.value)
                break;
            case 'id':
                setId(e.target.value)
                break;
            case 'pickup':
                setPickup(e.target.value)
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {name, email, number, address, person, payment, id, pickup}
        
        const response = 'poo'
        axios.post('https://sheet.best/api/sheets/e92fff05-0f61-4862-8541-3c395f639054', data)
        .then(response => {
            if(response.status !== 200){
                alert('An error has occured! Go on slack and alert Jun', `Error: ${response}`)
            } else {
                dispatch(done())
            }
        })
    }
    return(
        //Scalability??? whats that/!?!?!?
        <form className='info'>
            <div className='card'>
                <h1>Who are you?</h1>
                <select name = 'person' value={person} onChange={handleChange}>
                    <option value="Alisa">Alisa</option>
                    <option value="Andrew">Andrew</option>
                    <option value="Angelina">Angelina</option>
                    <option value="Anisa">Anisa</option>
                    <option value="Annie Lao">Annie Lao</option>
                    <option value="Annie Wong">Annie Wong</option>
                    <option value="Digiorno">Digiorno</option>
                    <option value="Ebraham">Ebraham</option>
                    <option value="Francis">Francis</option>
                    <option value="Iqra">Iqra</option>
                    <option value="Isabelle">Isabelle</option>
                    <option value="Joseph">Joseph</option>
                    <option value="Jun">Jun</option>
                    <option value="Katherine">Katherine</option>
                    <option value="Keyrane">Keyrane</option>
                    <option value="Melissa">Melissa</option>
                    <option value="Nicholas">Nicholas</option>
                    <option value="Sarah">Sarah</option>
                    <option value="Shereny">Shereny</option>
                    <option value="Thomas">Thomas</option>
                </select>
            </div>

            <div className='card'>
                <h1>Customer Name</h1>
                <input 
                name = 'name'
                type = 'text'
                value = {name}
                onChange={handleChange}
                required
                placeholder='Customer Name'
                className='standard'
                />
            </div>

            <div className='card'>
                <h1>Customer Email (Optional, recommended)</h1>
                <input 
                name = 'email'
                type = 'email'
                value = {email}
                onChange = {handleChange}
                placeholder='Customer Email'
                className='standard'
                />
            </div>

            <div className='card'>
                <h1>Quantity Bought By Customer</h1>
                <input 
                name = 'number'
                type = 'number'
                value = {number}
                required
                onChange = {handleChange}
                placeholder='Quantity'
                className='standard'
                />
            </div>
            
            <div className='card'>
                <h1>Customer Address (Only if dropping off at customer's house)</h1>
                <input 
                name = 'address'
                type = 'text'
                value = {address}
                onChange={handleChange}
                placeholder='Customer Address'
                className='standard'
                />
            </div>

            <div className='card'>
                <h1>How did they pay?</h1>
                <select name='payment' value={payment} onChange={handleChange}>
                    <option value='cash'>Cash</option>
                    <option value='e-transfer'>E-transfer</option>
                </select>
            </div>

            <div className='card'>
                <h1>Box ID (found at bottom of box)</h1>
                <input 
                name='id'
                type='text'
                value={id}
                required
                onChange = {handleChange}
                placeholder='Box ID e.g. 12'
                className='standard'
                />
            </div>

            <div className='card'>
                <h1>Who will you pick up the box from?</h1>
                <h4>*Francis is in downtown/East York and Melissa is in Scarborough</h4>
                <select name='pickup' value={pickup} onChange={handleChange}>
                    <option value='Francis'>Francis</option>
                    <option value='Melissa'>Melissa</option>
                </select>
            </div>

            <button className = 'submit' type = 'submit' onClick={handleSubmit}>Order</button>
        </form>
    )
}

export default Form