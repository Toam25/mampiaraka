import './Home.css'
import CartProfil from '../CartProfil'
import  Search from '../Search'
import data from '../Api'
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
        </div>
        
        </>
    )
}
export default Home