import {combineReducers} from "redux";
import likesReducer from "./likesReducer";
import inputReducer from "./inputReducer";
import commentsReducer from "./commentsReducer";
import appReducer from "./appReducer";


const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    appReducer,
})

export default rootReducer