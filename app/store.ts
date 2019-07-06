import { string } from "prop-types";
import { createStore, Reducer } from "redux";

const initialState: Object = {
  planters: [],
  cart: [],
  
};

interface action {
  type: string;
  planters: string;
}

const reducer: Reducer<unknown, action> = (
  state: any,
  action: action,
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
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
