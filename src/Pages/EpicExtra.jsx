import { useRef, useState, useEffect } from 'react';
import axios from 'axios'

import {Link, useNavigate} from 'react-router-dom'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './DiscoverSlide.css'

import { Card1 } from './card1';


import battlefield1 from '../images/3574_1.avif'
import windsMeet from '../images/FallGuys_1200x16001_1200x1600-db62c1e38d1b48fa9ed47b3ca14b1d87.png'
import warFrame from '../images/EGS_TriTrimCrimsonForestGreenWheels_PsyonixLLC_DLC_S2_1200x1600-efd35cdab8f68d0b9ad0dcaa7318ddf5.avif'
import starTrek from '../images/images (6).jpg'
import morsel from '../images/infinity-nikki-16cyh (1).avif'

import blood from '../images/idle-champions-of-the-forgotten-realms-1jtvh.png'
import gigaSword from '../images/firestone-online-idle-rpg-1rfax (1).png'
import callOfDuty from '../images/images (3).jpg'
import mortalKombat from '../images/asphalt-legends-1k1on.avif'
import Anno from '../images/Smite2_1200x1600_1200x1600-ee1d7942bec847c6bc9489f85bbba6b7.avif'

import FortFestival from '../images/asphalt-legends-1k1on.avif'
import Rue from '../images/Smite2_1200x1600_1200x1600-ee1d7942bec847c6bc9489f85bbba6b7.avif'
import SurvivingMars from '../images/images (4).jpg'
import PMR from '../images/images (5).jpg'
import Wallworld2 from '../images/neverwinter-1y2gv.png'

    


export const EpicExtra = () => {
        const [isAuthenticated, setIsAuthenticated] = useState(false)
        const navigate = useNavigate()

        useEffect(()=>{
            checkAuth()
        },[])

        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/verify', {withCredentials: true})
                if(response.data.success && response.data.user.isVerified){
                    setIsAuthenticated(true)
                } else{
                    setIsAuthenticated(false)
                    navigate('/login')
                }
            } catch (error) {
                console.error(error)
            }
        }
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
            {id: 1, image: battlefield1, genre: 'Add-On', name: 'Hollypaw Wrap', price: 'Free', link: '/Hello'},
            {id: 2, image: windsMeet, genre: 'Add-On', name: 'Fall Guys - Fashionably Frosty', price: 'Free', link: '/Hello'},
            {id: 3, image: warFrame, genre: 'Add-On', name: "Rocket League - TriTrim Crimson & Forest Green Wheels", price: 'Free', link: '/Hello'},
            {id: 4, image: starTrek, genre: 'Add-On', name: 'Discord Nitro', price: 'Free', link: '/Hello'},
            {id: 5, image: morsel, genre: 'Add-On', name: 'Infinity Nikki - Epic Extras Bundle', price: 'Free', link: '/Hello'},
        ]
    
        const product2 = [
            {id: 1, image: blood, genre: 'Add-On', name: 'Cozy Dark Urge Party Pack', price: 'Free', link: '/Hello'},
            {id: 2, image: gigaSword, genre: 'Add-On', name: 'Firestone Christmas Giveaway', price: 'Free', link: '/Hello'},
            {id: 3, image: callOfDuty, genre: 'Add-On', name: "Worlld of Warships - Mikasas Pack", price: 'Free', link: '/Hello'},
            {id: 4, image: mortalKombat, genre: 'Add-On', name: 'Asphalt Legends -- Decal Pack', price: 'Free', link: '/Hello'},
            {id: 5, image: Anno, genre: 'Add-On', name: 'SMITE 2 Gingersnap Bundle', price: 'Free', link: '/Hello'},
        ]
    
        const product3 = [
            {id: 1, image: FortFestival, genre: 'Add-On', name: 'Asphalt Legends -- Decal Pack', price: 'Free', link: '/Hello'},
            {id: 2, image: Rue, genre: 'Add-On', name: 'SMITE 2 Gingersnap Bundle', price: 'Free', link: '/Hello'},
            {id: 3, image: SurvivingMars, genre: 'Add-On', name: "Monochromatic Pack -- Racer Jack Skellington", price: 'Free', link: '/Hello'},
            {id: 4, image: PMR, genre: 'Add-On', name: 'Epic Starter Pack Bundle', price: 'Free', link: '/Hello'},
            {id: 5, image: Wallworld2, genre: 'Add-On', name: 'Legends Starter Pack', price: 'Free', link: '/Hello'},
        ]
    
        

    return(
        <>
          <div className="discoverr_content">
                <div className="discover_something_new">
                    <div className="discover_something_new_1">
                        <div className="discover_something_new_header">
                           {isAuthenticated ? (
                            <>
                                <Link to='/Hello'> Epic Extras <i class="fa-solid fa-greater-than"></i> </Link> 
                            </>
                           ) : (
                            <>
                                <Link to='/login'> Epic Extras <i class="fa-solid fa-greater-than"></i> </Link> 
                            </>
                           )}
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
                                                {isAuthenticated ? (
                                                    <>
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
                                                    </>
                                                ) : (
                                                    <>
                                                        {product1.map((product) => 
                                                            <Card1
                                                                key={product.id} 
                                                                image={product.image}
                                                                genre={product.genre}
                                                                name={product.name}
                                                                price={product.price}
                                                                link='/login'
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                               {isAuthenticated ? (
                                                <>
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
                                                </>
                                               ) : (
                                                <>
                                                    {product2.map((product) => 
                                                        <Card1
                                                            key={product.id} 
                                                            image={product.image}
                                                            genre={product.genre}
                                                            name={product.name}
                                                            price={product.price}
                                                            link='/login'
                                                        />
                                                    )}
                                                </>
                                               )}
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="swiper_items_">
                                                {isAuthenticated ? (
                                                    <>
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
                                                    </>
                                                ) : (
                                                    <>
                                                        {product3.map((prod3)=>
                                                            <Card1 
                                                                key={prod3.id}
                                                                image={prod3.image}
                                                                genre={prod3.genre}
                                                                name={prod3.name}
                                                                price={prod3.price}
                                                                link='/login'
                                                            />
                                                        )}
                                                    </>
                                                )}
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