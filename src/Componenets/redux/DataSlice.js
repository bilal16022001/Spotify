
import { createSlice} from "@reduxjs/toolkit";

const initialState = {
   playlists:[]
}

const DataSlice = createSlice({

    name:"data",
    initialState,
    reducers:{
     
        show:(state) => {
           state.playlists=[]
         }
     
    },
  
 })

 export default DataSlice.reducer
export const {show} = DataSlice.actions