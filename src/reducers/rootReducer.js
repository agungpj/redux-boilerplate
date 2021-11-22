import { combineReducers } from "redux";
import getPopularGamesReducer from "./gameReducer";

const rootReducer = combineReducers({
  popular: getPopularGamesReducer,
});

export default rootReducer;
