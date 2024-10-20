import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAnimated: false,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setIsAnimated: (state, action) => {state.isAnimated = action.payload},
    }
})

export const {setIsAnimated} = navSlice.actions

export const selectIsAnimated = (state) => state.navScroll.isAnimated;

export default navSlice.reducer