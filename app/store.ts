import {createStore} from 'redux'
import { string } from 'prop-types';

const initialState: Object = {
    planters: [],
    cart: []
}


interface action {
    type: string
    planters: string
}

const reducer = (state = initialState, action: action) => {
   switch (action.type) {
       case 'load-planters':
           {
               return {...state, planters: action.planters}
           }
           default: return state
   }
   
    // if (action.type === 'load-planters') {
    //     return {...state,
    //     planters: action.planters}
    // }

    // return state;
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store