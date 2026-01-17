import { useRef, useState, useEffect } from 'react';

import { NavigationOne } from "./Nav1"
import { NavigationBarTwo } from "./Nav2"

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Browse.css'

import { PopularCard } from './popularCards';

import { Lowest } from './Lowest';
import { Footer } from './Footer';

import wildgate from '../images/wildgate.jpg'
import brawl from '../images/brawlArena.jpg'
import crown from '../images/crownofempire.jpg'

import wanted from '../images/wanted.jpg'
import balor from '../images/balor.jpg'
import trine from '../images/trine.jpg'

import elven from '../images/bountyStar.jpg'
import emergency from '../images/emergencyCrew5.jpg'

import tiny from '../images/tiny land 2.jpg'

import godzilla from '../images/godzilla x kingkong.jpg'
import worshipper from '../images/worshipper.jpg'
import superFantasy from '../images/superFantasy.jpg'

import bloodStained from '../images/bloodStainned.jpg'

import questionnaire from '../images/sirQuestion.jpg'
import heroesOfLoot from '../images/heros of loot.jpg'
import chronosWorld from '../images/chronosWorlds.jpg'

import casted from '../images/castillo.jpg'
import thePromise from '../images/thePromiseTree.jpg'

import cultivation from '../images/cultivation.jpg'
import endless from '../images/endless 2.jpg'

import serke from '../images/serke.jpg'
import yakuza from '../images/yakuza.jpg'

import goToSleep from '../images/goToSleep.jpg'
import propHunter from '../images/prophunt.jpg'
import fiveNight from '../images/fiveNightInSaranks.jpg'

import badCheese from '../images/badCheese.jpg'

import superWash from '../images/superwash.jpg'

import rise from '../images/Rise2.jpg'

import bloodlines from '../images/bloodlnesOfTheEternal.jpg'
import dremca from '../images/dremica.jpg'

import endlessDungeon from '../images/endlessDungeon.jpg'
import jurassic from '../images/38847c52741da2c4590ab936fe3cb3dd.jpg'
import battlefields from '../images/battle_field_grid.png'

import lightBreak from '../images/lightBreak.jpg'
import totallyNormal from '../images/totallyNormal.jpg'
import infected from '../images/infected mushroom.jpg'

import bult from '../images/bult.jpg'

import biped from '../images/bipe.jpg'
import hotseat from '../images/hotseat.jpg'
import backfire from '../images/backfireBrigade.jpg'

import trine2 from '../images/trine2.jpg'

import brainRot from '../images/brainRot.jpg'
import motorRacing from '../images/60430e7c14ee874f2e8710964a82541e.jpg'

import hyper from '../images/hyperEchelon.jpg'

import stormLancer from '../images/stormLancers.jpg'
import OTXO from '../images/otxo.jpg'

import chipn from "../images/chip'n.jpg"
import anno from '../images/e5a194d74d901279d454c1045fadb7e6.jpg'
import wildforest from '../images/wildForest.jpg'

import superB from '../images/superB.jpg'

import military from '../images/militaryLogistics.jpg'

import eleven from '../images/eleven.jpg'

import safetyFirst from '../images/safetyFirst.jpg'
import c64 from '../images/c64.jpg'
import proBasketball from '../images/proBasketball.jpg'

import hoomanz from '../images/hoomanz.jpg'
import breakFall from '../images/breakfall.jpg'
import astrumis from '../images/astrumis.jpg'

import sunBlocker from '../images/SunBlockers.jpg'
import outBreak from '../images/outbreakzero.jpg'

import operation from '../images/operation.jpg'
import outsiderTD from '../images/outsider.jpg'
import Beacon from '../images/beacon.jpg'

import wholeArmor from '../images/wholeAmor.jpg'
import lostBeacon from '../images/lostBeacon.jpg'
import wrestling from '../images/wrestling trivia.png'

import spacegrunts2 from '../images/space grunts.jpg'
import warlord from '../images/runeQuest.jpg'
import spacegrunts1 from '../images/space grunts1.jpg'

import stereoscopy from '../images/stereoscopy.jpg'
import helicopter from '../images/helicopter simulator.jpg'

import { Card1 } from './card1';
import { Card2 } from './card2';
import { Card6 } from './Card6';
import { Card8 } from './Card8';
import { Card10 } from './Card10';

import outFlow from '../images/ouflow.jpg'
import mythFinders from '../images/mythFinders.jpg'
import brokenLore from '../images/brokenLore.jpg'

import edgeOfDestruction from '../images/edgeOfDestruction.jpg'
import lokko from '../images/lokko.jpg'
import gemFighter from '../images/gemFighter.jpg'

import styx1 from '../images/styxMOS.jpg'
import styx2 from '../images/styxSOD.jpg'
import ladies from '../images/ladies.jpg'

import elven6 from '../images/elven6.jpg'
import mokens from '../images/mokens.jpg'
import voenkom from '../images/voenkom.jpg'

import barrington from '../images/barringtons.jpg'
import alek from '../images/alek.jpg'
import mekkaBlood from '../images/mekkablood.jpg'

import vaporumLockdown from '../images/vaaporum.jpg'
import vaporum from '../images/vaporum2.jpg'
import wand from '../images/wand.jpg'

import ghostHunter from '../images/ghostHunters.jpg'
import newLand4 from '../images/newLand4.jpg'
import elven5 from '../images/elven.jpg'

import lynn from '../images/lynn.jpg'
import zombie from '../images/zombieClown.jpg'
import fiveHearts from '../images/fiveHearts.jpg'

import extinctForest from '../images/extinctForest.jpg'
import palgraps from '../images/palgrap.jpg'
import gnomes from '../images/gnomes.jpg'

import extractGame from '../images/extractImage.jpg'
import theTeacher from '../images/theTeacherFell.jpg'
import jackTheRipper from '../images/jackTheRipper.jpg'





export const Browse = () => {

        const prevRef = useRef(null);
        const nextRef = useRef(null);
    
        const [arrowColorL, setArrowColorL] = useState('rgb(187, 187, 187)')
        const [arrowColorR, setArrowColorR] = useState('rgb(187, 187, 187)')
    
        const HandleArrowColorL = () => {
            setArrowColorL('#fff')
            setArrowColorR('#fff')
        }
    
        const HandleArrowColorR = () => {
            setArrowColorR('#fff')
        }

        const product1 = [
            {id: 1, image1: wildgate, image2: brawl, image3: crown,     header: 'Action Games',             link:'/Hello'},
            {id: 2, image1: wanted,   image2: balor, image3: trine,     header: 'Action-Adventure Games',   link:'/Hello'},
            {id: 3, image1: wanted,   image2: elven, image3: emergency, header: 'Adventure Games',          link:'/Hello'},
            {id: 4, image1: elven,    image2: tiny,  image3: crown,     header: 'Casual Games',             link:'/Hello'}
        ]

        const product2 = [
            {id: 1, image1: godzilla,       image2: worshipper, image3: superFantasy,   header: 'City Builder Games',       link:'/Hello'},
            {id: 2, image1: wildgate,       image2: tiny,       image3: trine,          header: 'Co-Op Games',              link:'/Hello'},
            {id: 3, image1: wanted,         image2: wildgate,   image3: bloodStained,   header: 'Cross Platform Games',     link:'/Hello'},
            {id: 4, image1: questionnaire,  image2: heroesOfLoot, image3: chronosWorld, header: 'Dungeon Crawler Games',    link:'/Hello'}
        ]

        const product3 = [
            {id: 1, image1: casted,         image2: thePromise,         image3: wanted,     header: 'Exploration Games',    link:'/Hello'},
            {id: 2, image1: bloodStained,   image2: cultivation,        image3: endless,    header: 'Fantasy Games',        link:'/Hello'},
            {id: 3, image1: wanted,         image2: yakuza,             image3: serke,      header: 'Fighting Games',       link:'/Hello'},
            {id: 4, image1: goToSleep,      image2: propHunter,         image3: fiveNight,  header: 'Horror Games',         link:'/Hello'}
        ]

        const product4 = [
            {id: 1, image1: badCheese,      image2: superWash,  image3: cultivation,    header: 'Indie Games',          link:'/Hello'},
            {id: 2, image1: wanted,         image2: goToSleep,  image3: rise,           header: 'Mac Games',            link:'/Hello'},
            {id: 3, image1: bloodlines,     image2: dremca,     image3: badCheese,      header: 'MMO Games',            link:'/Hello'},
            {id: 4, image1: endlessDungeon, image2: jurassic,   image3: battlefields,   header: 'Multiplayer Games',    link:'/Hello'}
        ]

        const product5 = [
            {id: 1, image1: lightBreak, image2: totallyNormal,  image3: infected,   header: 'Music Games',          link:'/Hello'},
            {id: 2, image1: wanted,     image2: superWash,      image3: bult,       header: 'Open World Games',     link:'/Hello'},
            {id: 3, image1: backfire,   image2: biped,          image3: hotseat,    header: 'Party Games',          link:'/Hello'},
            {id: 4, image1: trine,      image2: balor,          image3: trine2,     header: 'Platformer Games',     link:'/Hello'}
        ]

        const product6 = [
            {id: 1, image1: trine,          image2: tiny,           image3: trine2, header: 'Puzzle Games',         link:'/Hello'},
            {id: 2, image1: brainRot,       image2: motorRacing,    image3: wanted, header: 'Racing Games',         link:'/Hello'},
            {id: 3, image1: rise,           image2: casted,         image3: hyper,  header: 'Retro Games',          link:'/Hello'},
            {id: 4, image1: stormLancer,    image2: questionnaire,  image3: OTXO,   header: 'Rogue-Lite Games',     link:'/Hello'}
        ]

        const product7 = [
            {id: 1, image1: dremca, image2: worshipper,     image3: cultivation,    header: 'RPG Games',        link:'/Hello'},
            {id: 2, image1: chipn,  image2: anno,           image3: wildforest,     header: 'RTS Games',        link:'/Hello'},
            {id: 3, image1: superB, image2: casted,         image3: brawl,          header: 'Shooter Games',    link:'/Hello'},
            {id: 4, image1: bult,   image2: superWash,      image3: military,       header: 'Simulation Games', link:'/Hello'}
        ]

        const product8 = [
            {id: 1, image1: thePromise,     image2: superWash,      image3: goToSleep,  header: 'Single Player Games',  link:'/Hello'},
            {id: 2, image1: hyper,          image2: wildgate,       image3: eleven,     header: 'Space Games',          link:'/Hello'},
            {id: 3, image1: proBasketball,  image2: safetyFirst,    image3: c64,        header: 'Sports Games',         link:'/Hello'},
            {id: 4, image1: breakFall,      image2: hoomanz,        image3: astrumis,   header: 'Stealth Games',        link:'/Hello'}
        ]

        const product9 = [
            {id: 1, image1: crown,      image2: emergency,  image3: elven,      header: 'Strategy Games',       link:'/Hello'},
            {id: 2, image1: fiveNight,  image2: sunBlocker, image3: outBreak,   header: 'Survival Games',       link:'/Hello'},
            {id: 3, image1: operation,  image2: outsiderTD, image3: Beacon,     header: 'Tower Defenses Games', link:'/Hello'},
            {id: 4, image1: wholeArmor, image2: lostBeacon, image3: wrestling,  header: 'Trivia Games',         link:'/Hello'}
        ]

        const product10 = [
            {id: 1, image1: spacegrunts2,   image2: warlord,        image3: spacegrunts1,   header: 'Turn Based Games',             link:'/Hello'},
            {id: 2, image1: warlord,        image2: propHunter,     image3: endless,        header: 'Turn Based Strategy Games',    link:'/Hello'},
            {id: 3, image1: helicopter,     image2: stereoscopy,    image3: infected,       header: 'VR Games',                     link:'/Hello'},
            {id: 4, image1: badCheese,      image2: superWash,      image3: motorRacing,    header: 'Windows Games',                link:'/Hello'}
        ]



        const browseProduct1 = [
            {id: 1, image: outFlow,             genre: 'Base Game', header: 'Outflow',                           button: 'Now On Epic', discount: '-100%', stroke: '$6.69', price: 'Free', link: ''},
            {id: 2, image: mythFinders,         genre: 'Base Game', header: "Myth Finders",                      button: 'Now On Epic', discount: '-100%', stroke: '$1.89', price: 'Free', link: ''},
            {id: 3, image: brokenLore,          genre: 'Base Game', header: 'BrokenLore: UNFOLLOW',              button: 'Now On Epic', discount: '-100%', stroke: '$9.79', price: 'Free', link: ''},
            {id: 4, image: edgeOfDestruction,   genre: 'Base Game', header: 'Edge of Destruction',               button: 'Now On Epic', price: '$2.19', link: ''},
        ]

        const browseProduct2 = [
            {id: 1, image: lokko,       genre: 'Base Game', header: 'Lokko',                                     button: 'Now On Epic',  price: '', link: ''},
            {id: 2, image: wanted,      genre: 'Base Game', header: 'W.A.N.T.E.D',                               button: 'Now On Epic',  discount: '', stroke: '', price: '', link: ''},
            {id: 3, image: styx1,       genre: 'Base Game', header: 'Styx: Master of Shadows',                   price: 'Free',              link: ''},
            {id: 4, image: styx2,       genre: 'Base Game', header: 'Styx: Shards of Darkness', button: 'Now On Epic',  price: 'Free', link: ''},
        ]

        const browseProduct3 = [
            {id: 1, image: ladies,  genre: 'Base Game', header: 'Ladies Dont Tempt My Immortality',                          button: 'Now On Epic',  price: '$6.69', link: ''},
            {id: 2, image: elven6,  genre: 'Base Game', header: "Elven Rivers 6: Guardians of Hope Collector's Edition",     button: 'Now On Epic',  discount: '-15%', stroke: '$4.99', price: '$4.24', link: ''},
            {id: 3, image: mokens,  genre: 'Base Game', header: 'Mokens League: Champs',                                     button: 'First Run',    discount: '-31%', stroke: '$0.49', price: '$0.34', link: ''},
            {id: 4, image: voenkom, genre: 'Base Game', header: "No I'm not a Voenkom",                                      button: 'Now On Epic',  price: 'Free', link: ''},
        ]

        const browseProduct4 = [
            {id: 1, image: barrington,      genre: 'Base Game', header: "The Night at Barrington's",     price: '$13.49',      link: ''},
            {id: 2, image: alek,            genre: 'Base Game', header: 'Alek - The Lost Kingdom',       discount: '-20%',   stroke: '$8.09', price: '$6.47', link: ''},
            {id: 3, image: mekkaBlood,      genre: 'Base Game', header: 'Mekkablood: Quarry Assault',    price: '$5.19',      link: ''},
            {id: 4, image: vaporumLockdown, genre: 'Base Game', header: 'Vaporum: Lockdown',             price: '$4.49',      link: ''},
        ]

        const browseProduct5 = [
            {id: 1, image: vaporum,     genre: 'Base Game', header: 'Vaporum',                           button: 'Now On Epic',  price: '$4.15', link: ''},
            {id: 2, image: wand,        genre: 'Base Game', header: 'Wand',                              price: 'Free',      link: ''},
            {id: 3, image: ghostHunter, genre: 'Base Game', header: "Ghost Hunters Collector's Edition", price: '$6.69',     link: ''},
            {id: 4, image: newLand4,    genre: 'Base Game', header: 'New Lands 4',    button: 'Now On Epic',  price: '$6.69', link: ''},
        ]

        const browseProduct6 = [
            {id: 1, image: elven5,      genre: 'Base Game', header: 'Elven Rivers 5: Under Sea',          button: 'Now On Epic', price: '$6.69',  link: ''},
            {id: 2, image: lynn,        genre: 'Base Game', header: 'Lynn',                               button: 'Now On Epic', price: 'Free',   link: ''},
            {id: 3, image: zombie,      genre: 'Base Game', header: 'Zombie Clown Trap',                  button: 'Now On Epic', price: '$11.19', link: ''},
            {id: 4, image: fiveHearts,  genre: 'Base Game', header: 'Five Hearts Under One Roof', discount: '-30%', stroke: '$2.09', price: '$1.46', link: ''},
        ]

        const browseProduct7 = [
            {id: 1, image: extinctForest,   genre: 'Base Game', header: 'Extinct Forest',        button: 'Now On Epic',  price: '$6.69', link: ''},
            {id: 2, image: palgraps,        genre: 'Base Game', header: 'PALGRAP',               price: '$7.99', link: ''},
            {id: 3, image: gnomes,          genre: 'Base Game', header: 'Gnomes Garden 10',      button: 'Now On Epic', price: '$6.69', link: ''},
            {id: 4, image: superWash,       genre: 'Base Game', header: 'Super Wash Simulator',  price: '$0.49', link: ''},
        ]

        const browseProduct8 = [
            {id: 1, image: badCheese,   genre: 'Base Game', header: 'Bad Cheese',                    button: 'Now On Epic',  price: 'Free',   link: ''},
            {id: 2, image: serke,       genre: 'Base Game', header: 'Serke',                  button: 'Now On Epic',  price: '$6.69',  link: ''},
            {id: 3, image: thePromise,  genre: 'Base Game', header: 'The Promise Tree of Alden',     button: 'Now On Epic',  price: 'Free',   link: ''},
            {id: 4, image: theTeacher,  genre: 'Base Game', header: 'The teacher fell in love...',   button: 'Now On Epic',  price: '$11.17', link: ''},
        ]

        const browseProduct9 = [
            {id: 1, image: elven,                   genre: 'Base Game', header: 'Elven Rivers 4',            price: '$6.69', link: ''},
            {id: 2, image: cultivation,             genre: 'Base Game', header: 'Cultivation Magic World',   button: 'Now On Epic', price: '$5.79', link: ''},
            {id: 3, image: goToSleep,               genre: 'Base Game', header: 'Go To Sleep',               price: '$3.09', link: ''},
            {id: 4, image: dremca,                  genre: 'Base Game', header: 'Dremica',           price: '$1.99', link: ''},
        ]

        const browseProduct10 = [
            {id: 1, image: balor, genre: 'Base Game', header: 'The Dark Heart Of Balor',   price: '$6.69', link: ''},
            {id: 2, image: brawl, genre: 'Base Game', header: 'Brawl Arena Shooter',       price: '$0.49', link: ''},
            {id: 3, image: tiny,  genre: 'Base Game', header: 'Tiny Lands 2',              price: '$3.19', link: ''},
            {id: 4, image: crown, genre: 'Base Game', header: 'Crown of the Empire 3',     price: '$6.69', link: ''},
        ]

        
    return(
        <>
            <NavigationOne />
            <NavigationBarTwo color1="gray" color2="#fff" color3="gray"/>

            
            <div className="popular_genre">
                <div className="popularGenre">
                    <div className="popularGenre_header">
                        <h2>Popular Genres</h2>
                    </div>

                    <div className="popularGenreSwiper">
                        <div className="popular_genre_button">
                            <div className="discover_sum_nav_1">
                                <button ref={prevRef} onClick={HandleArrowColorL}><i class="fa-solid fa-less-than" style={{color: arrowColorL}}></i></button>
                                <button ref={nextRef} onClick={HandleArrowColorR}><i class="fa-solid fa-greater-than" style={{color: arrowColorR}}></i></button>
                            </div>
                        </div>

                        <div className="popular_genre_swiper">
                            <div className="popular_genre_swiper__">
                                <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                watchSlidesProgress={true}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                
                                onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                }}
                                className='discov_somethin_neww'
                                >
                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product1.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product2.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product3.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product4.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product5.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product6.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product7.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product8.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product9.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <div className="swiper_items_1">
                                                {product10.map((product) =>
                                                    <PopularCard 
                                                        id={product.id}
                                                        image1={product.image1}
                                                        image2={product.image2}
                                                        image3={product.image3}
                                                        header={product.header}
                                                        link={product.link}
                                                    /> 
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    
                                </Swiper>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>

            <div className="show">
                <div className="show__">
                    <div className="show_release">
                        <div className="show_release_selector">
                            <div className="show_release_selector_1">
                                <p>Show: </p>

                                <select name="" id="">
                                    <option value="">New Release</option>
                                    <option value="">All</option>
                                    <option value="">New Release</option>
                                    <option value="">Coming Soon</option>
                                    <option value="">Alphabetical</option>
                                    <option value="">Price: Hight to Low</option>
                                    <option value="">Price: Low to High</option>
                                </select>
                            </div>
                        </div>

                        <div className="show_release_products">
                            <div className="show_release_product_items">
                                <Card6  widthSize='23%' id={browseProduct1[0].id} image={browseProduct1[0].image} genre={browseProduct1[0].genre} name={browseProduct1[0].header} available={browseProduct1[0].button} discount={browseProduct1[0].discount} stroke={browseProduct1[0].stroke} price={browseProduct1[0].price} link={browseProduct1[0].link}/>
                                <Card6  widthSize='23%' id={browseProduct1[1].id} image={browseProduct1[1].image} genre={browseProduct1[1].genre} name={browseProduct1[1].header} available={browseProduct1[1].button} discount={browseProduct1[1].discount} stroke={browseProduct1[1].stroke} price={browseProduct1[1].price} link={browseProduct1[1].link}/>                                
                                <Card1  widthSize='23%' id={browseProduct1[2].id} image={browseProduct1[2].image} genre={browseProduct1[2].genre} name={browseProduct1[2].header} price={browseProduct1[2].price}     link={browseProduct1[2].link}/>
                                <Card10 widthSize='23%' id={browseProduct1[3].id} image={browseProduct1[3].image} genre={browseProduct1[3].genre} name={browseProduct1[3].header} available={browseProduct1[3].button} price={browseProduct1[3].price} link={browseProduct1[3].link}/>
                            </div>

                            <div className="show_release_product_items">
                                <Card10  widthSize='23%'  id={browseProduct2[0].id} image={browseProduct2[0].image} genre={browseProduct2[0].genre} name={browseProduct2[0].header} available={browseProduct2[0].button} price={browseProduct2[0].price} link={browseProduct2[0].link}/>
                                <Card10  widthSize='23%'  id={browseProduct2[1].id} image={browseProduct2[1].image} genre={browseProduct2[1].genre} name={browseProduct2[1].header} available={browseProduct2[1].button} price={browseProduct2[1].price} link={browseProduct2[1].link}/>                                
                                <Card1   widthSize='23%'  id={browseProduct2[2].id} image={browseProduct2[2].image} genre={browseProduct2[2].genre} name={browseProduct2[2].header} price={browseProduct2[2].price}   link={browseProduct2[2].link}/>
                                <Card10  widthSize='23%'  id={browseProduct2[3].id} image={browseProduct2[3].image} genre={browseProduct2[3].genre} name={browseProduct2[3].header} available={browseProduct2[3].button} price={browseProduct2[3].price} link={browseProduct2[3].link}/>
                            </div>

                            <div className="show_release_product_items">
                                <Card1  widthSize='23%' id={browseProduct3[0].id} image={browseProduct3[0].image} genre={browseProduct3[0].genre} name={browseProduct3[0].header} price={browseProduct3[0].price} link={browseProduct3[0].link}/>
                                <Card1  widthSize='23%' id={browseProduct3[1].id} image={browseProduct3[1].image} genre={browseProduct3[1].genre} name={browseProduct3[1].header} price={browseProduct3[1].price} link={browseProduct3[1].link}/>                                
                                <Card8  widthSize='23%' id={browseProduct3[2].id} image={browseProduct3[2].image} genre={browseProduct3[2].genre} name={browseProduct3[2].header} button={browseProduct3[2].button} discount={browseProduct3[2].discount} stroke={browseProduct3[2].stroke} price={browseProduct3[2].price} link={browseProduct3[2].link}/>
                                <Card10 widthSize='23%' id={browseProduct3[3].id} image={browseProduct3[3].image} genre={browseProduct3[3].genre} name={browseProduct3[3].header} available={browseProduct3[3].button} price={browseProduct3[3].price} link={browseProduct3[3].link}/>
                            </div>

                            <div className="show_release_product_items">
                                <Card1  widthSize='23%' id={browseProduct4[0].id} image={browseProduct4[0].image} genre={browseProduct4[0].genre} name={browseProduct4[0].header} price={browseProduct4[0].price} link={browseProduct4[0].link}/>
                                <Card2  widthSize='23%' id={browseProduct4[1].id} image={browseProduct4[1].image} genre={browseProduct4[1].genre} name={browseProduct4[1].header} discount={browseProduct4[1].discount} stroke={browseProduct4[1].stroke} price={browseProduct4[1].price} link={browseProduct4[1].link}/>                                
                                <Card1  widthSize='23%' id={browseProduct4[2].id} image={browseProduct4[2].image} genre={browseProduct4[2].genre} name={browseProduct4[2].header} price={browseProduct4[2].price} link={browseProduct4[2].link}/>
                                <Card1  widthSize='23%' id={browseProduct4[3].id} image={browseProduct4[3].image} genre={browseProduct4[3].genre} name={browseProduct4[3].header} price={browseProduct4[3].price} link={browseProduct4[3].link}/>
                            </div>

                            <div className="show_release_product_items">
                                <Card10     widthSize='23%' id={browseProduct5[0].id} image={browseProduct5[0].image} genre={browseProduct5[0].genre} name={browseProduct5[0].header} available={browseProduct5[0].button}   price={browseProduct5[0].price} link={browseProduct5[0].link}/>
                                <Card1      widthSize='23%' id={browseProduct5[1].id} image={browseProduct5[1].image} genre={browseProduct5[1].genre} name={browseProduct5[1].header} price={browseProduct5[1].price}     link={browseProduct5[1].link}/>                                
                                <Card1      widthSize='23%' id={browseProduct5[2].id} image={browseProduct5[2].image} genre={browseProduct5[2].genre} name={browseProduct5[2].header} price={browseProduct5[2].price}     link={browseProduct5[2].link}/>
                                <Card10     widthSize='23%' id={browseProduct5[3].id} image={browseProduct5[3].image} genre={browseProduct5[3].genre} name={browseProduct5[3].header} available={browseProduct5[3].button}   price={browseProduct5[3].price} link={browseProduct5[3].link}/>
                            </div>

                            <div className="show_release_product_items">
                                <Card10  widthSize='23%' id={browseProduct6[0].id} image={browseProduct6[0].image} genre={browseProduct6[0].genre} name={browseProduct6[0].header} available={browseProduct6[0].button} price={browseProduct6[0].price} link={browseProduct6[0].link}/>
                                <Card10  widthSize='23%' id={browseProduct6[1].id} image={browseProduct6[1].image} genre={browseProduct6[1].genre} name={browseProduct6[1].header} available={browseProduct6[1].button} price={browseProduct6[1].price} link={browseProduct6[1].link}/>                                
                                <Card10  widthSize='23%' id={browseProduct6[2].id} image={browseProduct6[2].image} genre={browseProduct6[2].genre} name={browseProduct6[2].header} available={browseProduct6[2].button} price={browseProduct6[2].price} link={browseProduct6[2].link}/>
                                <Card2   widthSize='23%' id={browseProduct6[3].id} image={browseProduct6[3].image} genre={browseProduct6[3].genre} name={browseProduct6[3].header} discount={browseProduct6[3].discount} stroke={browseProduct6[3].stroke} price={browseProduct6[3].price} link={browseProduct6[3].link}/>
                            </div>

                            <div className="show_release_product_items">
                                <Card10  widthSize='23%'    id={browseProduct7[0].id} image={browseProduct7[0].image} genre={browseProduct7[0].genre} name={browseProduct7[0].header} available={browseProduct7[0].button} price={browseProduct7[0].price} link={browseProduct7[0].link}/>
                                <Card1   widthSize='23%'    id={browseProduct7[1].id} image={browseProduct7[1].image} genre={browseProduct7[1].genre} name={browseProduct7[1].header} price={browseProduct7[1].price} link={browseProduct7[1].link}/>                                
                                <Card10  widthSize='23%'    id={browseProduct7[2].id} image={browseProduct7[2].image} genre={browseProduct7[2].genre} name={browseProduct7[2].header} available={browseProduct7[2].button} price={browseProduct7[2].price} link={browseProduct7[2].link}/>
                                <Card1   widthSize='23%'    id={browseProduct7[3].id} image={browseProduct7[3].image} genre={browseProduct7[3].genre} name={browseProduct7[3].header} price={browseProduct7[3].price} link={browseProduct7[3].link}/>
                            </div>

                            <div className="show_release_product_items">
                                {/* <Card10  widthSize='23%'/>
                                <Card10  widthSize='23%'/>                                
                                <Card10  widthSize='23%'/>
                                <Card10 widthSize='23%'/> */}

                                {browseProduct8.map((browse) => 
                                    <Card10 
                                        widthSize='23%'
                                        id={browse.id} 
                                        image={browse.image} 
                                        genre={browse.genre} 
                                        name={browse.header} 
                                        available={browse.button} 
                                        price={browse.price} 
                                        link={browse.link}
                                    />
                                )}
                            </div>

                            <div className="show_release_product_items">
                                <Card1  widthSize='23%' id={browseProduct9[0].id} image={browseProduct9[0].image} genre={browseProduct9[0].genre} name={browseProduct9[0].header} price={browseProduct9[0].price} link={browseProduct9[0].link}/>
                                <Card10 widthSize='23%' id={browseProduct9[1].id} image={browseProduct9[1].image} genre={browseProduct9[1].genre} name={browseProduct9[1].header} available={browseProduct9[1].button} price={browseProduct9[1].price} link={browseProduct9[1].link}/>                                
                                <Card1  widthSize='23%' id={browseProduct9[2].id} image={browseProduct9[2].image} genre={browseProduct9[2].genre} name={browseProduct9[2].header} price={browseProduct9[2].price} link={browseProduct9[2].link}/>
                                <Card1  widthSize='23%' id={browseProduct9[3].id} image={browseProduct9[3].image} genre={browseProduct9[3].genre} name={browseProduct9[3].header} price={browseProduct9[3].price} link={browseProduct9[3].link}/>
                            </div>

                            <div className="show_release_product_items">
                                {/* <Card1  widthSize='23%'/>
                                <Card1  widthSize='23%'/>                                
                                <Card1  widthSize='23%'/>
                                <Card1  widthSize='23%'/> */}

                                {browseProduct10.map((productt) => 
                                    <Card1 
                                        widthSize='23%'
                                        id={productt.id} 
                                        image={productt.image} 
                                        genre={productt.genre} 
                                        name={productt.header}  
                                        price={productt.price} 
                                        link={productt.link}
                                    />
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="show_filters"></div>
                </div>
            </div>







            <Lowest />
            <Footer />

        </>
    )
}