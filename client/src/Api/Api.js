import axios from 'axios'


export const fectAllContact = async()=>{

    const {data}= await  axios.get('http://localhost:5000/contact/allcontacts')
    return data
}


export const postContact = async(valuer)=>{

    const elementaposter= await  axios.post('http://localhost:5000/contact/ajout',{...valuer})
}

export const updateCont = async(id, valuer)=>{

    const elementaposter= await  axios.put(`http://localhost:5000/contact/update/${id}`, valuer)
}


export const del = async(id)=>{

    const elementaposter= await  axios.delete(`http://localhost:5000/contact/remove/${id}`)
}