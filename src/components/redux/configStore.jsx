import { configureStore } from "@reduxjs/toolkit";
import {BurgerReducer} from './BurgerReducer.jsx';

export const store = configureStore({
  reducer: {

    BurgerReducer,
  }
});
