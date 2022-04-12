import "./cartprofil.css"
import heart from '../../Images/heart.svg'
import femme from '../../Images/femee.webp'
import { BASE_URL } from "../Api"
function CartProfil ({profil}) {
    return (
        <div className="cart_profil">
            <div className="image_cart_profil" style={{backgroundImage: "url("+femme+")"}} >
                    {/* <img src={femme} /> */}
                    <div className="heart_for_you">
                         <img src={heart} />
                    </div>
            </div>
            
             <div className="detail_for_me_cart_profil">
                
                 
                 <span className="valable_person actif"></span>
                <h1 className="h1_cart_profil">{profil.name}, {profil.age} ans</h1>
                <p className="">{profil.citation}</p>
             </div>
        </div>
    )
}
export default CartProfil