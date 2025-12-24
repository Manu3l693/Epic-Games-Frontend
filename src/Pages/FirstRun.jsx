import { useRef, useState } from 'react';

import {Link} from 'react-router-dom'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './DiscoverSlide.css'

import { Card1 } from './card1';
import { Card7 } from './Card7';
import { Card8 } from './Card8';
import { Card9 } from './Card9';


import battlefield1 from '../images/CountryTale.jpg'
import windsMeet from '../images/heirloom.jpg'
import warFrame from '../images/4715809_1.avif'
import starTrek from '../images/atlas.jpg'
import morsel from '../images/optics.jpg'

import blood from '../images/farcana-12z7m.png'
import gigaSword from '../images/stellar.jpg'
import callOfDuty from '../images/super-miaoyin-1f32d.avif'
import mortalKombat from '../images/guards-ii-chaos-in-hell-146iu.jpg'
import Anno from '../images/space-road-elite-1rd0z.jpg'



export const FirstRun = () => {
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
                {id: 1, image: battlefield1, genre: 'Base Game', name: 'Countrytale 2010',          button:'First Run',     discount: '-95%', stroke:'$7.99*', price: '$0.39', link: '/login'},
                {id: 2, image: windsMeet,    genre: 'Base Game', name: 'The Heirloom',              button: 'First Run',    price: 'Free',    link: '/login'},
                {id: 3, image: warFrame,     genre: 'Base Game', name: "RAVEN2",                    button:'First Run',     discount: '-95%', stroke:'$7.99*', price: '$0.39', link: '/login'},
                {id: 4, image: starTrek,     genre: 'Base Game', name: 'Atlas War',                 button: 'First Run',    price: 'Free',    link: '/login'},
                {id: 5, image: morsel,       genre: 'Base Game', name: 'Scientific project: Optic', button:'First Run',     discount: '-95%', stroke:'$7.99*', price: '$0.39', link: '/login'},
            ]
        
            const product2 = [
                {id: 1, image: blood,        genre: 'Base Game', name: 'Farcana',                           button: 'First Run',    available: 'Coming Soon', link: '/login'},
                {id: 2, image: gigaSword,    genre: 'Base Game', name: 'Stellar Subterranean',              button: 'First Run',    available: 'Coming Soon', link: '/login'},
                {id: 3, image: callOfDuty,   genre: 'Base Game', name: 'Super Miaoyin',                     price: 'Free',          color: 'white',           link: '/login'},
                {id: 4, image: mortalKombat, genre: 'Base Game', name: 'Guards II: Chaos in Hell',          button: 'First Run',    price: 'Free',            link: '/login'},
                {id: 5, image: Anno,         genre: 'Base Game', name: 'Space Road: Elite',                 button: 'First Run',    price: '$12.99',          link: '/login'},
            ]
        
    return(
        <>
            <div className="discoverr_content">
                <div className="discover_something_new">
                    <div className="discover_something_new_1">
                        <div className="discover_something_new_header">
                            <Link to='/login'> Featured From Epic First Run <i class="fa-solid fa-greater-than"></i> </Link> 
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
                                            <Card7 key={product1[0].id} image={product1[0].image} genre={product1[0].genre} name={product1[0].name} button={product1[0].button} discount={product1[0].discount} stroke={product1[0].stroke} price={product1[0].price} link={product1[0].link}/>
                                            <Card8 key={product1[1].id} image={product1[1].image} genre={product1[1].genre} name={product1[1].name} button={product1[1].button} price={product1[1].price} link={product1[1].link}/>
                                            <Card7 key={product1[2].id} image={product1[2].image} genre={product1[2].genre} name={product1[2].name} button={product1[2].button} discount={product1[2].discount} stroke={product1[2].stroke} price={product1[2].price} link={product1[2].link}/>
                                            <Card8 key={product1[3].id} image={product1[3].image} genre={product1[3].genre} name={product1[3].name} button={product1[3].button} price={product1[3].price} link={product1[3].link}/>
                                            <Card7 key={product1[4].id} image={product1[4].image} genre={product1[4].genre} name={product1[4].name} button={product1[4].button} discount={product1[4].discount} stroke={product1[4].stroke} price={product1[4].price} link={product1[4].link}/>
                                        </div>
                                    </SwiperSlide>
            
                                    <SwiperSlide>
                                        <div className="swiper_items_">
                                            <Card9 key={product2[0].id} image={product2[0].image} genre={product2[0].genre} name={product2[0].name} button={product2[0].button} available={product2[0].available} link={product2[0].link}/>
                                            <Card9 key={product2[1].id} image={product2[1].image} genre={product2[1].genre} name={product2[1].name} button={product2[1].button} available={product2[1].available} link={product2[1].link}/>
                                            <Card1 key={product2[2].id} image={product2[2].image} genre={product2[2].genre} name={product2[2].name} price={product2[2].price}  color={product2[2].color} link={product2[2].link}/>
                                            <Card8 key={product2[3].id} image={product2[3].image} genre={product2[3].genre} name={product2[3].name} button={product2[3].button} price={product2[3].price} link={product2[3].link}/>
                                            <Card8 key={product2[4].id} image={product2[4].image} genre={product2[4].genre} name={product2[4].name} button={product2[4].button} price={product2[4].price} link={product2[4].link}/>
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