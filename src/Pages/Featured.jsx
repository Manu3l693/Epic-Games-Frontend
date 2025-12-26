import { WeeklyCard1 } from './weeklyCard1'

import './Featured.css'

import weekFort from '../images/SILENTT.jpg'
import hogwarts from '../images/WhereWindHero.jpg'
import prowler from '../images/EGS_SonicRacingCrossWorlds_SonicTeam_S1_2560x1440-6fa12a0e93ef5d4cb81a806a6fd2fbc0.jpg'

export const Featured = () => {

    const weeklyCards = [
        {id: 1, image: weekFort, header: 'SILENT HILL f',            text: "Find the beauty in terror in this new Japanese psychological horror.", button: 'Read More', link: '/login'},
        {id: 2, image: hogwarts, header: 'Where Winds Meet',         text: "Write your own wuxia legend in the winds of a fractured dynasty as you explore an epic open world RPG.", button: 'Play For Free', link: '/login'},
        {id: 3, image: prowler, header: 'Sonic Racing: crossWorlds', text: 'Take your race across dimensions and invite your friends with online crossplay! Sonic Racing: CrossWorlds is out now!', button: "Read More", link: '/login'},
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