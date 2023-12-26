import React, { useState } from 'react'
import "./Ajout.css"
import { postContact } from '../../Api/Api'
import { useNavigate } from 'react-router-dom'
const Ajout = () => {
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const [email,setEmail]=useState('')
const navigate = useNavigate()
  const handelAdd=async(value)=>{
    await postContact()
    navigate('/afficheClient')
  }
  return (
    <div className="container">
  <div className="text">Ajout d'un client</div>
  <form >
    <div className="form-row">
      <div className="input-data">
        <input type="text" required=""   value={name} onChange={(e)=>setName(e.target.value)} />
        <div className="underline" />
        <label htmlFor=""    >First Name</label>
      </div>
      <div className="input-data">
        <input type="text" required=""   value={age} onChange={(e)=>setAge(e.target.value)}  />
        <div className="underline" />
        <label htmlFor="">Age</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data">
        <input type="text" required=""  value={email} onChange={(e)=>setEmail(e.target.value)} />
        <div className="underline" />
        <label htmlFor="">Email Address</label>
      </div>
    </div>
    <div className="form-row">
      <div className="input-data textarea">
        <br />
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner" />
            <input type="button" defaultValue="submit"  onClick={()=>handelAdd({name,email,age})} />
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

  )
}

export default Ajout
