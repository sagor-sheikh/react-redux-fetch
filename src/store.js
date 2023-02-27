import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import TodosReducer from "./Components/reducers/TodosReducer";


const store = createStore(TodosReducer, applyMiddleware(thunk));

export default store;