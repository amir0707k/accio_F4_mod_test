import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

let initialState = {totalAmount:0};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        totalAmount: totalAmount + action.payload,
      };

    default:
      return {
        totalAmount,
      };
  }
};

export default reducer;