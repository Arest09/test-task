import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getStoriesId} from '../api'

export const fetchStoriesId = createAsyncThunk(
    'storiesId/fetchStoriesId',
    async function (_,{rejectWithValue}) {
        try {
            const response = await getStoriesId();
            if (!response.length) { 
                throw new Error('server error')
            }
            return response.slice(0,100);
        } catch (error) {
            return rejectWithValue(error.message)
        }
      
    }
)

const storyIdSLice = createSlice({
    name:'storiesId',
    initialState:{
        storiesId:[],
        status:null,
        error:null,
    },

   
    extraReducers:{
        [fetchStoriesId.pending]:(state)=>{
            state.status = 'loading';
            state.error = null;
        },
        [fetchStoriesId.fulfilled]:(state,action)=>{
                state.status = 'resolved';
                state.storiesId = action.payload;   
        },
        [fetchStoriesId.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
})



export default storyIdSLice.reducer;