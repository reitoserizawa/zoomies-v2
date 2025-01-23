import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './LogIn';
import Register from './Register';
import AuthRequired from './AuthRequired';
import Dashboard from './Dashboard';
import DogPark from './DogPark';

const Main: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path={'/'}
                element={
                    <AuthRequired>
                        <Dashboard />
                    </AuthRequired>
                }
            />
            <Route path={'/login'} element={<LogIn />} />
            <Route path={'/register'} element={<Register />} />
            <Route
                path={'/parks'}
                element={
                    <AuthRequired>
                        <DogPark />
                    </AuthRequired>
                }
            />
            <Route
                path='*'
                element={
                    <AuthRequired>
                        <Dashboard />
                    </AuthRequired>
                }
            />
        </Routes>
    </BrowserRouter>
);

export default Main;
