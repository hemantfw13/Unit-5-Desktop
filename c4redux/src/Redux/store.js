import { loginReducer } from "./Login/loginReducer";
import { combineReducers, createStore } from "redux";
import { eventReducer } from "./events/eventsReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  event: eventReducer,
});
export const store = createStore(rootReducer); // add your reducers here
