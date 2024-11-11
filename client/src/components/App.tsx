import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { GlobalStyle } from '../ui/index.styles';

import { store } from '../redux/store';

import Main from './Main';

function App(): ReactElement {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Main />
        </Provider>
    );
}

export default App;
