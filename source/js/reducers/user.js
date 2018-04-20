import { Map } from "immutable";
import jwtDecode from 'jwt-decode';
import { SET_LOGGED_USER_FROM_LOCALSTORAGE } from "../actions/user";
import { LOCALSTORAGE_ID_TOKEN_KEY } from "../constants/consts";

const initialState = Map({
    loading: false,
    error: null,
    loggedUserData: null,
});

const actionsMap = {
    [SET_LOGGED_USER_FROM_LOCALSTORAGE]: (state, action) => {
        let idToken = localStorage.getItem(LOCALSTORAGE_ID_TOKEN_KEY);
        let decodedToken = jwtDecode(idToken);
        let userData = {
            authId: decodedToken.sub,
            name: decodedToken.name,
            email: decodedToken.email,
            avatar: decodedToken.picture,
        }
        return state.merge(Map({
            loading: false,
            error: null,
            loggedUserData: userData,
        }));
    }
};

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}