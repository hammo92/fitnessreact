import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import app from 'reducers/app';
import people from 'reducers/people';

export default combineReducers({
    app,
    people,
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
});
