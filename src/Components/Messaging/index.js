import Messaging from './Messaging'
function index ({user,messages,setViewMessagingBull}){
    return <Messaging user={user} messages={messages} setViewMessagingBull={setViewMessagingBull} />
}
export default index