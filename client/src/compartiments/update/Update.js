import React, { useState } from 'react'
import "../ajout/cAjout.css"
import { updateCont } from '../../Api/Api'
import { useNavigate,useParams } from 'react-router-dom'
const Update = () => {
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const [email,setEmail]=useState('')
const navigate = useNavigate()
const {id}=useParams()
  const handelAdd=async(value,id)=>{
    await updateCont(id)
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
            <input type="button" defaultValue="submit"  onClick={()=>handelAdd(id,{name,email,age})} />
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

  )
}


export default Update
