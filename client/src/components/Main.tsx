import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './LogIn';
import Register from './Register';
import RequiredLogin from './RequiredLogIn';
import Dashboard from './Dashboard';

const Main: React.FC = () => {
    // TODO: add jwt verification and lead to log in page if not verified
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'/'}
                    element={
                        <RequiredLogin>
                            <Dashboard />
                        </RequiredLogin>
                    }
                />
                <Route path={'/login'} element={<LogIn />} />
                <Route path={'/register'} element={<Register />} />

                <Route
                    path='*'
                    element={
                        <RequiredLogin>
                            <Dashboard />
                        </RequiredLogin>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Main;
