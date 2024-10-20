import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    orientation: 'PORTRAIT',
    keyboardOpened: false,
    containerDimensions: {
        width: 0,
        height: 0
    },
    safeArea: {
        width: 0,
        height: 0
    },
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrientation: (state, action) => {state.orientation = action.payload},
        setKeyboardOpened: (state, action) => {state.keyboardOpened = action.payload},
        setContainerDimensions: (state, action) => {state.containerDimensions = action.payload},
        setSafeArea: (state, action) => {state.safeArea = action.payload},
    }
})

export const {setOrientation, setKeyboardOpened, setContainerDimensions, setSafeArea} = navSlice.actions

export const selectOrientation = (state) => state.navApp.orientation;
export const selectKeyboardOpened = (state) => state.navApp.keyboardOpened;
export const selectContainerDimensions = (state) => state.navApp.containerDimensions;
export const selectSafeArea = (state) => state.navApp.safeArea;

export default navSlice.reducer