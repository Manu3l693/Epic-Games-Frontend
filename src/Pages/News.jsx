import { NavigationOne } from './Nav1'
import { NavigationBarTwo } from './Nav2'
import { EpicGameCard } from './EpicGameCard'

import { Footer } from './Footer'

import { OtherNewsCards } from './otherNewsCards'

import './News.css'

import toxicCommando from '../images/johnCarpenter.jpg'
import bearyArms from '../images/BearyArms.png'

import FallGuysCrown from '../images/crownJam.jpg'
import Carmageddon from '../images/Carmageddon.jpg'
import ForestQuartet from '../images/forestQuartet.jpg'
import ArknightsEndfield from '../images/ArknightEndfield.jpg'
import InBrokenLore from '../images/InBrokenLore.jpg'
import Mecharashi from '../images/Mecharashi.png'
import EpicGamesApp from '../images/EpicGameApp.jpg'
import Seeing from '../images/seeingMeaning.jpg'
import NineThings from '../images/nineThings.png'
import CenterPoint from '../images/centerPoints.jpg'


export const NewsPage = () => {

    const card1 = [
        {image: toxicCommando,  genre: '5D AGO',            header: "Toxic Commando:Fusing blood, mud, and John Carpenter", content: "How John Carpenter's Toxic Commando went from streamer's odd aside to full-blown Carpenter horror adventure", link: 'Read more'},
        {image: bearyArms,      genre: '12D AGO',           header: "How Rightfully, Beary Arms reinvents the twin-stick roguelike", content: "Built over years of iteration, Rightfully, Beary Arms rethinks twin-stick roguelikes with weapon augments, player-chosen difficulty, and systems designed for long-term mastery.", link: 'Read more'}
    ]

    const otherCard = [
        {id: 1,     image: FallGuysCrown,       genre: '15H AG0',    header: 'Fall Guys Crown Jam slams into Fortnite',                                              content: 'The Beans bounce into Fortnite for Fall Guys Crown Jam, a chaotic new 3v3 competitive sport from the world of Fall Guys.',                                                link: 'Read more'},
        {id: 2,     image: Carmageddon,         genre: '2D AGO',     header: "How Carmageddon: Rogue Shift aims to reinvent gaming's most notorious racing series",  content: "The first Carmageddon in a decade has a brand new developer and a brand new roguelite structure that will let you 'break the game.'",                                     link: 'Read more'},
        {id: 3,     image: ForestQuartet,       genre: '2D AGO',     header: "The Forest Quartet is free this week on the Epic Games Store for mobile",              content: "Get the band together in The Forest Quartet, a game about heartbreak, music, and butterfly transformation powers - free this week on the Epic Games Store for mobile",    link: 'Read more'},
        {id: 4,     image: ArknightsEndfield,   genre: '2D AGO',     header: "Arknights: Endfield guide: All characters ranked to help you squad up",                content: "Build your Talos-II dream team using the best units in the game, with the help of our Arknights: Endfield guide and tier list.",                                          link: 'Read more'},
        {id: 5,     image: InBrokenLore,        genre: '3D AGO',     header: "In BrokenLore: UNFOLLOW, social media's threats go deeper than brainrot",              content: "It's always those closest to you who can hurt you the most-and what's closer than the smartphone in your pocket?",                                                        link: 'Read more'},
        {id: 6,     image: Mecharashi,          genre: '3D AGO',     header: "Mecharashi is living out every mecha fan's dream-a crossover ebent with Evangelion",   content: '',                                                                                                                                                                        link: 'Read more'},
        {id: 7,     image: EpicGamesApp,        genre: '4D AGO',     header: "Epic Games App Now Available Globally on Android",                                     content: '',                                                                                                                                                                        link: 'Read more'},
        {id: 8,     image: Seeing,              genre: '4D AGO',     header: "Seeing meaning through perspective in Possessions",                                    content: "By rotating spaces instead of moving objects, Possessions delivers a quiet puzzle experience that turns perspective into storytelling without a single line of dialogue", link: 'Read more'},
        {id: 9,     image: NineThings,          genre: '4D AGO',     header: "Nine things to know to get started in MIO: Memories in Orbit",                         content: "Stuck in the spacey, mysterious Metroidvania? Try these strategies",                                                                                                      link: 'Read more'},
        {id: 10,    image: CenterPoint,         genre: '3D AGO',     header: "How CenterPoint Gaming made crosshairs portable across PC games",                      content: "The story of a glitch and personalized crosshairs everywhere",                                                                                                            link: 'Read more'},
    ]

    return(
        <>
            <NavigationOne />
            <NavigationBarTwo color1="gray" color2="gray" color3="#fff"/> 

            <div className="epicGameNews">
                <div className="epicGameNews_1">
                    <div className="epicNewsHeader">
                        <h2>Epic Games News</h2>
                    </div>

                    <div className="epicNewsCard">
                        <div className="epicNewsCard_">
                            <EpicGameCard image={card1[0].image} genre={card1[0].genre} header={card1[0].header} content={card1[0].content} link={card1[0].link}/>
                        </div>

                        <div className="epicNewsCard_">
                           <EpicGameCard image={card1[1].image} genre={card1[1].genre} header={card1[1].header} content={card1[1].content} link={card1[1].link}/> 
                        </div>
                    </div>
                </div>
            </div> 

            <div className="otherCards">
                <div className="otherCard_1">
                    {otherCard.map((product) => 
                        <OtherNewsCards 
                            key={product.id}
                            image={product.image}
                            genre={product.genre}
                            header={product.header}
                            content={product.content}
                            link={product.link}
                        />
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
}