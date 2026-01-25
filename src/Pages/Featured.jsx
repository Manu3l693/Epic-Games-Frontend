import { WeeklyCard1 } from './weeklyCard1'

import './Featured.css'

import axios from 'axios'

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import weekFort from '../images/egs-editorial-beary-arms-breaker-1920x1080-1b92341f3946.jpg'
import hogwarts from '../images/egs-editorial-2026-preview-breaker-v2-1920x1080-b2d2ca29b9f4.jpg'
import prowler from '../images/egs-01-22-26-editorial-evergreen-breaker-1920x1080-97831f164635.jpg'

export const Featured = () => {

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

    const weeklyCards = [
        {id: 1, image: weekFort, header: 'Run and pun',                     text: "Rightfully, Beary Arms blends twin-stick action with deep roguelike systems. And bears.", button: 'Read More', link: '/Hello'},
        {id: 2, image: hogwarts, header: 'The big 2026 preview!',           text: "From Star Wars and Resident Evil to a plethora of indie darlings the exciting games coming to Epic Games Store.", button: 'Read More', link: '/Hello'},
        {id: 3, image: prowler, header: 'A wealth of stories',              text: 'Plug into our drip feed of exclusive, features, interviews, and guides.', button: "Read More", link: '/Hello'},
    ]

    return(
        <>
            <div className="Featured">
                <div className="Featured_stories">
                    <div className="featured_header">
                        <h2>Featured Stories</h2>
                    </div>

                    <div className="feature_cards">
                        {isAuthenticated ? (
                            <>
                                <WeeklyCard1 id={weeklyCards[0].id} image={weeklyCards[0].image} header={weeklyCards[0].header} text={weeklyCards[0].text} button={weeklyCards[0].button} link={weeklyCards[0].link}/>
                                <WeeklyCard1 id={weeklyCards[1].id} image={weeklyCards[1].image} header={weeklyCards[1].header} text={weeklyCards[1].text} button={weeklyCards[1].button} link={weeklyCards[1].link}/>
                                <WeeklyCard1 id={weeklyCards[2].id} image={weeklyCards[2].image} header={weeklyCards[2].header} text={weeklyCards[2].text} button={weeklyCards[2].button} link={weeklyCards[2].link}/>
                            </>
                        ) : (
                            <>
                                <WeeklyCard1 id={weeklyCards[0].id} image={weeklyCards[0].image} header={weeklyCards[0].header} text={weeklyCards[0].text} button={weeklyCards[0].button} link='/login'/>
                                <WeeklyCard1 id={weeklyCards[1].id} image={weeklyCards[1].image} header={weeklyCards[1].header} text={weeklyCards[1].text} button={weeklyCards[1].button} link='/login'/>
                                <WeeklyCard1 id={weeklyCards[2].id} image={weeklyCards[2].image} header={weeklyCards[2].header} text={weeklyCards[2].text} button={weeklyCards[2].button} link='/login'/>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}