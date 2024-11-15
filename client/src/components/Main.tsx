import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './LogIn';
import Register from './Register';
import PreLogin from './PreLogi';
import Dashboard from './Dashboard';
import DogPark from './DogPark';

const Main: React.FC = () => {
    // TODO: add jwt verification and lead to log in page if not verified
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'/'}
                    element={
                        <PreLogin>
                            <Dashboard />
                        </PreLogin>
                    }
                />
                <Route
                    path={'/login'}
                    element={
                        <PreLogin>
                            <LogIn />
                        </PreLogin>
                    }
                />
                <Route
                    path={'/register'}
                    element={
                        <PreLogin>
                            <Register />
                        </PreLogin>
                    }
                />
                <Route
                    path={'/parks'}
                    element={
                        <PreLogin>
                            <DogPark />
                        </PreLogin>
                    }
                />
                <Route
                    path='*'
                    element={
                        <PreLogin>
                            <Dashboard />
                        </PreLogin>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Main;
