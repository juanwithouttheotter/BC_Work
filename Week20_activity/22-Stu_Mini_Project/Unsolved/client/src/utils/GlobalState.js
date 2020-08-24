import React, { useReducer, createContext } from "react";
import { UPDATE_POSTS, ADD_POST, REMOVE_POST, SET_CURRENT_POST, SAVING } from "./actions";
// Don't forget to import all of your actions!

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [action.post, ]
      };
    case ADD_POST:
      return state;
    case REMOVE_POST:
      return state;
    case SET_CURRENT_POST:
      return state;
    case SAVING:
      return state;

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return <Provider value={[state, dispatch]}{...props} />;
};

const useStoreContext = () => { };

export { StoreProvider, useStoreContext };
