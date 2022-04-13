import './Home.css'
import CartProfil from '../CartProfil'
import  Search from '../Search'
import  Messaging from '../Messaging'
import data, {messages} from '../Api'
import { useState,useEffect} from 'react'
import Connexion from "../Connexion"
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {addBubbleMessaging, removeBubbleMessaging} from '../../services/redux/actions/bubbleMessagingAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes } from '@fortawesome/free-solid-svg-icons';
function Home() {
    const navigate = useNavigate()
    const userReducer = useSelector(state=>state.userReducer)
    const dispatch = useDispatch()
    const bubbleMessagingReducer = useSelector(state=>state.bubbleMessagingReducer)
    useEffect(()=>{
        if(userReducer.token){
            navigate('/login') 
        }
    },[userReducer])
    const [user, setUser] = useState({});
    const [viewMessagingBull, setViewMessagingBull] = useState(false);

    const viewMessaging = (user)=>{
        dispatch(addBubbleMessaging(user))
        setUser(user)
        setViewMessagingBull(true)
    }
    const all_profil = data.map( (datas,index)=>{
        return <CartProfil profil={datas} key={index} viewMessaging={viewMessaging}/>
    }  
    )
    const closeBubbleMessaging=(id)=>{
        dispatch(removeBubbleMessaging(id))
    }
    const bubbleMessaging = bubbleMessagingReducer.map((user,index)=>{
        return (
            <div key={index} > 
                <button onClick={()=>closeBubbleMessaging(user.id)}><FontAwesomeIcon icon={faTimes} /></button>
                <div onClick={()=>viewMessaging(user)}>
                      {user.name}
                </div>
            </div>
        )
    })

    return (
        <>
        <Search />
        <div className='container-fluid'>
            <div className='d-flex justify-content-center flex-wrap'>
                {all_profil }
            </div>
            <div className='cc_message'>
                    {viewMessagingBull && <Messaging user={user} messages={messages} setViewMessagingBull={setViewMessagingBull}/>}
                   <div className='bubble_messaging'>
                         {bubbleMessaging}
                   </div>
            </div>
          
        </div>
        
        </>
    )
}
export default Home