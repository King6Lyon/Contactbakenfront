import {configureStore} from '@reduxjs/toolkit'

import contactSlice from "./contactSilece"

export default configureStore({
    reducer:{
        contact:contactSlice
    }

})