import { combineReducers } from "redux";
import books from "./book";
import filter from "./filter";

export default combineReducers({
  books,
  filter
});
