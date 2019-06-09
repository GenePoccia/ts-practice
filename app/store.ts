import { createStore, Reducer } from "redux";
import { string } from "prop-types";

const initialState: Object = {
  planters: [],
  cart: []
};

interface action {
  type: string;
  planters: string;
}

const reducer: Reducer<unknown, action> = (
  state: any,
  action: action
): object => {
  switch (action.type) {
    case "load-planters": {
      return { ...state, planters: action.planters };
    }
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
