import { useRef, useState } from 'react';

import {Link} from 'react-router-dom'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './DiscoverSlide.css'

import { Card1 } from './card1';
import { Card2 } from './card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import { Card5 } from './Card5';

import battlefield1 from '../images/53b5414cbfb407b69cd9be52e13bdbfc.png'
import windsMeet from '../images/da530d299f2943bc6f4c04561c070211.jpg'
import warFrame from '../images/04766957db82a24eaa3006fb015798ba.jpg'
import starTrek from '../images/1ecb86c96dd62c982d40d0699fc5a156.jpg'
import morsel from '../images/2bf04805627201d2ed064f6088f9d015.jpg'

import blood from '../images/32751f52654697daf3d49e70b33d268f.jpg'
import gigaSword from '../images/6901d0c35b5fca947ac0ff3ea00cb5cf.jpg'
import callOfDuty from '../images/b957751db194263b45870b90428ed7e2.jpg'
import mortalKombat from '../images/1e28440d870f64d6fdd8b8bb37e33021.jpg'
import Anno from '../images/7777ffbe9342bfc121b5572b3713c75b.png'

import FortFestival from '../images/bda86ed98b4ef87760d1c06e916e21f5.jpg'
import Rue from '../images/ddf73e9af367500413fbaf825deb6ac0.jpg'
import SurvivingMars from '../images/d8ac40b7f8a4f23088d43a290c25b537.jpg'
import PMR from '../images/60430e7c14ee874f2e8710964a82541e.jpg'
import Wallworld2 from '../images/8a7d1ddf223dfe543541cab2679bd803.jpg'

import beachBuggy from '../images/23b842523634f21fb6f878244ad6d3d5.jpg'
import pubG from '../images/be920d11c22b3c79ecbab23d85f75358.jpg'
import letThemCome from '../images/0492a6baa01ff81dce8c8c1d065db630.jpg'
import skyForge from '../images/4f6ee9f0bc336ac44666f1c082705b43.jpg'
import Mk11 from '../images/6ccdf20ecd61d591ced28db9240afcd6.jpg'

import residentEvil from '../images/cc6e7d0c4f62a13d5a51b8fe38b8be28.jpg'
import reAnimal from '../images/8ab6e1e5c727c228f62b85685960ef2b.jpg'
import FightLight007 from '../images/4839c50608c9df5a61b8ed2632e8e107.jpg'
import MIO from '../images/5d87e5849e22e2a6d393fcc93e5ac684.jpg'
import HOL2 from '../images/056e66b9ea7e248d6b9655223b45d5f0.jpg'


export const DiscoverSlide = () => {

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
        {id: 1, image: battlefield1, genre: 'Base Game', name: 'Battlefield 6', price: '$69.99', link: '/login'},
        {id: 2, image: windsMeet, genre: 'Base Game', name: 'Where winds meet', price: 'Free', link: '/login'},
        {id: 3, image: warFrame, genre: 'Base Game', name: "Warframe", price: 'Free', link: '/login'},
        {id: 4, image: starTrek, genre: 'Base Game', name: 'Star Trek Online', price: 'Free', link: '/login'},
        {id: 5, image: morsel, genre: 'Base Game', name: 'Morsels', price: '$7.49', link: '/login'},
    ]

    const product2 = [
        {id: 1, image: blood, genre: 'Base Game', name: 'Blood: Refreshed Supply', price: '$11.99', link: '/login'},
        {id: 2, image: gigaSword, genre: 'Base Game', name: 'GIGASWORD', price: '$5.59', link: '/login'},
        {id: 3, image: callOfDuty, genre: 'Base Game', name: 'Call Of Duty', price: '$16.99', link: '/login'},
        {id: 4, image: mortalKombat, genre: 'Base Game', name: 'Mortal Kombat', discount: '-10%', stroke: '$13.49', price: '$12.14', link: '/login'},
        {id: 5, image: Anno, genre: 'Base Game', name: 'Anno 117: Pax Romana', discount: '-10%', stroke: '$59.99', price: '$53.99', link: '/login'},
    ]

    const product3 = [
        {id: 1, image: FortFestival, genre: 'Base Game', name: 'Fortnite: Absolute Doom', price: '$10.99', link: '/login'},
        {id: 2, image: Rue, genre: 'Base Game', name: 'Rue Valley', price: '$11.99', link: '/login'},
        {id: 3, image: SurvivingMars, genre: 'Base Game', name: 'Surviving Mars: Relaunched', price: '$23.99', link: '/login'},
        {id: 4, image: PMR, genre: 'Base Game', name: 'Project Motor Racing', price: '$39.99', link: '/login'},
        {id: 5, image: Wallworld2, genre: 'Base Game', name: 'Wall World 2', price: '$6.59', link: '/login'},
    ]

    const product4 = [
        {id: 1, image: beachBuggy, genre: 'Base Game', name: 'Beach Buggy Racing', price: '$5.99', link: '/login'},
        {id: 2, image: pubG, genre: 'Base Game', name: 'Pub G', price: '$7.99', link: '/login'},
        {id: 3, image: letThemCome, genre: 'Base Game', name: 'Let Them Come', price: '$3.59', link: '/login'},
        {id: 4, image: skyForge, genre: 'Base Game', name: 'Sky Forge', available: 'Available 2026', link: '/login'},
        {id: 5, image: Mk11, genre: 'Base Game', name: 'Mortal Kombat 11', available: 'Available 2026', link: '/login'},
    ]

    const product5 = [
        {id: 1, image: residentEvil, genre: 'Base Game', name: 'Resident Evil Requiem', available: 'Available 02/27/26', price: '$52.49', link: '/login'},
        {id: 2, image: reAnimal, genre: 'Base Game', name: 'REANIMAL', available: 'Available 02/13/26', price: '$18.99', link: '/login'},
        {id: 3, image: FightLight007, genre: 'Base Game', name: '007 First Light', available: 'Available 03/27/26', price: '$39.99', link: '/login'},
        {id: 4, image: MIO, genre: 'Base Game', name: 'MIO: Memories in Orbit', available: 'Available 01/20/26', discount: '-10%', stroke: '$13.99', price: '$12.59', link: '/login'},
        {id: 5, image: HOL2, genre: 'Base Game', name: 'Hight On Life 2', available: 'Available 02/13/26', price: '$26.59', link: '/login'},
    ]


    return(
        <>
            <div className="discoverr_content">
                <div className="discover_something_new">
                    <div className="discover_something_new_1">
                        <div className="discover_something_new_header">
                           <Link to='/login'> Discover Something New <i class="fa-solid fa-greater-than"></i> </Link> 
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
                                                <Card1 key={product2[0].id} image={product2[0].image} genre={product2[0].genre} name={product2[0].name} price={product2[0].price} link={product2[0].link} />
                                                <Card1 key={product2[1].id} image={product2[1].image} genre={product2[1].genre} name={product2[1].name} price={product2[1].price} link={product2[1].link} />
                                                <Card1 key={product2[2].id} image={product2[2].image} genre={product2[2].genre} name={product2[2].name} price={product2[2].price} link={product2[2].link} />
                                                <Card2 key={product2[3].id} image={product2[3].image} genre={product2[3].genre} name={product2[3].name} discount={product2[3].discount} stroke={product2[3].stroke} price={product2[3].price} link={product2[3].link}/>
                                                <Card2 key={product2[4].id} image={product2[4].image} genre={product2[4].genre} name={product2[4].name} discount={product2[4].discount} stroke={product2[4].stroke} price={product2[4].price} link={product2[4].link}/>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                {product3.map((prod3)=>
                                                    <Card1 
                                                        key={prod3.id}
                                                        image={prod3.image}
                                                        genre={prod3.genre}
                                                        name={prod3.name}
                                                        price={prod3.price}
                                                        link={prod3.link}
                                                    />
                                                )}
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                <Card1 key={product4[0].id} image={product4[0].image} genre={product4[0].genre} name={product4[0].name} price={product4[0].price} link={product4[0].link} />
                                                <Card1 key={product4[1].id} image={product4[1].image} genre={product4[1].genre} name={product4[1].name} price={product4[1].price} link={product4[1].link} />
                                                <Card1 key={product4[2].id} image={product4[2].image} genre={product4[2].genre} name={product4[2].name} price={product4[2].price} link={product4[2].link} />
                                                <Card3 key={product4[3].id} image={product4[3].image} genre={product4[3].genre} name={product4[3].name} available={product4[3].available} link={product4[3].link}/>
                                                <Card3 key={product4[4].id} image={product4[4].image} genre={product4[4].genre} name={product4[4].name} available={product4[4].available} link={product4[4].link}/>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                <Card5 key={product5[0].id} image={product5[0].image} genre={product5[0].genre} name={product5[0].name} available={product5[0].available} price={product5[0].price} link={product5[0].link}/>
                                                <Card5 key={product5[1].id} image={product5[1].image} genre={product5[1].genre} name={product5[1].name} available={product5[1].available} price={product5[1].price} link={product5[1].link}/>
                                                <Card5 key={product5[2].id} image={product5[2].image} genre={product5[2].genre} name={product5[2].name} available={product5[2].available} price={product5[2].price} link={product5[2].link}/>
                                                <Card4 key={product5[3].id} image={product5[3].image} genre={product5[3].genre} name={product5[3].name} available={product5[3].available} discount={product5[3].discount} stroke={product5[3].stroke} price={product5[3].price} link={product5[3].link}/>
                                                <Card5 key={product5[4].id} image={product5[4].image} genre={product5[4].genre} name={product5[4].name} available={product5[4].available} price={product5[4].price} link={product5[4].link}/>
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