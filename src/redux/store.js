import {configureStore} from "@reduxjs/toolkit"
import MainDataReducer from "./slice/MainData"

export const store=configureStore({
    reducer:{
        Main_data:MainDataReducer 
    }

})