import { createSlice } from "@reduxjs/toolkit";

const contactSilece = createSlice({
    name:"contact",
    initialState:[

        {
            name:"azertyRedux",
            age:"72",
            email:"azertyRedux@gmail.com"
        }
    ],
    reducers:{

        getcontact:(state, action)=>{
            return action.payload
        }
    }

})

export const {getcontact} = contactSilece.actions
export default contactSilece.reducer