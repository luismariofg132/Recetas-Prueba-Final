import { shallow } from 'enzyme'
import BuyIngredients from '../components/Ingredients/BuyIngredients'
import Ingredients from '../components/Ingredients/Ingredients'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRouter from '../Routers/PrivateRouter'

describe('Prueba de compra de ingredientes', () => {
    test('Verifica el permiso de autenticacion para BuyIngredient', () => {
        const isAuthenticated = false
        const wrapper = shallow(
            <Router>
                <Routes>
                    <Route path='/*' element={<PrivateRouter isAuthenticated={isAuthenticated}>
                        <BuyIngredients />
                    </PrivateRouter>} />
                </Routes>
            </Router>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find(Route).prop('element').props.isAuthenticated).toBeFalsy()
    })
    test('Verifica el permiso de autenticacion para Ingredient', () => {
        const isAuthenticated = false
        const wrapper = shallow(
            <Router>
                <Routes>
                    <Route path='/*' element={<PrivateRouter isAuthenticated={isAuthenticated}>
                        <Ingredients />
                    </PrivateRouter>} />
                </Routes>
            </Router>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find(Route).prop('element').props.isAuthenticated).toBeFalsy()
    })
})