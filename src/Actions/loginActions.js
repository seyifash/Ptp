import { LOGIN_USER } from "./loginTypes"
import { THEME_CHANGE } from "./loginTypes"

export const loginUser = () => {
    return {
        type: LOGIN_USER
    }
}

export const toggleTheme = (theme) => {
    return {
        type: THEME_CHANGE,
        payload: theme
    }
}