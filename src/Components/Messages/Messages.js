import femme from '../../Images/femee.webp'
import './messages.css'
export default function Messages(){
    return <div>
                <div className="container_messages">
                    <div className="container_image_profil" style={{backgroundImage: "url("+femme+")"}}>

                    </div>
                    <div className="container_messages_">
                            <p className="text_messages">
                                Tena tsara mintsy izy ito satria izay an sa aona hoy enao 
                            </p>
                            <p className="time_ago">2022-02 03 12:00</p>
                    </div>
                </div>
                <div className="container_messages unread_messages">
                    <div className="container_image_profil" style={{backgroundImage: "url("+femme+")"}}>

                    </div>
                    <div className="container_messages_ ">
                            <p className="text_messages">
                                Tena tsara mintsy izy ito satria izay an sa aona hoy enao 
                            </p>
                            <p className="time_ago">2022-02 03 12:00</p>
                    </div>
                </div>
    </div>
}