import { WeeklyCard1 } from './weeklyCard1'

import './WeekCard.css'

import weekFort from '../images/863549.jpg'
import hogwarts from '../images/1358386.jpeg'
import prowler from '../images/en-holiday-sale-gifting-breaker-asset-1920x1080-8ca14e3255f3.webp'


export const WeekCard2 = () => {
       const weeklyCards = [
            {id: 1, image: weekFort, header: 'Rocket League', text: "Rep your Hogwarts House in Rocket League Frosty Fest 2025", button: 'Read More', link: '/login'},
            {id: 2, image: hogwarts, header: 'Marvel Rivals', text: "Season 5.5 is live now! Rogue has officially joined Marvel Rivals!", button: 'Play For Free', link: '/login'},
            {id: 3, image: prowler,  header: 'Gifting on the Epic Games Store', text: 'Send games and add-ons to your friends, earn Epic Rewards with every purchase, or use your balance toward the next gift you give. Restrictions apply.', button: "Learn More", link: '/login'},
        ]

    return(
        <>
             <div className="weekly_card">
                <div className="weekly_card_">
                    <WeeklyCard1 id={weeklyCards[0].id} image={weeklyCards[0].image} header={weeklyCards[0].header} text={weeklyCards[0].text} button={weeklyCards[0].button} link={weeklyCards[0].link}/>
                    <WeeklyCard1 id={weeklyCards[1].id} image={weeklyCards[1].image} header={weeklyCards[1].header} text={weeklyCards[1].text} button={weeklyCards[1].button} link={weeklyCards[1].link}/>
                    <WeeklyCard1 id={weeklyCards[2].id} image={weeklyCards[2].image} header={weeklyCards[2].header} text={weeklyCards[2].text} button={weeklyCards[2].button} link={weeklyCards[2].link}/>
                </div>
            </div>
        </>
    )
}