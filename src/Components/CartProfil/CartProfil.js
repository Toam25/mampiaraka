import "./cartprofil.css"
import heart from '../../Images/heart.svg'
import { BASE_URL } from "../Api"
function CartProfil ({profil}) {
    console.log(profil)
    return (
        <div className="cart_profil">
            <div className="image_cart_profil" style={{backgroundImage: "url("+BASE_URL+"/"+profil.avatar+")"}} >
                    {/* <img src={femme} /> */}
                    <div className="heart_for_you">
                         <img src={heart} />
                    </div>
            </div>
            
             <div className="detail_for_me_cart_profil">
                
                 
                 <span className="valable_person actif"></span>
                <h1 className="h1_cart_profil">{profil.name}, {profil.age} ans</h1>
                <p className="">Hello!I amYijia, you can call me Nancy! How do you feel about me when you first look at me</p>
             </div>
        </div>
    )
}
export default CartProfil