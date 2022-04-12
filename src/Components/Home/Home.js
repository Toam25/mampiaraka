import './Home.css'
import CartProfil from '../CartProfil'
import  Search from '../Search'
import  Messaging from '../Messaging'
import data, {messages} from '../Api'
function Home() {
    console.log(data)
    const all_profil = data.map( (datas,index)=>{
        console.log(datas)
        return <CartProfil profil={datas} key={index}/>
    }  
    )
    return (
        <>
        <Search />
        <div className='container-fluid'>
            <div className='d-flex justify-content-center flex-wrap'>
                {all_profil }
            </div>
             <Messaging messages={messages}/>
        </div>
        
        </>
    )
}
export default Home