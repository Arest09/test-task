import {configureStore} from '@reduxjs/toolkit';
import storyIdReducer from './storyIdSlice';
import newsReducer from './newsSlice'


export default configureStore({
    reducer:{
        storiesId:storyIdReducer,
        news:newsReducer,
    }
})