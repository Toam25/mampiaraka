const  ADD_BUBBLE = "ADD_BUBBLE"
const  UPDATE_BUBBLE ="UPDATE_BUBBLE"
const  REMOVE_BUBBLE = "UPDATE_USER"

export const  addBubbleMessaging=(payload)=>{
    return ({type: ADD_BUBBLE, payload})
}
export const  removeBubbleMessaging=(payload)=>{
    return ({type: REMOVE_BUBBLE, payload})
}
export {
    ADD_BUBBLE, UPDATE_BUBBLE, REMOVE_BUBBLE 
}