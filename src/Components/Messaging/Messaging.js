import "./messaging.css"
import femme from '../../Images/femee.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMailBulk, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Scrollbars as CustomScroll } from 'react-custom-scrollbars-2'
function Messaging({user,messages,setViewMessagingBull}){
    const myid=1
    const avatar=femme;
    return (
        <div className="messaging">
             <div className="header_messaging">
                 <div className="profil_messaging_header_image">
                    <div className="user_profil_avatar" style={{backgroundImage: "url("+avatar+")"}}>
                    </div>
                     <span className="name_user_messaging">{user.name}, {user.age} ans</span>
                 </div>
                <div className="close_messaging_and_menu">
                    {/* <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
                    <div className="close_messaging" onClick={()=>setViewMessagingBull(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
             </div>
             <div className="contantMessage">
             <CustomScroll
                autoHeightMax={'500px'}
                autoHeightMin={0}
                autoHideDuration={200}
                autoHideTimeout={1000}
                autoHeight
                className="scroll_detail_research"
            >
            {
                        messages.map((message,item)=>{
                            return (
                                 <div key={item} className={myid===message.id_user ? "text_message my_texto" : "text_message your_texto" }>
                                     <div className="text">
                                            <p>{message.text}</p>
                                            <p>{message.createdAt}</p>
                                     </div>
                                 </div>
                            )
                        })
            }
            </CustomScroll>

             </div>
             <div className="action">
                  <div className="text_messaging_to_send">
                      <input className="text_input_messaging"/>
                      <button className="button_send_message"><FontAwesomeIcon icon={faMailBulk} /></button>
                  </div>
             </div>
        </div>
    )
}
export default Messaging