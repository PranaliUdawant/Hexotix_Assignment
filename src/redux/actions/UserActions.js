import axios from "axios"
import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTERED_USER_FAIL, REGISTERED_USER_REQUEST, REGISTERED_USER_SUCCESS, USER_LOGOUT } from "../contant/UserConstant"
export const UserRegister = (userdata) => async dispatch => {
    try {
        dispatch({ type: REGISTERED_USER_REQUEST })
        const { data } = await axios.post("http://localhost:5000/registeruser", userdata)

        dispatch({ type: REGISTERED_USER_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: REGISTERED_USER_FAIL, payload: error.message })

    }
}
export const UserLogin = ({ email, password }) => async dispatch => {
    try {
        dispatch({ type: LOGIN_USER_REQUEST })
        const { data } = await axios.get("http://localhost:5000/registeruser")

        const result = data.find(item => item.email === email && item.password === password)
        if (!result) {
            dispatch({ type: LOGIN_USER_FAIL, payload: "please check email or password" })
        } else {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: result })
        }
    } catch (error) {
        dispatch({ type: LOGIN_USER_FAIL, payload: error })

    }
}
export const logoutUser = () => dispatch => {
    dispatch({ type: USER_LOGOUT })

}