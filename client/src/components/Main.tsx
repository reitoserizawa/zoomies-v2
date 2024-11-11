import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogIn from './LogIn';
import Register from './Register';
import Profile from './Profile';
import RequiredLogin from './RequiredLogIn';

const Main: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={'/'}
                    element={
                        <RequiredLogin>
                            <Profile />
                        </RequiredLogin>
                    }
                />
                <Route path={'/login'} element={<LogIn />} />
                <Route path={'/register'} element={<Register />} />

                <Route
                    path='*'
                    element={
                        <RequiredLogin>
                            <Profile />
                        </RequiredLogin>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Main;
