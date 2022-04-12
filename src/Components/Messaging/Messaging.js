import "./messaging.css"
import femme from '../../Images/femee.webp'
function Messaging({messages}){
    const myid=1
    return (
        <div className="messaging">
             <div className="header_messaging">
                 <div>
                    <div className="user_profil_avatar" style={{backgroundImage: "url("+femme+")"}}>
                    </div>
                     <span>Thierie Man</span>
                 </div>
                <div>
                    <div>
                        ...
                    </div>
                    <div>
                        *
                    </div>
                </div>
             </div>
             <div className="contantMessage">
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
             </div>
             <div className="action">
                  <button>Envoyer</button>
             </div>
        </div>
    )
}
export default Messaging