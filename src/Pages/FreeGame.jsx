import { Link, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { FreeGameCard } from './freegameCard'

import axios from 'axios'

import './FreeGame.css'

import hogwarts from '../images/981489.jpg'
import mystery from '../images/1397426.jpg'


export const FreeGame = () => {
    const texts = [
        {image: hogwarts, backgroundColor: 'goldenrod', free: 'free now', color: '#000', h3: 'Mortal Kombat 11', p: 'Free Now - Dec 18 at 05:00 PM', link: '/Hello'},
        {image: mystery, backgroundColor: '#000', free: 'mystery game', color: '#fff', h3: 'Red Dead Redemption', p: 'Available 2026', link: '/Hello'}
    ]

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

    return(
        <>
            <div className="freegame">
                <div className="freegame_1">
                    <div className="free_game">
                        <div className="freegame_icon">
                            <div className="gift_icon">
                                <div className="gift_icon_1">
                                    <div className="icon_gift"><i class="fa-solid fa-gift"></i></div>

                                    <div className="icon_text">
                                        <h3>Free Games</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="free_button">
                                {isAuthenticated ? (
                                    <>
                                        <button><Link to='/Hello'>View More</Link></button>
                                    </>
                                ) : (
                                    <>
                                        <button><Link to='/login'>View More</Link></button>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="free_game_card_">
                            {isAuthenticated ? (
                                <>
                                    <FreeGameCard image={texts[0].image} backgroundColor={texts[0].backgroundColor} free={texts[0].free} color={texts[0].color} h3={texts[0].h3} p={texts[0].p} link={texts[0].link}/>
                                    <FreeGameCard image={texts[1].image} backgroundColor={texts[1].backgroundColor} free={texts[1].free} color={texts[1].color} h3={texts[1].h3} p={texts[1].p} link={texts[1].link}/>
                                </>
                            ) : (
                                <>
                                    <FreeGameCard image={texts[0].image} backgroundColor={texts[0].backgroundColor} free={texts[0].free} color={texts[0].color} h3={texts[0].h3} p={texts[0].p} link='/login'/>
                                    <FreeGameCard image={texts[1].image} backgroundColor={texts[1].backgroundColor} free={texts[1].free} color={texts[1].color} h3={texts[1].h3} p={texts[1].p} link='/login'/>
                                </>
                            )}
                        </div>
                    </div>


                   
                </div>
            </div>
        </>
    )
}