import "./cartprofil.css"
import heart from '../../Images/heart.svg'
import femme from '../../Images/femee.webp'
import { BASE_URL } from "../Api"
function CartProfil ({profil, viewMessaging}) {
    return (
        <div className="cart_profil">
            <div className="image_cart_profil" style={{backgroundImage: "url("+femme+")"}} >
                 <span className="valable_person actif"></span>
            </div>
             <div className="detail_for_me_cart_profil">
                <p className="h1_cart_profil">{profil.age} ans</p>
                <p className="name_cart_profil">{profil.name}</p>
                <div className="cc_action_button">
                    <div className="action_button">
                         <div className="message" onClick={()=>viewMessaging(profil)}>
                                M
                         </div>
                         <div className="likes">
                             L
                         </div>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default CartProfil