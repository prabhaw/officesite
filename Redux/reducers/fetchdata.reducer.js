import { FETCH_DATA } from "./../actions/types";

const reducer = (state = { foo: [] }, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, foo: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;