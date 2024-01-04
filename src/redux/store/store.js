import { createStore, combineReducers } from "redux";

import cartReducer from '../reducers/cartReducer'

const store = createStore(cartReducer);

export default store;
