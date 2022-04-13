
import { ADD_USER } from "../actions/userAction"
import { REMOVE_USER } from "../actions/userAction"
import { UPDATE_USER } from "../actions/userAction";
const initialStateCommande = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : {};
function userReducer(state=initialStateCommande,action){
    switch(action.type){
        case ADD_USER : {
            localStorage.setItem('user', JSON.stringify(action.payload))
            return action.payload
        }
        case UPDATE_USER: {
            localStorage.setItem('user', JSON.stringify(action.payload))
            return action.payload
        }
        case REMOVE_USER: {
            localStorage.removeItem('user')
            return {};
        }
        default:
            return state
    }
}
export default userReducer