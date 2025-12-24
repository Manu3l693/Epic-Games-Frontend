import { useRef, useState } from 'react';

import {Link} from 'react-router-dom'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './DiscoverSlide.css'

import { Card1 } from './card1';
import { Card2 } from './card2';
import { Card6 } from './Card6';

import battlefield1 from '../images/c255cc8c8622d97196866fd3fb955dce.jpg'
import windsMeet from '../images/392452b6b9eaad228456e970a8cde3cc.jpg'
import warFrame from '../images/b46469c5851be7facec604ceeef9aaaf.jpg'
import starTrek from '../images/88829011e0b34c47bbf5ff3706ca7e7f.jpg'
import morsel from '../images/ae6b51ea69f73830162d64d89ece6b19.jpg'

import blood from '../images/427c91f12a4c50fe27397de8fe09faa7.jpg'
import gigaSword from '../images/8a27d37cd175197e87c02a7fc7eb192d.jpg'
import callOfDuty from '../images/484b32fe2022ee1feb6d4eeccd56a7a9.jpg'
import mortalKombat from '../images/da530d299f2943bc6f4c04561c070211.jpg'
import Anno from '../images/42acab51cf2973d1b174ec59f11c9795.jpg'

import FortFestival from '../images/Nakara.jpg'
import Rue from '../images/ddfd17fe8a2bd5d4d12008a4b9f2ba89.jpg'
import SurvivingMars from '../images/3e30e8d285af7d92a45196bc07b06333.jpg'
import PMR from '../images/battle_field_grid.png'
import Wallworld2 from '../images/2985345d049f10ab8f5a81d9b4707a28.jpg'


export const MostPopular = () => {
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
                {id: 1, image: battlefield1, genre: 'Base Game', name: 'Grand Theft Auto V Enhanced',           discount: '-50%', stroke: '$29.99', price: '$14.99', link: '/login'},
                {id: 2, image: windsMeet,    genre: 'Base Game', name: 'Jotunnslayer: Hordes of Hel',           discount: '-25%', stroke: '$5.99', price: '$4.49', link: '/login'},
                {id: 3, image: warFrame,     genre: 'Base Game', name: 'Valorant',                              price: 'Free', link: '/login'},
                {id: 4, image: starTrek,     genre: 'Base Game', name: 'Marvel Rivals',                         price: 'Free', link: '/login'},
                {id: 5, image: morsel,       genre: 'Base Game', name: 'Crosshair X',                           price: '$1.99', link: '/login'},
            ]
        
            const product4 = [
                {id: 1, image: blood,        genre: 'Base Game', name: 'Crosshair V2',             price: 'Free',                 link: '/login'},
                {id: 2, image: gigaSword,    genre: 'Base Game', name: 'Red Dead Redemption 2',    discount: '-75%',              stroke: '$59.99', price: '$14.99', link: '/login'},
                {id: 3, image: callOfDuty,   genre: 'Base Game', name: 'EA SPORTS FC 26 Standard', available: 'Trial Available',  discount: '-60%', stroke: '$69.99', price: '$27.99', link: '/login'},
                {id: 4, image: mortalKombat, genre: 'Base Game', name: 'Where Winds Meet',         price: 'Free', link: '/login'},
                {id: 5, image: Anno,         genre: 'Base Game', name: 'Among Us',                 discount: '-40%', stroke: '$0.99', price: '$0.59', link: '/login'},
            ]
        
            const product5 = [
                {id: 1, image: FortFestival,   genre: 'Base Game', name: 'NAKARA: BLADEPOINT',              price: 'Free',    link: '/login'},
                {id: 2, image: Rue,            genre: 'Base Game', name: "Sid Meier's Civilization VI",     discount: '-90%', stroke: '$59.99',  price: '$5.99', link: '/login'},
                {id: 3, image: SurvivingMars,  genre: 'Base Game', name: 'Farming Simulator 22',            price: '$29.99',  link: '/login'},
                {id: 4, image: PMR,            genre: 'Base Game', name: 'Battlefield 6',                   discount: '-30%', stroke: '$69.99',  price: '$48.99', link: '/login'},
                {id: 5, image: Wallworld2,     genre: 'Base Game', name: 'Dead Island 2',                   discount: '-80%', stroke: '$37.49',  price: '$7.49',  link: '/login'},
            ]
    return(
        <>
            <div className="discoverr_content">
                           <div className="discover_something_new">
                               <div className="discover_something_new_1">
                                   <div className="discover_something_new_header">
                                      <Link to='/login'> Most Popular <i class="fa-solid fa-greater-than"></i> </Link> 
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
                                                          <Card2 key={product1[0].id} image={product1[0].image} genre={product1[0].genre} name={product1[0].name} discount={product1[0].discount} stroke={product1[0].stroke} price={product1[0].price} link={product1[0].link}/>
                                                          <Card2 key={product1[1].id} image={product1[1].image} genre={product1[1].genre} name={product1[1].name} discount={product1[1].discount} stroke={product1[1].stroke} price={product1[1].price} link={product1[1].link}/>
                                                          <Card1 key={product1[2].id} image={product1[2].image} genre={product1[2].genre} name={product1[2].name} discount={product1[2].discount} stroke={product1[2].stroke} price={product1[2].price} link={product1[2].link}/>
                                                          <Card1 key={product1[3].id} image={product1[3].image} genre={product1[3].genre} name={product1[3].name} discount={product1[3].discount} stroke={product1[3].stroke} price={product1[3].price} link={product1[3].link}/>
                                                          <Card1 key={product1[4].id} image={product1[4].image} genre={product1[4].genre} name={product1[4].name} available={product1[4].available} discount={product1[4].discount} stroke={product1[4].stroke} price={product1[4].price} link={product1[4].link}/>
                                                       </div>
                                                   </SwiperSlide>
           
                                                   <SwiperSlide>
                                                       <div className="swiper_items_">
                                                           <Card1 key={product4[0].id} image={product4[0].image} genre={product4[0].genre} name={product4[0].name} discount={product4[0].discount} stroke={product4[0].stroke} price={product4[0].price} link={product4[0].link}/>   
                                                           <Card2 key={product4[1].id} image={product4[1].image} genre={product4[1].genre} name={product4[1].name} discount={product4[1].discount} stroke={product4[1].stroke} price={product4[1].price} link={product4[1].link}/>                                                        
                                                           <Card6 key={product4[2].id} image={product4[2].image} genre={product4[2].genre} name={product4[2].name} available={product4[2].available} discount={product4[2].discount} stroke={product4[2].stroke} price={product4[2].price} link={product4[2].link}/>
                                                           <Card1 key={product4[3].id} image={product4[3].image} genre={product4[3].genre} name={product4[3].name} discount={product4[3].discount} stroke={product4[3].stroke} price={product4[3].price} link={product4[3].link}/>
                                                           <Card2 key={product4[4].id} image={product4[4].image} genre={product4[4].genre} name={product4[4].name} discount={product4[4].discount} stroke={product4[4].stroke} price={product4[4].price} link={product4[4].link}/>
                                                       </div>
                                                   </SwiperSlide>
           
                                                   <SwiperSlide>
                                                       <div className="swiper_items_">
                                                           <Card1 key={product5[0].id} image={product5[0].image} genre={product5[0].genre} name={product5[0].name} price={product5[0].price} link={product5[0].link}/>
                                                           <Card2 key={product5[1].id} image={product5[1].image} genre={product5[1].genre} name={product5[1].name} discount={product5[1].discount} stroke={product5[1].stroke} price={product5[1].price} link={product5[1].link}/>
                                                           <Card1 key={product5[2].id} image={product5[2].image} genre={product5[2].genre} name={product5[2].name} price={product5[2].price} link={product5[2].link}/>
                                                           <Card2 key={product5[3].id} image={product5[3].image} genre={product5[3].genre} name={product5[3].name} discount={product5[3].discount} stroke={product5[3].stroke} price={product5[3].price} link={product5[3].link}/>
                                                           <Card2 key={product5[4].id} image={product5[4].image} genre={product5[4].genre} name={product5[4].name} discount={product5[4].discount} stroke={product5[4].stroke} price={product5[4].price} link={product5[4].link}/>
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