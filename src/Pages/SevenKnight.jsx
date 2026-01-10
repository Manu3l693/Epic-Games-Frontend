import { KnightCard } from './KnightCard'

import './SevenKnight.css'

import axios from 'axios'

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import sevenKnight from '../images/1314377.jpg'
import raven2 from '../images/1300483.jpg'

export const SevenKnight = () => {

                const [isAuthenticated, setIsAuthenticated] = useState(false)
                const navigate = useNavigate()
        
                useEffect(()=>{
                    checkAuth()
                },[])
        
                const checkAuth = async () => {
                    try {
                        const response = await axios.get('http://localhost:5000/api/auth/verify', {withCredentials: true})
                        if(response.data.success && response.data.user.isVerified){
                            setIsAuthenticated(true)
                        } else{
                            setIsAuthenticated(false)
                            navigate('/login')
                        }
                    } catch (error) {
                        console.error(error)
                    }
                }

    const products = [
        {id: 1, image: sevenKnight, header: "Arknights: Endfield",                    text: "Over the Frontier, into the Front - Arknights: Endfield is officially set for its worldwide release on January 22nd, 2027", firstButton: 'First Run', secondButton: 'Wishlist Now', link: 'Hello'},
        {id: 2, image: raven2,      header: 'Lords of the Fallen II',                 text: 'Behold the official gameplay trailer for Lords of the Fallen II, the bolder, braver and bloodier sequel!',          firstButton: 'First Run', secondButton: 'Wishlist Now', link: 'Hello'},
    ]
    return(
        <>
           <div className="sevenKnight">
            <div className="sevenKnight_1">
                {isAuthenticated ? (
                    <>
                        <KnightCard key={products[0].id} image={products[0].image} header={products[0].header} text={products[0].text} firstButton={products[0].firstButton} secondButton={products[0].secondButton} link={products[0].link}/>
                        <KnightCard key={products[1].id} image={products[1].image} header={products[1].header} text={products[1].text} firstButton={products[1].firstButton} secondButton={products[1].secondButton} link={products[1].link}/>
                    </>
                ) : (
                    <>
                        <KnightCard key={products[0].id} image={products[0].image} header={products[0].header} text={products[0].text} firstButton={products[0].firstButton} secondButton={products[0].secondButton} link='/login'/>
                        <KnightCard key={products[1].id} image={products[1].image} header={products[1].header} text={products[1].text} firstButton={products[1].firstButton} secondButton={products[1].secondButton} link='/login'/>
                    </>
                )}
            </div>
           </div>
        </>
    )
}