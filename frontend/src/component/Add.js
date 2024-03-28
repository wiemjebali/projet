import React, { useState } from 'react'
import './add.css'
import { postContact } from '../api/contact'
import { useNavigate } from 'react-router';

const Add = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [adresse, setAdresse] = useState('')
  const [age, setAge] = useState(0)
  const navigate = useNavigate()
  const handelAdd = async (values) => {
    await postContact(values)
    navigate('/list')
  }
  return (
    <div> <div className='test'>
      <form id="login-form" class="login-form" autocomplete="off" >
        <h1>Add contact Form</h1>
        <div>
          <label class="label-email">
            <input type="email" class="text" name="email" placeholder="Name" tabindex="1" required value={name}
              onChange={(e) => setName(e.target.value)} />
            <span class="required">Name</span>
          </label>
        </div>
        <div>
          <label class="label-email">
            <input type="email" class="text" name="age" placeholder="age" tabindex="1" required value={age}
              onChange={(e) => setAge(e.target.value)} />
            <span class="required">Age</span>
          </label>
        </div>
        <div>
          <label class="label-email">
            <input type="email" class="text" name="adresse" placeholder="adresse" tabindex="1" required value={adresse}
              onChange={(e) => setAdresse(e.target.value)} />
            <span class="required">Adresse</span>
          </label>
        </div>

        <div class="email">
          <a><button onClick={() => handelAdd({ name, age, adresse, email })} >Add New Contact</button></a>
        </div>

      </form></div></div>
  )
}

export default Add