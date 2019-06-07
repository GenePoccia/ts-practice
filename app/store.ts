import {createStore} from 'redux'
import { string } from 'prop-types';

interface state {
    
}

interface action {
    type: string
    planters: string
}

const reducer = (state: state, action: action) => {
    if (action.type === 'load-planters') {
        return {...state,
        planters: action.planters}
    }

    return state;
}

const store = createStore(
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store