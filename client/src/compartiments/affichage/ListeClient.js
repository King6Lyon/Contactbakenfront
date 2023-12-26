import React, { useEffect, useState } from 'react'
import ClientCard from './ClientCard'
import { useDispatch, useSelector } from 'react-redux'
import "../affichage/ListeClient.css"
import { getcontact } from '../../redux/contactSilece'
import { fectAllContact } from '../../Api/Api'
import { useNavigate } from 'react-router-dom'
import { del } from '../../Api/Api'
const ListeClient = () => {

const user = useSelector(state=>state.contact)
const navigate = useNavigate()
const dispatch = useDispatch()
  const getdata=async()=>{
    const data = await fectAllContact()
    console.log('data', data.contacts
    )
      dispatch(getcontact(data.contacts))
  }
console.log('zertyuijnbvgf',user)
  useEffect(()=>{
    getdata()
  },[])

  const handelremobve=async(id)=>{
    await del(id)
    getdata()
  }
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"200px"}}>
      <div className="table-container" >
  <div className="table-horizontal-container">
    <table className="unfixed-table" >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
       {
       user.map((el)=>( <tr >
          <th>{el.name}  </th>
          <td>{el.age}</td>
          <td>{el.email}</td>
         <div  style={{display:"flex"}} > <button className="btn"onClick={()=> handelremobve(el._id)}>del</button> <br/> <button className="btn"onClick={()=> navigate(`/update/${el._id}`)}>upd</button></div>
        </tr>))
       }
      </tbody>
      <tfoot>
        <tr>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
</div>
  )
}

export default ListeClient


