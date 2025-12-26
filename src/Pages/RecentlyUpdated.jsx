import { useRef, useState } from 'react';

import {Link} from 'react-router-dom'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './DiscoverSlide.css'

import { Card1 } from './card1';
import { Card2 } from './card2';
import { Card8 } from './Card8';

import battlefield1 from '../images/75c29ee64502c26c89759ae727e5ca1a.jpg'
import windsMeet from '../images/e90a259d24f0277f8c0264f3b9ecb609.jpg'
import warFrame from '../images/Honkai.jpg'
import starTrek from '../images/5e93ee9a764cf2326a92f61f8fefdb1f.jpg'
import morsel from '../images/d1cf730efac5e50b1ea0bd9750f46356.jpg'

import blood from '../images/OutOfTimeGoogle.jpg'
import gigaSword from '../images/apex-legends-1mf51.jpg'
import callOfDuty from '../images/6f651783194172f86f3211749f52f5a1.jpg'
import mortalKombat from '../images/ea2f872d27e9488ed72f866003620a83.jpg'
import Anno from '../images/28c076b3bd0809c83ae3a6906926337d.jpg'

import FortFestival from '../images/5524ed52c3de034c556d88b4d7518117.jpg'
import Rue from '../images/312cc25bbd273e9efefc4d9bbe0fe910.jpg'
import SurvivingMars from '../images/64609dbe7a4a89ce46cd05803918afe4.jpg'
import PMR from '../images/90f45dc7cd39d51beec7f2fc32c32bb2.jpg'
import Wallworld2 from '../images/0711fb5f21e73333758db778f12b5302.jpg'

import beachBuggy from '../images/da58ceb54f39d3249af2056be7a7843b.jpg'
import pubG from '../images/02cb7d6daaf8d934967f1b9e981ac77c.jpg'
import letThemCome from '../images/2d273973a88b3ab45f0d0763300b0695.jpg'
import skyForge from '../images/97657e12f1b8cbf71b6837f02b23d423.jpg'
import Mk11 from '../images/d8b5f39a50dffd37e74e631d42bdea58.jpg'

import residentEvil from '../images/4a20910ffae2133b669f669a56b2dc3a.jpg'
import reAnimal from '../images/e55e4e55755cfbb01cf36783135796a5.jpg'
import FightLight007 from '../images/9a64b68ff2c9b354218e4b014519f28c.jpg'
import MIO from '../images/836cc5e54a650d60c213149e55c238c9.jpg'
import HOL2 from '../images/8f977a072d066f0a60fe5b7fa977c238.jpg'

import Magic from '../images/6c6418b792029402e818aaaf39ab867b.jpg'
import Farming from '../images/b1fdd7cb07fb6a9f8aaeb3fabcf7af36.jpg'
import Teenage from '../images/ddf521cf01418ab206c89d51e8363432.jpg'
import Cloudheim from '../images/cloudheimGoogle.jpg'
import Raven from '../images/4715809_1.avif'

import Sid from '../images/fe1b52dedacac0b79f7fc3048a6ba304.jpg'
import InfinityNikki from '../images/ee7c544bf9ee4ec0b7aaabac2e08f2fd.png'
import onceHuman from '../images/4ceffffe634955fda2cfc30db0d0acc1.jpg'
import Path from '../images/e77c95b39383281979eec33f4cbdd544.jpg'
import Vampire from '../images/1c161429a5475e0f648a935b1adf321a.jpg'

import Immortals33 from '../images/c326fee8f0f050b08269fc584821bcac.png'

export const RecentlyUpdated = () => {

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
            {id: 1, image: battlefield1, genre: 'Base Game', name: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl', price: '$42.99', link: '/login'},
            {id: 2, image: windsMeet,    genre: 'Base Game', name: 'Disney Speedstorm',                    price: 'Free', link: '/login'},
            {id: 3, image: warFrame,     genre: 'Base Game', name: "Honkai: Star Rail",                    price: 'Free', link: '/login'},
            {id: 4, image: starTrek,     genre: 'Base Game', name: 'Destiny 2',                            price: 'Free', link: '/login'},
            {id: 5, image: morsel,       genre: 'Base Game', name: 'SMITE 2',                              price: 'Free', link: '/login'},
        ]
    
        const product2 = [
            {id: 1, image: blood,        genre: 'Base Game', name: 'Out of Time', price: '$9.99', link: '/login'},
            {id: 2, image: gigaSword,    genre: 'Base Game', name: 'Apex Legends', price: 'Free', link: '/login'},
            {id: 3, image: callOfDuty,   genre: 'Base Game', name: 'Path of Exile 2', price: '', link: '/login'},
            {id: 4, image: mortalKombat, genre: 'Base Game', name: 'Marvel Rivals', price: 'Free', link: '/login'},
            {id: 5, image: Anno,         genre: 'Base Game', name: 'Asphalt Legends', price: 'Free', link: '/login'},
        ]
    
        const product3 = [
            {id: 1, image: FortFestival,   genre: 'Base Game', name: 'Dead by Daylight', discount: '-60%', stroke: '$14.99*', price: '$5.99', link: '/login'},
            {id: 2, image: Rue,            genre: 'Base Game', name: 'Warframe', price: 'Free', link: '/login'},
            {id: 3, image: SurvivingMars,  genre: 'Base Game', name: 'Disney Dreamlight Valley', price: '$29.99', link: '/login'},
            {id: 4, image: PMR,            genre: 'Base Game', name: 'The Outlast Trials', discount: '-70%', stroke: '$10.39*', price: '$3.11', link: '/login'},
            {id: 5, image: Wallworld2,     genre: 'Base Game', name: 'theHunter: Call of the Wild', price: '$4.99', link: '/login'},
        ]
    
        const product4 = [
            {id: 1, image: beachBuggy,      genre: 'Base Game', name: 'POPUCOM', price: '$10.49', link: '/login'},
            {id: 2, image: pubG,            genre: 'Base Game', name: 'World of Warships', price: 'Free', link: '/login'},
            {id: 3, image: letThemCome,     genre: 'Base Game', name: 'Genshin Impact', price: 'Free', link: '/login'},
            {id: 4, image: skyForge,        genre: 'Base Game', name: 'Zenless Zone Zero', price: 'Free', link: '/login'},
            {id: 5, image: Mk11,            genre: 'Base Game', name: 'Borderlands 4', discount: '-20%', stroke: '$69.99', price: '$55.99', link: '/login'},
        ]
    
        const product5 = [
            {id: 1, image: residentEvil,        genre: 'Base Game', name: 'WUCHANG: Fallen Feathers', price: '$34.99', link: '/login'},
            {id: 2, image: reAnimal,            genre: 'Base Game', name: 'Hell Let Loose', discount: '-75%', stroke: '$23.99', price: '$5.99', link: '/login'},
            {id: 3, image: FightLight007,       genre: 'Base Game', name: 'Neverwinter', price: 'Free', link: '/login'},
            {id: 4, image: MIO,                 genre: 'Base Game', name: 'Sons of Valhalla', discount: '-50%', stroke: '$9.99', price: '$4.99', link: '/login'},
            {id: 5, image: HOL2,                genre: 'Base Game', name: 'Wuthering Waves', price: 'Free', link: '/login'},
        ]

        const product6 = [
            {id: 1, image: Magic,     genre: 'Base Game', name: 'Magic: The Gathering Arena', price: 'Free', link: '/login'},
            {id: 2, image: Farming,   genre: 'Base Game', name: 'Farming Simulator 25', price: '$19.49', link: '/login'},
            {id: 3, image: Teenage,   genre: 'Base Game', name: 'Teenage Mutant Ninja Turtles: Splintered Fate', discount: '-60%', stroke: '$12.99', price: '$5.19', link: '/login'},
            {id: 4, image: Cloudheim, genre: 'Base Game', name: 'Cloudheim', price: '$13.49', link: '/login'},
            {id: 5, image: Raven,     genre: 'Base Game', name: 'RAVEN2',    button: 'First Run', price: 'Free', link: '/login'},
        ]

        const product7 = [
            {id: 1, image: Sid,              genre: 'Base Game', name: "Sid Meier's Civilization VII", discount: '', stroke: '', price: '$52.49', link: '/login'},
            {id: 2, image: InfinityNikki,    genre: 'Base Game', name: 'Infinity Nikki', price: 'Free', link: '/login'},
            {id: 3, image: onceHuman,        genre: 'Base Game', name: 'Once Human', price: 'Free', link: '/login'},
            {id: 4, image: Path,             genre: 'Base Game', name: 'Path of Exile', price: 'Free', link: '/login'},
            {id: 5, image: Vampire,          genre: 'Base Game', name: 'Vampire: The Masquerade Bloodlines 2', discount: '-20%', stroke: '$35.99', price: '$28.79', link: '/login'},
        ]

        const product8 = [
            {id: 1, image: InfinityNikki,    genre: 'Base Game', name: 'Infinity Nikki', price: 'Free', link: '/login'},
            {id: 2, image: onceHuman,        genre: 'Base Game', name: 'Once Human', price: 'Free', link: '/login'},
            {id: 3, image: Path,             genre: 'Base Game', name: 'Path of Exile', price: 'Free', link: '/login'},
            {id: 4, image: Vampire,          genre: 'Base Game', name: 'Vampire: The Masquerade Bloodlines 2', discount: '-20%', stroke: '$35.99', price: '$28.79', link: '/login'},
            {id: 5, image: Immortals33,      genre: 'Base Game', name: '33 Immortals ', price: '$7.99', link: '/login'},
        ]
    
    return(
        <>
             <div className="discoverr_content">
                <div className="discover_something_new">
                    <div className="discover_something_new_1">
                        <div className="discover_something_new_header">
                           <Link>Recently Updated</Link> 
                        </div>

                        <div className="discover_something_new_slide">
                            <div className="discover_something_new_navigation">
                                <div className="discover_sum_nav_1">
                                    <button ref={prevRef} onClick={HandleArrowColorL}><i class="fa-solid fa-less-than" style={{color: arrowColorL}}></i></button>
                                    <button ref={nextRef} onClick={HandleArrowColorR}><i class="fa-solid fa-greater-than" style={{color: arrowColorR}}></i></button>
                                </div>
                            </div>

                            <div className="discover_something_new_swiper_slide">
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation]}
                                        spaceBetween={50}
                                        slidesPerView={1}
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
                                                {product1.map((product) => 
                                                    <Card1
                                                        key={product.id} 
                                                        image={product.image}
                                                        genre={product.genre}
                                                        name={product.name}
                                                        price={product.price}
                                                        link={product.link}
                                                    />
                                                )}
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                {product2.map((product) => 
                                                    <Card1
                                                        key={product.id} 
                                                        image={product.image}
                                                        genre={product.genre}
                                                        name={product.name}
                                                        price={product.price}
                                                        link={product.link}
                                                    />
                                                )}
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                <Card2 key={product3[0].id} image={product3[0].image} genre={product3[0].genre} name={product3[0].name} discount={product3[0].discount} stroke={product3[0].stroke} price={product3[0].price} link={product3[0].link} />
                                                <Card1 key={product3[1].id} image={product3[1].image} genre={product3[1].genre} name={product3[1].name} price={product3[1].price} link={product3[1].link}/>
                                                <Card1 key={product3[2].id} image={product3[2].image} genre={product3[2].genre} name={product3[2].name} price={product3[2].price} link={product3[2].link}/>
                                                <Card2 key={product3[3].id} image={product3[3].image} genre={product3[3].genre} name={product3[3].name} discount={product3[3].discount} stroke={product3[3].stroke} price={product3[3].price} link={product3[3].link}/>
                                                <Card1 key={product3[4].id} image={product3[4].image} genre={product3[4].genre} name={product3[4].name} price={product3[4].price} link={product3[4].link}/>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                <Card1 key={product4[0].id} image={product4[0].image} genre={product4[0].genre} name={product4[0].name} price={product4[0].price} link={product4[0].link} />
                                                <Card1 key={product4[1].id} image={product4[1].image} genre={product4[1].genre} name={product4[1].name} price={product4[1].price} link={product4[1].link} />
                                                <Card1 key={product4[2].id} image={product4[2].image} genre={product4[2].genre} name={product4[2].name} price={product4[2].price} link={product4[2].link} />
                                                <Card1 key={product4[3].id} image={product4[3].image} genre={product4[3].genre} name={product4[3].name} price={product4[3].price} link={product4[3].link}/>
                                                <Card2 key={product4[4].id} image={product4[4].image} genre={product4[4].genre} name={product4[4].name} discount={product4[4].discount} stroke={product4[4].stroke} price={product4[4].price} link={product4[4].link}/>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                <Card1 key={product5[0].id} image={product5[0].image} genre={product5[0].genre} name={product5[0].name} price={product5[0].price} link={product5[0].link}/>
                                                <Card2 key={product5[1].id} image={product5[1].image} genre={product5[1].genre} name={product5[1].name} discount={product5[1].discount} stroke={product5[1].stroke} price={product5[1].price} link={product5[1].link}/>
                                                <Card1 key={product5[2].id} image={product5[2].image} genre={product5[2].genre} name={product5[2].name} price={product5[2].price} link={product5[2].link}/>
                                                <Card2 key={product5[3].id} image={product5[3].image} genre={product5[3].genre} name={product5[3].name} discount={product5[3].discount} stroke={product5[3].stroke} price={product5[3].price} link={product5[3].link}/>
                                                <Card1 key={product5[4].id} image={product5[4].image} genre={product5[4].genre} name={product5[4].name} price={product5[4].price} link={product5[4].link}/>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                <Card1 key={product6[0].id} image={product6[0].image} genre={product6[0].genre} name={product6[0].name} price={product6[0].price} link={product6[0].link}/>
                                                <Card1 key={product6[1].id} image={product6[1].image} genre={product6[1].genre} name={product6[1].name} price={product6[1].price} link={product6[1].link}/>
                                                <Card2 key={product6[2].id} image={product6[2].image} genre={product6[2].genre} name={product6[2].name} discount={product6[2].discount} stroke={product6[2].stroke} price={product6[2].price} link={product6[2].link}/>
                                                <Card1 key={product6[3].id} image={product6[3].image} genre={product6[3].genre} name={product6[3].name} price={product6[3].price} link={product6[3].link}/>
                                                <Card8 key={product6[4].id} image={product6[4].image} genre={product6[4].genre} name={product6[4].name} button={product6[4].button} price={product6[4].price} link={product6[4].link}/>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                <Card2 key={product7[0].id} image={product7[0].image} genre={product7[0].genre} name={product7[0].name} discount={product7[0].discount} stroke={product7[0].stroke} price={product7[0].price} link={product7[0].link}/>
                                                <Card1 key={product7[1].id} image={product7[1].image} genre={product7[1].genre} name={product7[1].name} price={product7[1].price} link={product7[1].link}/>
                                                <Card1 key={product7[2].id} image={product7[2].image} genre={product7[2].genre} name={product7[2].name} price={product7[2].price} link={product7[2].link}/>
                                                <Card1 key={product7[3].id} image={product7[3].image} genre={product7[3].genre} name={product7[3].name} price={product7[3].price} link={product7[3].link}/>
                                                <Card2 key={product7[4].id} image={product7[4].image} genre={product7[4].genre} name={product7[4].name} discount={product7[4].discount} stroke={product7[4].stroke} price={product7[4].price} link={product7[4].link}/>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                <Card1 key={product8[0].id} image={product8[0].image} genre={product8[0].genre} name={product8[0].name} price={product8[0].price} link={product8[0].link}/>
                                                <Card1 key={product8[1].id} image={product8[1].image} genre={product8[1].genre} name={product8[1].name} price={product8[1].price} link={product8[1].link}/>
                                                <Card1 key={product8[2].id} image={product8[2].image} genre={product8[2].genre} name={product8[2].name} price={product8[2].price} link={product8[2].link}/>
                                                <Card2 key={product8[3].id} image={product8[3].image} genre={product8[3].genre} name={product8[3].name} discount={product8[3].discount} stroke={product8[3].stroke} price={product8[3].price} link={product8[3].link}/>
                                                <Card1 key={product8[4].id} image={product8[4].image} genre={product8[4].genre} name={product8[4].name} price={product8[4].price} link={product8[4].link}/>
                                            </div>
                                        </SwiperSlide>
                                        ...
                                        </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}