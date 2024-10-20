import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {appSlice, microphoneSlice, scrollSlice} from './slices'

import thunk from 'redux-thunk';

export const store = configureStore({
   reducer: {
      navApp: appSlice,
      navScroll: scrollSlice,
      navMicrophone: microphoneSlice,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
  })
}, applyMiddleware(thunk))