import { 
    loginStart, 
    loginSuccess, 
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logout
} from "./userRedux";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure());
    }
};


export const exitLgout = (dispatch) => {
    dispatch(logout())
}
