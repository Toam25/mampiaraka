import { combineReducers } from "redux"
import userReducer from "./userReducer"
import bubbleMessagingReducer from "./bubbleMessagingReducer"
export default combineReducers({
     userReducer,
     bubbleMessagingReducer
})