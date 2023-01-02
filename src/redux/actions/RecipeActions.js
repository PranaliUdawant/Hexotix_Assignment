import axios from "axios"
import { ADD_INGRIDIENTS_FAIL, ADD_INGRIDIENTS_REQUEST, ADD_INGRIDIENTS_SUCCESS, ADD_RECIPE_FAIL, ADD_RECIPE_REQUEST, ADD_RECIPE_SUCCESS, DELETE_RECIPE_FAIL, DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS, GET_ALL_RECIPE_FAIL, GET_ALL_RECIPE_REQUEST, GET_ALL_RECIPE_SUCCESS, UPDATE_RECIPE_FAIL, UPDATE_RECIPE_REQUEST, UPDATE_RECIPE_SUCCESS } from "../contant/RecipeConstant"
export const GetAllRecipe = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_RECIPE_REQUEST })
        const { data } = await axios.get("http://localhost:5000/recipes")
        dispatch({ type: GET_ALL_RECIPE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_RECIPE_FAIL, payload: error.message })
    }
}

export const AddRecipe = (recipedata) => async dispatch => {
    try {
        dispatch({ type: ADD_RECIPE_REQUEST })
        const { data } = await axios.post("http://localhost:5000/recipes", recipedata)
        dispatch({ type: ADD_RECIPE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_RECIPE_FAIL, payload: error.message })

    }
}
export const updateRecipe = updatedData => async dispatch => {
    try {
        console.log(updatedData);
        dispatch({ type: UPDATE_RECIPE_REQUEST })
        const { data } = await axios.put(`http://localhost:5000/recipes/${updatedData.id}`, updatedData)
        dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_RECIPE_FAIL, payload: error.message })
    }
}
export const DeleteRecipe = (id) => async dispatch => {
    try {
        dispatch({ type: DELETE_RECIPE_REQUEST })
        const { data } = await axios.delete(`http://localhost:5000/recipes/${id}`)
        dispatch({ type: DELETE_RECIPE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DELETE_RECIPE_FAIL, payload: error.message })

    }
}
export const AddIngridients = (ingridientData) => async dispatch => {
    try {
        dispatch({ type: ADD_INGRIDIENTS_REQUEST })
        const { data } = await axios.post("http://localhost:5000/recipes", ingridientData)
        dispatch({ type: ADD_INGRIDIENTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_INGRIDIENTS_FAIL })

    }
}