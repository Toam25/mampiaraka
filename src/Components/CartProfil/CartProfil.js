import "./cartprofil.css"
import heart from '../../Images/heart.svg'
import  femme from '../../Images/femee.webp'
function CartProfil () {
    return (
        <div className="cart_profil">
            <div className="image_cart_profil">
                    <img src={femme} />
                    <div className="heart_for_you">
                         <img src={heart} />
                    </div>
            </div>
            
             <div className="detail_for_me_cart_profil">
                
                 
                 <span className="valable_person actif"></span>
                <h1 className="h1_cart_profil">Harih1991, 19 ans</h1>
                <p className="few_detail_for_me">Contact me on my whatsapp number +261349089331 ♥ Serious man only/ i'm looking for real love</p>
             </div>
        </div>
    )
}
export default CartProfil