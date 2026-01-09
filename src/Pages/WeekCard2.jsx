import { WeeklyCard1 } from './weeklyCard1'

import axios from 'axios'

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import './WeekCard.css'

import weekFort from '../images/863549.jpg'
import hogwarts from '../images/1358386.jpeg'
import prowler from '../images/en-holiday-sale-gifting-breaker-asset-1920x1080-8ca14e3255f3.webp'


export const WeekCard2 = () => {
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
                    {id: 1, image: weekFort, header: 'Rocket League', text: "Rep your Hogwarts House in Rocket League Frosty Fest 2025", button: 'Read More', link: '/Hello'},
                    {id: 2, image: hogwarts, header: 'Marvel Rivals', text: "Season 5.5 is live now! Rogue has officially joined Marvel Rivals!", button: 'Play For Free', link: '/Hello'},
                    {id: 3, image: prowler,  header: 'Gifting on the Epic Games Store', text: 'Send games and add-ons to your friends, earn Epic Rewards with every purchase, or use your balance toward the next gift you give. Restrictions apply.', button: "Learn More", link: '/Hello'},
                ]

    return(
        <>
             <div className="weekly_card">
                <div className="weekly_card_">
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
        </>
    )
}