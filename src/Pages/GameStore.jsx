import { useRef, useState } from 'react';

import {Link} from 'react-router-dom'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './DiscoverSlide.css'

import { Card1 } from './card1';
import { Card6 } from './Card6';
import { Card10 } from './Card10';

import battlefield1 from '../images/polyPaza.jpg'
import windsMeet from '../images/BloodStained.jpg'
import warFrame from '../images/wildWest.jpg'
import starTrek from '../images/bef6813626ccd5561afff6ed3be3a748.jpg'
import morsel from '../images/Rise2.jpg'

import blood from '../images/Kayas.jpg'
import gigaSword from '../images/hoomanz-1pxs9.jpg'
import callOfDuty from '../images/DancingMoon.jpg'
import mortalKombat from '../images/stardash-1h05o.avif'
import Anno from '../images/Kaku.jpg'

import FortFestival from '../images/Gloomy.jpg'
import Rue from '../images/SnakeCore.jpg'
import SurvivingMars from '../images/Kellan.jpg'
import PMR from '../images/botany-manor-8e6i5.avif'
import Wallworld2 from '../images/sir-questionnaire-1bmyn.avif'

export const GameStore = () => {

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
                    {id: 1, image: battlefield1, genre: 'Base Game', name: 'Poly Plaza ULTIMATE',                           available: 'Now On Epic', price: '$2.19', link: '/login'},
                    {id: 2, image: windsMeet,    genre: 'Base Game', name: 'Bloodstained: Ritual of the Night',             available: 'Now On Epic', price: '$13.99', link: '/login'},
                    {id: 3, image: warFrame,     genre: 'Base Game', name: 'Wild West Saga',                                available: 'Now On Epic', price: 'Free', link: '/login'},
                    {id: 4, image: starTrek,     genre: 'Base Game', name: 'The Pedestrian',                                available: 'Now On Epic', discount: '-40%', stroke:'$8.99', price: '$5.39', link: '/login'},
                    {id: 5, image: morsel,       genre: 'Base Game', name: "Rise of the Penguins 2: Penguin's Dark Ascent", available: 'Now On Epic',                         price: '$1.29', link: '/login'},
                ]
            
                const product4 = [
                    {id: 1, image: blood,        genre: 'Base Game', name: "Kaya's Prophecy",             available:'Now On Epic',  discount:'-40%', stroke: '$6.29', price: '$3.77', link: '/login'},
                    {id: 2, image: gigaSword,    genre: 'Base Game', name: 'Hoomanz!',                    available:'Now On Epic',  price: '$2.19', link: '/login'},
                    {id: 3, image: callOfDuty,   genre: 'Base Game', name: 'Tales from The Dancing Moon', available:'Now On Epic',  discount: '-40%', stroke: '$7.19', price: '$4.31', link: '/login'},
                    {id: 4, image: mortalKombat, genre: 'Base Game', name: 'Stardash',                    available:'Now On Epic',  price: '$2.49', link: '/login'},
                    {id: 5, image: Anno,         genre: 'Base Game', name: 'KAKU: Ancient Seal',          available:'Now On Epic',  discount: '-40%', stroke: '$11.19', price: '$6.71', link: '/login'},
                ]
            
                const product5 = [
                    {id: 1, image: FortFestival,   genre: 'Base Game', name: 'Gloomy Eyes',              available:'Now On Epic', price: '$11.19',    link: '/login'},
                    {id: 2, image: Rue,            genre: 'Base Game', name: "Snake Core",               available:'Now On Epic', price: '$2.49', link: '/login'},
                    {id: 3, image: SurvivingMars,  genre: 'Base Game', name: 'Kellan Graves: Fallen',    available:'Now On Epic', price: '$2.19',  link: '/login'},
                    {id: 4, image: PMR,            genre: 'Base Game', name: 'Botany Manor',             price: '$6.49', link: '/login'},
                    {id: 5, image: Wallworld2,     genre: 'Base Game', name: 'Sir Questionnaire',        price: '$2.49',  link: '/login'},
                ]
    return(
        <>
         <div className="discoverr_content">
                           <div className="discover_something_new">
                               <div className="discover_something_new_1">
                                   <div className="discover_something_new_header">
                                      <Link> Now On The Epic Game Store </Link> 
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
                                                          <Card10 key={product1[0].id} image={product1[0].image} genre={product1[0].genre} name={product1[0].name} available={product1[0].available} price={product1[0].price} link={product1[0].link}/>
                                                          <Card10 key={product1[1].id} image={product1[1].image} genre={product1[1].genre} name={product1[1].name} available={product1[1].available} price={product1[1].price} link={product1[1].link}/>
                                                          <Card10 key={product1[2].id} image={product1[2].image} genre={product1[2].genre} name={product1[2].name} available={product1[2].available} price={product1[2].price} link={product1[2].link}/>
                                                          <Card6  key={product1[3].id} image={product1[3].image} genre={product1[3].genre} name={product1[3].name} available={product1[3].available} discount={product1[3].discount} stroke={product1[3].stroke} price={product1[3].price} link={product1[3].link}/>
                                                          <Card10 key={product1[4].id} image={product1[4].image} genre={product1[4].genre} name={product1[4].name} available={product1[4].available} price={product1[4].price} link={product1[4].link}/>
                                                       </div>
                                                   </SwiperSlide>
           
                                                   <SwiperSlide>
                                                       <div className="swiper_items_">
                                                           <Card6  key={product4[0].id}  image={product4[0].image} genre={product4[0].genre} name={product4[0].name} available={product4[0].available} discount={product4[0].discount} stroke={product4[0].stroke} price={product4[0].price} link={product4[0].link}/>   
                                                           <Card10 key={product4[1].id}  image={product4[1].image} genre={product4[1].genre} name={product4[1].name} available={product4[1].available} price={product4[1].price} link={product4[1].link}/>                                                        
                                                           <Card6  key={product4[2].id}  image={product4[2].image} genre={product4[2].genre} name={product4[2].name} available={product4[2].available} discount={product4[2].discount} stroke={product4[2].stroke} price={product4[2].price} link={product4[2].link}/>
                                                           <Card10 key={product4[3].id}  image={product4[3].image} genre={product4[3].genre} name={product4[3].name} available={product4[3].available} price={product4[3].price} link={product4[3].link}/>
                                                           <Card6  key={product4[4].id}  image={product4[4].image} genre={product4[4].genre} name={product4[4].name} available={product4[4].available} discount={product4[4].discount} stroke={product4[4].stroke} price={product4[4].price} link={product4[4].link}/>
                                                       </div>
                                                   </SwiperSlide>
           
                                                   <SwiperSlide>
                                                       <div className="swiper_items_">
                                                           <Card10 key={product5[0].id} image={product5[0].image} genre={product5[0].genre} name={product5[0].name} available={product5[0].available} price={product5[0].price} link={product5[0].link}/>
                                                           <Card10 key={product5[1].id} image={product5[1].image} genre={product5[1].genre} name={product5[1].name} available={product5[1].available} price={product5[1].price} link={product5[1].link}/>
                                                           <Card10 key={product5[2].id} image={product5[2].image} genre={product5[2].genre} name={product5[2].name} available={product5[2].available} price={product5[2].price} link={product5[2].link}/>
                                                           <Card1  key={product5[3].id} image={product5[3].image} genre={product5[3].genre} name={product5[3].name} price={product5[3].price} link={product5[3].link}/>
                                                           <Card1  key={product5[4].id} image={product5[4].image} genre={product5[4].genre} name={product5[4].name} price={product5[4].price} link={product5[4].link}/>
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