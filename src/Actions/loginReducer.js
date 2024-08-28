import { LOGIN_USER } from "./loginTypes"
import { THEME_CHANGE } from "./loginTypes"


const initialState = {
    isLoggedIn: false,
    theme: 'light'
}

const loginReducer= (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: 
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }

        case THEME_CHANGE: 
            return {
                ...state,
                theme: action.payload
            }

            default: return state
    }
}

export  default loginReducer