import { ADD_INGRIDIENTS_FAIL, ADD_INGRIDIENTS_REQUEST, ADD_INGRIDIENTS_SUCCESS, ADD_RECIPE_FAIL, ADD_RECIPE_REQUEST, ADD_RECIPE_SUCCESS, DELETE_RECIPE_FAIL, DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS, GET_ALL_RECIPE_FAIL, GET_ALL_RECIPE_REQUEST, GET_ALL_RECIPE_SUCCESS, UPDATE_RECIPE_FAIL, UPDATE_RECIPE_REQUEST, UPDATE_RECIPE_SUCCESS } from "../contant/RecipeConstant";

export const RecipeReducer = (state = { recipes: [] }, { type, payload }) => {
    switch (type) {
        case GET_ALL_RECIPE_REQUEST: return { ...state, loading: true }
        case GET_ALL_RECIPE_SUCCESS: return { ...state, loading: false, recipes: payload, getrecipe: true }
        case GET_ALL_RECIPE_FAIL: return { ...state, loading: false }

        case ADD_RECIPE_REQUEST: return { ...state, loading: true }
        case ADD_RECIPE_SUCCESS: return { ...state, loading: false, recipesAdded: payload, addrecipe: true }
        case ADD_RECIPE_FAIL: return { ...state, loading: false, error: payload }

        case UPDATE_RECIPE_REQUEST: return { ...state, loading: true, updated: false }
        case UPDATE_RECIPE_SUCCESS: return { ...state, loading: false, updated: true }
        case UPDATE_RECIPE_FAIL: return { ...state, loading: false, }

        case DELETE_RECIPE_REQUEST: return { ...state, loading: true, deleterecipe: false }
        case DELETE_RECIPE_SUCCESS: return { ...state, loading: false, deleterecipe: true }
        case DELETE_RECIPE_FAIL: return { ...state, loading: false }

        case ADD_INGRIDIENTS_REQUEST: return { ...state, loading: true }
        case ADD_INGRIDIENTS_SUCCESS: return { ...state, loading: false, addingrident: payload }
        case ADD_INGRIDIENTS_FAIL: return { ...state, loading: false }
        default: return state;
    }
}