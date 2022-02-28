import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import BuyIngredients from '../components/Ingredients/BuyIngredients'
import Ingredients from '../components/Ingredients/Ingredients'
const DashBoardRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<BuyIngredients />} />
                <Route path='/ingredients' element={<Ingredients />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRouter