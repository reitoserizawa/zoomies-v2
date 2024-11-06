import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

import Main from './Main';

import { GlobalStyle } from '../ui/index.styles';

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Main />
        </Provider>
    );
}

export default App;
