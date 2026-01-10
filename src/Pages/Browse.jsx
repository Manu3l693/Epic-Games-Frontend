import { useRef, useState, useEffect } from 'react';

import { NavigationOne } from "./Nav1"
import { NavigationBarTwo } from "./Nav2"

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Browse.css'

import { PopularCard } from './popularCards';

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
            {id: 1, image1: wildgate, image2: brawl, image3: crown, header: 'Action Games', link:'/Hello'},
            {id: 2, image1: wanted,   image2: balor, image3: trine, header: 'Action-Adventure Games', link:'/Hello'},
            {id: 3, image1: wanted,   image2: elven, image3: emergency, header: 'Adventure Games', link:'/Hello'},
            {id: 4, image1: elven,    image2: tiny,  image3: crown, header: 'Casual Games', link:'/Hello'}
        ]

        const product2 = [
            {id: 1, image1: godzilla,       image2: worshipper, image3: superFantasy,  header: 'City Builder Games', link:'/Hello'},
            {id: 2, image1: wildgate,       image2: tiny,       image3: trine,         header: 'Co-Op Games', link:'/Hello'},
            {id: 3, image1: wanted,         image2: wildgate,   image3: bloodStained,  header: 'Cross Platform Games', link:'/Hello'},
            {id: 4, image1: questionnaire,  image2: heroesOfLoot, image3: chronosWorld, header: 'Dungeon Crawler Games', link:'/Hello'}
        ]

        const product3 = [
            {id: 1, image1: casted,         image2: thePromise,         image3: wanted, header: 'Exploration Games', link:'/Hello'},
            {id: 2, image1: bloodStained,   image2: cultivation,        image3: endless, header: 'Fantasy Games', link:'/Hello'},
            {id: 3, image1: wanted,         image2: serke,              image3: yakuza, header: 'Fighting Games', link:'/Hello'},
            {id: 4, image1: goToSleep,      image2: propHunter,          image3: fiveNight, header: 'Horror Games', link:'/Hello'}
        ]

        const product4 = [
            {id: 1, image1: '', image2: '', image3: '', header: 'Indie Games', link:'/Hello'},
            {id: 2, image1: '', image2: '', image3: '', header: 'Mac Games', link:'/Hello'},
            {id: 3, image1: '', image2: '', image3: '', header: 'MMO Games', link:'/Hello'},
            {id: 4, image1: '', image2: '', image3: '', header: 'Multiplayer Games', link:'/Hello'}
        ]

        const product5 = [
            {id: 1, image1: '', image2: '', image3: '', header: 'Music Games', link:'/Hello'},
            {id: 2, image1: '', image2: '', image3: '', header: 'Open World Games', link:'/Hello'},
            {id: 3, image1: '', image2: '', image3: '', header: 'Party Games', link:'/Hello'},
            {id: 4, image1: '', image2: '', image3: '', header: 'Platformer Games', link:'/Hello'}
        ]

        const product6 = [
            {id: 1, image1: '', image2: '', image3: '', header: 'Puzzle Games', link:'/Hello'},
            {id: 2, image1: '', image2: '', image3: '', header: 'Racing Games', link:'/Hello'},
            {id: 3, image1: '', image2: '', image3: '', header: 'Retro Games', link:'/Hello'},
            {id: 4, image1: '', image2: '', image3: '', header: 'Rogue-Lite Games', link:'/Hello'}
        ]

        const product7 = [
            {id: 1, image1: '', image2: '', image3: '', header: 'RPG Games', link:'/Hello'},
            {id: 2, image1: '', image2: '', image3: '', header: 'RTS Games', link:'/Hello'},
            {id: 3, image1: '', image2: '', image3: '', header: 'Shooter Games', link:'/Hello'},
            {id: 4, image1: '', image2: '', image3: '', header: 'Simulation Games', link:'/Hello'}
        ]

        const product8 = [
            {id: 1, image1: '', image2: '', image3: '', header: 'Single Player Games', link:'/Hello'},
            {id: 2, image1: '', image2: '', image3: '', header: 'Space Games', link:'/Hello'},
            {id: 3, image1: '', image2: '', image3: '', header: 'Sports Games', link:'/Hello'},
            {id: 4, image1: '', image2: '', image3: '', header: 'Stealth Games', link:'/Hello'}
        ]

        const product9 = [
            {id: 1, image1: '', image2: '', image3: '', header: 'Strategy Games', link:'/Hello'},
            {id: 2, image1: '', image2: '', image3: '', header: 'Survival Games', link:'/Hello'},
            {id: 3, image1: '', image2: '', image3: '', header: 'Tower Defenses Games', link:'/Hello'},
            {id: 4, image1: '', image2: '', image3: '', header: 'Trivia Games', link:'/Hello'}
        ]

        const product10 = [
            {id: 1, image1: '', image2: '', image3: '', header: 'Turn Based Games', link:'/Hello'},
            {id: 2, image1: '', image2: '', image3: '', header: 'Turn Based Strategy Games', link:'/Hello'},
            {id: 3, image1: '', image2: '', image3: '', header: 'VR Games', link:'/Hello'},
            {id: 4, image1: '', image2: '', image3: '', header: 'Windows Games', link:'/Hello'}
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

        </>
    )
}