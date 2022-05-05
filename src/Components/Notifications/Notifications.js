import femme from '../../Images/femee.webp'
import './notifications.css'
export default function Notifications(){
    return <div>
    <div className="container_messages">
        <div className="container_image_profil" style={{backgroundImage: "url("+femme+")"}}>

        </div>
        <div className="container_messages_">
                <p className="text_messages">
                    A aimé votre phot de profil 
                </p>
                <p className="time_ago">2022-02 03 12:00</p>
        </div>
    </div>
    <div className="container_messages unread_messages">
        <div className="container_image_profil" style={{backgroundImage: "url("+femme+")"}}>

        </div>
        <div className="container_messages_ ">
                <p className="text_messages">
                     A aimé votre phot de profil  
                </p>
                <p className="time_ago">2022-02 03 12:00</p>
        </div>
    </div>
</div>
}