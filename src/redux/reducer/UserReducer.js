import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTERED_USER_FAIL, REGISTERED_USER_REQUEST, REGISTERED_USER_SUCCESS, USER_LOGOUT } from "../contant/UserConstant";

export const UserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case REGISTERED_USER_REQUEST: return { ...state, loading: true, }
        case REGISTERED_USER_SUCCESS: return { ...state, loading: false, userregistered: true, registeruser: payload, }
        case REGISTERED_USER_FAIL: return { ...state, loading: false, error: payload }

        case LOGIN_USER_REQUEST: return { ...state, loading: true }
        case LOGIN_USER_SUCCESS: return { ...state, loading: false, userlogin: payload, login: true }
        case LOGIN_USER_FAIL: return { ...state, loading: false, error: payload }

        case USER_LOGOUT: return {}
        default: return state;
    }
}