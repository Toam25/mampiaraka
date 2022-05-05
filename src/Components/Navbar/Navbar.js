import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import Notifications from "../Notifications";
import Messages from "../Messages";
import "./Navbar.css"
function Navbar() {
    const [isActive, setisActive] = useState("");
    const [textHeaderSideBar, settextHeaderSideBar] = useState("Messages");
    function openSideBar(text){
            settextHeaderSideBar(text)
            setisActive('sidebar_active')
    }
    function loadNotificationOrMessage(){
        console.log(textHeaderSideBar)
         if(textHeaderSideBar=='Notifications'){
             return <Notifications />
         }
         else{
             return <Messages />
         }
    }
    return (
        <>
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    Rado Nirina
                </div>
                <div className="link">
                    <div className="active" id="home">Accueil</div>
                    <div id="nav_messages" onClick={()=>openSideBar('Messages')}>
                        Messages
                        <span className="nbr_notif">3</span>
                    </div>
                    <div id="nav_notification" onClick={()=>openSideBar('Notifications')}>
                        Notifications
                        <span className="nbr_notif">3</span>
                    </div>
                </div>
            </div>
        </div>
              {isActive!=="" && <div className="back_side_bar"></div>}
                <div className={"side_bar " + isActive} >
                    
                    <button className="close_message_or_notification" onClick={()=>setisActive('')}><FontAwesomeIcon icon={faTimes}/></button>
                    <div className="header_side_bar">
                        {textHeaderSideBar}
                    </div>
                    <div className="container_notif_or_message">
                            {loadNotificationOrMessage()}
                    </div>
                </div>
       
        </>
    )
}
export default Navbar