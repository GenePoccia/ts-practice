import {createStore} from 'redux'
import { string } from 'prop-types';




interface action {
    type: string
    planters: string
}

const reducer = (state: object, action: action) => {
    if (action.type === 'load-planters') {
        return {...state,
        planters: action.planters}
    }

    return state;
}

const store = createStore(
    reducer,
    {
        planters: Array
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store