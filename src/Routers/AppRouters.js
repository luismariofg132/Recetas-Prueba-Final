import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'
import Login from '../components/Record/Login'
import Record from '../components/Record/Record'
import DashBoardRouter from './DashBoardRouter'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const AppRouters = () => {
    const [checking, setchecking] = useState(true)
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLogin(true)
            }
            setchecking(false)
        })
    }, [setIsLogin, setchecking])

    if (checking) {
        return (
            <h1>Cargando... Espere</h1>
        )
    }

    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<PublicRouter isAuthenticated={isLogin}>
                    <Login />
                </PublicRouter>} />
                <Route exact path='/registro' element={<PublicRouter isAuthenticated={isLogin}>
                    <Record />
                </PublicRouter>} />
                <Route exact path='/*' element={<PrivateRouter isAuthenticated={isLogin}>
                    <DashBoardRouter />
                </PrivateRouter>} />
                <Route exact path='/privacy' element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    )
}

export default AppRouters