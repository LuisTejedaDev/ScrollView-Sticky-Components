import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    inputValue: '',
    isLock: false,
    isRecording: false,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setInputValue: (state, action) => {state.inputValue = action.payload},
        setIsLock: (state, action) => {state.isLock = action.payload},
        setIsRecording: (state, action) => {state.isRecording = action.payload},
    }
})

export const {setInputValue, setIsLock, setIsRecording} = navSlice.actions

export const selectInputValue = (state) => state.navMicrophone.inputValue;
export const selectIsLock = (state) => state.navMicrophone.isLock;
export const selectIsRecording = (state) => state.navMicrophone.isRecording;

export default navSlice.reducer