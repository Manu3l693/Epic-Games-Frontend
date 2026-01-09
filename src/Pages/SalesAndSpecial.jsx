import { WeeklyCard1 } from './weeklyCard1'

import axios from 'axios'

import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import './Featured.css'

import weekFort from '../images/Sales.jpg'
import hogwarts from '../images/epic-games-free.jpg'
import prowler from '../images/Apps.jpg'


export const SalesAndSpecial = () => {

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
            {id: 1, image: weekFort, header: 'Sales & Specials', text: "Save big on hit titles and hidden gems. There's always something on sale at the Epic Games Store!", button: 'Browse', link: '/Hello'},
            {id: 2, image: hogwarts, header: 'Free Games',       text: "Explore free and free-to-play games from our collection. Come back every Thursday for a new free game! ", button: 'Play Now', link: '/Hello'},
            {id: 3, image: prowler, header: 'Apps',              text: 'Enjoy some of the best Apps for music, gaming, creating, and more!', button: "Browse", link: '/Hello'},
        ]

    return(
        <>
            <div className="Featured">
                            <div className="Featured_stories">
                                <div className="featured_header">
                                    <h2></h2>
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