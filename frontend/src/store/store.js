import { createStore } from 'redux'

let reducer = (state, action) => {
    if (action.type === 'pulled-items-from-db') {
        return {...state,
        planters: action.planters}
    }
    return state
}

const store = createStore(reducer, {
    planters: []
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store