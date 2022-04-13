
import { ADD_BUBBLE, UPDATE_BUBBLE, REMOVE_BUBBLE  } from "../actions/bubbleMessagingAction"

const initialStateCommande = localStorage.getItem('_bubbleMessaging') !== null ? JSON.parse(localStorage.getItem('_bubbleMessaging')) : [];
function bubbleMessagingReducer(state=initialStateCommande,action){
    switch(action.type){
        case ADD_BUBBLE : {
            const bubbleMessaging = state.length>5 ? [...new Set([...state,action.payload])].slice(1) : [...new Set([...state,action.payload])] ;
             console.log(bubbleMessaging)
            localStorage.setItem('_bubbleMessaging', JSON.stringify(bubbleMessaging))
            return bubbleMessaging
        }
        case UPDATE_BUBBLE: {
            localStorage.setItem('_bubbleMessaging', JSON.stringify(action.payload))
            return action.payload
        }
        case REMOVE_BUBBLE: {
            const bubbleMessaging = [...state].filter(item=>item.id!==action.payload)
            localStorage.setItem('_bubbleMessaging', JSON.stringify(bubbleMessaging))
            return bubbleMessaging
        }
        default:
            return state
    }
}
export default bubbleMessagingReducer