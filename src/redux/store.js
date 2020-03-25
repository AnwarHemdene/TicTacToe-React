import { createStore, combineReducers, applyMiddleware } from "redux";
import homeReducer from "./home/reducer";
import homeMiddleware from "./home/middleware";

const reducers = combineReducers({
  home: homeReducer,
});

const middlewares = applyMiddleware(homeMiddleware);

const store = createStore(reducers, middlewares);

export default store;
