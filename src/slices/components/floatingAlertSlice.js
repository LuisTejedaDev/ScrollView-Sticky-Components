import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    alertVisibility: false,
    alertInfo: {
        title: 'Titulo de prueba',
        type: 4,
    },
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setAlertInfo: (state, action) => {state.alertInfo = action.payload},
        setAlertVisibility: (state, action) => {state.alertVisibility = action.payload},
    }
})

export const {setAlertInfo, setAlertVisibility} = navSlice.actions

export const selectAlertInfo = (state) => state.navFloatingAlert.alertInfo;
export const selectAlertVisibility = (state) => state.navFloatingAlert.alertVisibility;

export default navSlice.reducer