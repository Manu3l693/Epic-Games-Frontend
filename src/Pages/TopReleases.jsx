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

import battlefield1 from '../images/484b32fe2022ee1feb6d4eeccd56a7a9.jpg'
import windsMeet from '../images/5373be3fc629b0f98ca1b669e54c0c17.jpg'
import warFrame from '../images/45713287ba01bb2c9dfa4a9c486e4cc9.jpg'
import starTrek from '../images/cda37cab26a6372f2dfe34fa2330142d.jpg'
import morsel from '../images/0d5e7932c41f5387c3636b106b654c78.jpg'

import blood from '../images/34914c22037b3018314f0abb58adc30f.jpg'
import gigaSword from '../images/2a60bf1e68feb7f48640304c031d831f.jpg'
import callOfDuty from '../images/b0dedfd6d3e8e28e042ca4a1ae95c2ce.jpg'
import mortalKombat from '../images/d1e1fa0779ea7cf1f4fbe2403b99d226.jpg'
import Anno from '../images/44c949fd6c031820079421c414622806.jpg'

import FortFestival from '../images/795ced384fdcad15310b46841a6f145c.jpg'
import Rue from '../images/15bbd419bb68f045fb44dd2c19f6a3f8.jpg'
import SurvivingMars from '../images/e5a194d74d901279d454c1045fadb7e6.jpg'
import PMR from '../images/a09d23f21cbbd4c8117881a300395328.jpg'
import Wallworld2 from '../images/b2e2b368beb84a9e25ddeaa4d195d2ce.jpg'

import beachBuggy from '../images/af0800363614ecbe23595e4dd8ab1b46.jpg'
import pubG from '../images/143dd9abaf25998c46e849b4b74f12d1.jpg'
import letThemCome from '../images/ca1bd3e081bf1c80f71353ec393b2ff8.jpg'
import skyForge from '../images/5ad586f6df5578aa9d86ea3ba0798b17.jpg'
import Mk11 from '../images/215adf1a79e5eda506ca006b1f8caac6.jpg'

import residentEvil from '../images/0e930e049ad09d5fcf473cba3f7b2574.jpg'
import reAnimal from '../images/38847c52741da2c4590ab936fe3cb3dd.jpg'
import FightLight007 from '../images/1d50a96e0e3d7b721de8aafbb246067d.jpg'
import MIO from '../images/ff4bf2b35971ab9136bf25f3419b9029.jpg'
import HOL2 from '../images/4a1078ce981d070a72c248936b468b30.jpg'



export const TopReleases = () => {

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
            {id: 1, image: battlefield1, genre: 'Base Game', name: 'EA SPORTS FC 26 Standard Edition', available: 'Trial Available', discount: '-60%', stroke: '$69.99', price: '$27.99', link: '/login'},
            {id: 2, image: windsMeet,    genre: 'Base Game', name: 'ARC Raiders',                                                    discount: '-20%', stroke: '$39.99', price: '$31.99', link: '/login'},
            {id: 3, image: warFrame,     genre: 'Base Game', name: 'Battlefield 6',                                                  discount: '-30%', stroke: '$69.99', price: '$48.99', link: '/login'},
            {id: 4, image: starTrek,     genre: 'Base Game', name: 'REMATCH',                                                        discount: '-33%', stroke: '$14.99', price: '$10.04', link: '/login'},
            {id: 5, image: morsel,       genre: 'Base Game', name: 'EA SPORTS Madden NFL 26',          available: 'Trial Available', discount: '-60%', stroke: '$69.99', price: '$27.99', link: '/login'},
        ]
    
        const product2 = [
            {id: 1, image: blood,        genre: 'Base Game', name: 'Ready or Not',           discount: '-40%', stroke: '$19.99', price: '$11.99', link: '/login'},
            {id: 2, image: gigaSword,    genre: 'Base Game', name: 'Dying Light: The Beast', discount: '-20%', stroke: '$44.99', price: '$35.99', link: '/login'},
            {id: 3, image: callOfDuty,   genre: 'Base Game', name: 'Football Manager 26',    discount: '-10%', stroke: '$49.99', price: '$44.99', link: '/login'},
            {id: 4, image: mortalKombat, genre: 'Base Game', name: 'Borderlands 4',          discount: '-20%', stroke: '$69.99', price: '$55.99', link: '/login'},
            {id: 5, image: Anno,         genre: 'Base Game', name: 'Stellar Blade',          discount: '-20%', stroke: '$49.99', price: '$39.99', link: '/login'},
        ]
    
        const product3 = [
            {id: 1, image: FortFestival,   genre: 'Base Game', name: 'Dying Light: Essential Edition', discount: '-85%', stroke: '$18.00', price: '$2.70',  link: '/login'},
            {id: 2, image: Rue,            genre: 'Base Game', name: 'Jurassic World Evolution 3',     discount: '-20%', stroke: '$31.99', price: '$25.59', link: '/login'},
            {id: 3, image: SurvivingMars,  genre: 'Base Game', name: 'Anno 117: Pax Romana',           discount: '-10%', stroke: '$59.99', price: '$53.99', link: '/login'},
            {id: 4, image: PMR,            genre: 'Base Game', name: 'Escape from Duckov',             discount: '-12%', stroke: '$12.99', price: '$11.43', link: '/login'},
            {id: 5, image: Wallworld2,     genre: 'Base Game', name: 'PowerWash Simulator 2',          discount: '-15%', stroke: '$9.99',  price: '$8.49',  link: '/login'},
        ]
    
        const product4 = [
            {id: 1, image: beachBuggy,  genre: 'Base Game', name: 'Titan Quest II',                         discount: '-20%', stroke: '$17.99', price: '$14.39', link: '/login'},
            {id: 2, image: pubG,        genre: 'Base Game', name: 'Vampire: The Masquerade - Bloodlines 2', discount: '-20%', stroke: '$35.99', price: '$28.79', link: '/login'},
            {id: 3, image: letThemCome, genre: 'Base Game', name: 'Terminator 2D: NO FATE',                                                     price: '$11.99', link: '/login'},
            {id: 4, image: skyForge,    genre: 'Base Game', name: 'The Last Caretaker',                     discount: '-15%', stroke: '$14.49', price: '$12.31', link: '/login'},
            {id: 5, image: Mk11,        genre: 'Base Game', name: 'Cronos: The New Dawn',                   discount: '-25%', stroke: '$23.99', price: '$17.99', link: '/login'},
        ]
    
        const product5 = [
            {id: 1, image: residentEvil,  genre: 'Base Game', name: 'Cronos: The New Dawn',           discount: '-25%', stroke: '$23.99', price: '$17.99', link: '/login'},
            {id: 2, image: reAnimal,      genre: 'Base Game', name: 'ARK: Survival Ascended',                                             price: '$44.99', link: '/login'},
            {id: 3, image: FightLight007, genre: 'Base Game', name: 'DAVE THE DIVER',                 discount: '-45%', stroke: '$12.99', price: '$7.14',  link: '/login'},
            {id: 4, image: MIO,           genre: 'Base Game', name: 'Plants vs. Zombies : Replanted', discount: '-20%', stroke: '$19.99', price: '$15.99', link: '/login'},
            {id: 5, image: HOL2,          genre: 'Base Game', name: 'Fortnite',                                                           price: '$13.49', link: '/login'},
        ]

    return(
        <>
           <div className="discoverr_content">
                           <div className="discover_something_new">
                               <div className="discover_something_new_1">
                                   <div className="discover_something_new_header">
                                      <Link to='/login'> Top New Releases <i class="fa-solid fa-greater-than"></i> </Link> 
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
                                                          <Card6 key={product1[0].id} image={product1[0].image} genre={product1[0].genre} name={product1[0].name} available={product1[0].available} discount={product1[0].discount} stroke={product1[0].stroke} price={product1[0].price} link={product1[0].link}/>
                                                          <Card2 key={product1[1].id} image={product1[1].image} genre={product1[1].genre} name={product1[1].name} discount={product1[1].discount} stroke={product1[1].stroke} price={product1[1].price} link={product1[1].link}/>
                                                          <Card2 key={product1[2].id} image={product1[2].image} genre={product1[2].genre} name={product1[2].name} discount={product1[2].discount} stroke={product1[2].stroke} price={product1[2].price} link={product1[2].link}/>
                                                          <Card2 key={product1[3].id} image={product1[3].image} genre={product1[3].genre} name={product1[3].name} discount={product1[3].discount} stroke={product1[3].stroke} price={product1[3].price} link={product1[3].link}/>
                                                          <Card6 key={product1[4].id} image={product1[4].image} genre={product1[4].genre} name={product1[4].name} available={product1[4].available} discount={product1[4].discount} stroke={product1[4].stroke} price={product1[4].price} link={product1[4].link}/>
                                                       </div>
                                                   </SwiperSlide>
           
                                                   <SwiperSlide>
                                                       <div className="swiper_items_">
                                                           {product2.map((product) => 
                                                                <Card2
                                                                    key={product.id}
                                                                    image={product.image}
                                                                    genre={product.genre}
                                                                    name={product.name}
                                                                    discount={product.discount}
                                                                    stroke={product.stroke}
                                                                    price={product.price}
                                                                    link={product.link}
                                                                 />
                                                        )}
                                                       </div>
                                                   </SwiperSlide>
           
                                                   <SwiperSlide>
                                                       <div className="swiper_items_">
                                                           {product3.map((product) => 
                                                                <Card2
                                                                    key={product.id}
                                                                    image={product.image}
                                                                    genre={product.genre}
                                                                    name={product.name}
                                                                    discount={product.discount}
                                                                    stroke={product.stroke}
                                                                    price={product.price}
                                                                    link={product.link}
                                                                 />
                                                        )}
                                                       </div>
                                                   </SwiperSlide>
           
                                                   <SwiperSlide>
                                                       <div className="swiper_items_">
                                                           <Card2 key={product4[0].id} image={product4[0].image} genre={product4[0].genre} name={product4[0].name} discount={product4[0].discount} stroke={product4[0].stroke} price={product4[0].price} link={product4[0].link}/>   
                                                           <Card2 key={product4[1].id} image={product4[1].image} genre={product4[1].genre} name={product4[1].name} discount={product4[1].discount} stroke={product4[1].stroke} price={product4[1].price} link={product4[1].link}/>                                                        
                                                           <Card1 key={product4[2].id} image={product4[2].image} genre={product4[2].genre} name={product4[2].name} price={product4[2].price} link={product4[2].link}/>
                                                           <Card2 key={product4[3].id} image={product4[3].image} genre={product4[3].genre} name={product4[3].name} discount={product4[3].discount} stroke={product4[3].stroke} price={product4[3].price} link={product4[3].link}/>
                                                           <Card2 key={product4[4].id} image={product4[4].image} genre={product4[4].genre} name={product4[4].name} discount={product4[4].discount} stroke={product4[0].stroke} price={product4[4].price} link={product4[4].link}/>
                                                       </div>
                                                   </SwiperSlide>
           
                                                   <SwiperSlide>
                                                       <div className="swiper_items_">
                                                           <Card2 key={product5[0].id} image={product5[0].image} genre={product5[0].genre} name={product5[0].name} discount={product5[0].discount} stroke={product5[0].stroke} price={product5[0].price} link={product5[0].link}/>
                                                           <Card1 key={product5[1].id} image={product5[1].image} genre={product5[1].genre} name={product5[1].name} price={product5[1].price} link={product5[1].link}/>
                                                           <Card2 key={product5[2].id} image={product5[2].image} genre={product5[2].genre} name={product5[2].name} discount={product5[2].discount} stroke={product5[2].stroke} price={product5[2].price} link={product5[2].link}/>
                                                           <Card2 key={product5[3].id} image={product5[3].image} genre={product5[3].genre} name={product5[3].name} discount={product5[3].discount} stroke={product5[3].stroke} price={product5[3].price} link={product5[3].link}/>
                                                           <Card1 key={product5[4].id} image={product5[4].image} genre={product5[4].genre} name={product5[4].name} price={product5[4].price} link={product5[4].link}/>
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