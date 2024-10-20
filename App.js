import 'react-native-gesture-handler'
import React from 'react';
import {Provider} from 'react-redux'
import {store} from './src/store'
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import App from './src/index';

export default () => {

    return (
        <Provider store={store}>
            <GestureHandlerRootView>
                <App />
            </GestureHandlerRootView>
        </Provider>
    );
};