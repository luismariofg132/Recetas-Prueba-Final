import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Ingredients from '../components/Ingredients/Ingredients'
const DashBoardRouter = () => {
    return (
        <div>

            <Routes>
                <Route path='/ingredients' element={<Ingredients />} />
            </Routes>

        </div>
    )
}

export default DashBoardRouter