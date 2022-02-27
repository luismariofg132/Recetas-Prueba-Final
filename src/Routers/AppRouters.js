import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'
import Login from '../components/Record/Login'

const AppRouters = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/privacy' element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    )
}

export default AppRouters