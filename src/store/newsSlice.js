import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getStories} from '../api'

export const fetchStories = createAsyncThunk(
    'stories/fetchStories',
    async function (id,{rejectWithValue}) {
        try {
            const response = await getStories(id);
            if (!response) {
                throw new Error('server failed')
            }
            return response;
          
        } catch (error) {
            return rejectWithValue(error.message)
        }
      
    }
   
)

const newsSLice = createSlice({
    name:'news',
    initialState:{
        news:{},
        status:null,
        error:null,
    },

   
    extraReducers:{
        [fetchStories.pending]:(state)=>{
            state.status = 'loading';
            state.error = null;
        },
        [fetchStories.fulfilled]:(state,action)=>{
            state.status = 'resolved';
            state.news = action.payload
        },
        [fetchStories.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
})

export default newsSLice.reducer;