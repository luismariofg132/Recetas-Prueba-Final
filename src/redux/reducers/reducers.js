import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.displayname
            }

        case types.logout:
            return {}

        default:
            return state
    }
}

export const IngredientReducer = (state = [], action) => {
    switch (action.type) {
        case types.newIngredient:
            return {
                ingredient: [action.payload]
            }

        case types.listIngredient:
            return {
                ingredient: [...action.payload]
            }
        default:
            return state
    }
}