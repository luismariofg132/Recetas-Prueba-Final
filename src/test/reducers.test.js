import { IngredientReducer, loginReducer } from "../redux/reducers/reducers"
import { types } from "../redux/types/types"

describe('Pruebas a los reducers', () => {
    test('Prueba de login', () => {
        const action = {
            type: types.login,
            payload: {
                id: "XzghYqMSGgZrQC1TaVf5w39oKLn1",
                displayname: "kekene1002@sueshaw.com"
            }
        }
        const initialState = {}
        const estado = loginReducer(initialState, action)
        expect(estado).toEqual({
            id: "XzghYqMSGgZrQC1TaVf5w39oKLn1",
            name: "kekene1002@sueshaw.com"
        })
    })
    test('Prueba de logout', () => {
        const action = {
            type: types.logout,
            payload: {}
        }
        const initialState = {}
        const estadoLogout = loginReducer(initialState, action)
        expect(estadoLogout).toEqual({})
    })
    test('Prueba de nuevo ingrediente', () => {
        const action = {
            type: types.newIngredient,
            payload: {
                product: "Arroz",
                items: "1",
                price: "2.85"
            }
        }
        const initialState = []
        const estadoNewIngredient = IngredientReducer(initialState, action)
        expect(estadoNewIngredient).toEqual(
            { "ingredient": [{ "items": "1", "price": "2.85", "product": "Arroz" }] }
        )
    })
    test('Prueba de swift default ingrediente', () => {
        const action = {
            type: types.dwdw,
            payload: {}
        }
        const initialState = []
        const estadoNewIngredient = IngredientReducer(initialState, action)
        expect(estadoNewIngredient).toEqual([])
    })
    test('Prueba de swift default usuario', () => {
        const action = {
            type: types.dwdw,
            payload: {}
        }
        const initialState = []
        const estadoNewIngredient = loginReducer(initialState, action)
        expect(estadoNewIngredient).toEqual([])
    })
})