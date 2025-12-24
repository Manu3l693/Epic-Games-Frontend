import { WeeklyCard1 } from './weeklyCard1'

import './Featured.css'

import weekFort from '../images/903573.jpg'
import hogwarts from '../images/Hogwarts_Legacy_Is_Free_on_Epic_Games_Store_caa9eda4d7.webp'
import prowler from '../images/937844.png'

export const Featured = () => {

    const weeklyCards = [
        {id: 1, image: weekFort, header: 'This Week in Fortnite', text: "Check out the latest updates in fortnite from classic Battle Royale to Blitz and Delulu. There's always something new in Fortnite!", button: 'Read More', link: '/login'},
        {id: 2, image: hogwarts, header: 'Hogwarts Legacy is Free', text: "Play two hours of Hogwarts Legacy by December 18 to unlock the Chocolate Frog Back Bling in Fortnite!", button: 'Read More', link: '/login'},
        {id: 3, image: prowler, header: 'Fortnite', text: 'Just try and keep up! Prowler comes to Fortnite with customizable Outfits and more.', button: "Read More", link: '/login'},
    ]

    return(
        <>
            <div className="Featured">
                <div className="Featured_stories">
                    <div className="featured_header">
                        <h2>Featured Stories</h2>
                    </div>

                    <div className="feature_cards">
                        <WeeklyCard1 id={weeklyCards[0].id} image={weeklyCards[0].image} header={weeklyCards[0].header} text={weeklyCards[0].text} button={weeklyCards[0].button} link={weeklyCards[0].link}/>
                        <WeeklyCard1 id={weeklyCards[1].id} image={weeklyCards[1].image} header={weeklyCards[1].header} text={weeklyCards[1].text} button={weeklyCards[1].button} link={weeklyCards[1].link}/>
                        <WeeklyCard1 id={weeklyCards[2].id} image={weeklyCards[2].image} header={weeklyCards[2].header} text={weeklyCards[2].text} button={weeklyCards[2].button} link={weeklyCards[2].link}/>
                    </div>
                </div>
            </div>
        </>
    )
}