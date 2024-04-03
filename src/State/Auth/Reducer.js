
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTRER_REQUEST, REGISTRER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    isLoading: null,
    error: null,
    jwt: null
}

 export  const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTRER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, isLoading: true, error: null };

        case REGISTRER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, error: null, jwt: action.payload }

        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, error: null, user: action.payload }

        case REGISTRER_REQUEST:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case LOGOUT:
            return { ...state }
        default:
            return state;
    }

}