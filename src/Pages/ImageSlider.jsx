import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from 'framer-motion'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageSlider.css'

import fortNiteReloadImage from '../images/crimsonDesertImage.jpg'
import fortNiteReloadLogo from '../images/crimsonDesertLogo.png'
import fortNiteReloadGrid from '../images/crimsonGridGrid.jpg'
import genshinImage from '../images/egs-out-of-words-flying-carousel-1920x1080-628cc4bda5c8.jpg'
import genshinLogo from '../images/egs-out-of-words-carousel-logo-350x262-bf5990367df3.png'
import genshinGrid from '../images/egs-out-of-words-carousel-thumb-1200x1600-ff9f3a241b40.jpg'
import ffcImage from '../images/epic-savings-desktop-carousel-asset-900f97e5818e.avif'
import ffcLogo from '../images/en-epic-savings-april-carousel-logo-350x221-2d0e8b1a9d6e.png'
import ffcGrid from '../images/en-epic-savings-carousel-thumbnail-1200x1600-3fbef56ae063.jpg'
import ARCImage from '../images/egs-john-carpenters-toxic-commando-carousel-desktop-1920x1080-8f006d060e2c.jpg'
import ARCLogo from '../images/egs-john-carpenters-toxic-commando-carousel-logo-350x282-9beab33d6497.png'
import ARCGrid from '../images/egs-john-carpenters-toxic-commando-carousel-thumb-1200x1600-54afb713dc24.jpg'
import DestinyImage from '../images/egs-fall-guys-crown-jam-carousel-desktop-1920x1080-9c3afd515f8d.jpg'
import DestinyLogo from '../images/egs-fall-guys-crown-jam-carousel-logo-350x251-e069bcd951fc.png'
import DestinyGrid from '../images/egs-fall-guys-crown-jam-carousel-thumb-1200x1600-2ec9ae9e6c7b.jpg'
import CloudheimImage from '../images/1398943.jpg'
import CloudheimLogo from '../images/battle_field_logo.png'
import CloudheimGrid from '../images/battle_field_grid.png'


export const ImageSlider = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/verify', {withCredentials: true})
            if (response.data.success && response.data.user.isVerified) {
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
                navigate('/login')
            }
        } catch (error) {
            console.error(error);
        }
    }

    const paginationData = [

        {image: fortNiteReloadGrid, texts: 'Crimson Desert', link: '/login'},
        {image: genshinGrid, texts: 'Out of Words', link: '/login'},
        {image: ffcGrid, texts: 'Epic Savings', link: '/login'},
        {image: ARCGrid, texts: 'Toxic Commando', link: '/login'},
        {image: DestinyGrid, texts: 'Fall Guys Crown Jam', link: '/login'},
        {image: CloudheimGrid, texts: 'Battlefield 6', link: '/login'}

    ]

    const slideContent = [
        {logo: fortNiteReloadLogo, header: 'AVAILABLE MARCH 19, 2026', text: 'Pre-Purchase Crimson Desert and get the Kliff Outfit in Fortnite at launch.', price: '', image: fortNiteReloadImage, grid: fortNiteReloadGrid},
        {logo: genshinLogo, header: 'COMING 2026', text: "Meet Kurt, Karla and a magical cast of characters as they navigate a crumbling world in a handmade c0-op adventure built for two.", price: 'Free', image: genshinImage, grid: genshinGrid},
        {logo: ffcLogo, header: 'January 22 - December 5', text: 'Save up to 80% on must-play games and discover new adventures.', discount: '-20%', stroke: '$34.99', price: '27.99', image: ffcImage, grid: ffcGrid},
        {logo: ARCLogo, header: 'DEEP DIVE', text: 'How the studio behind SnowRunner and Space Marine 2 melded blood, mud, and John Carpenter to craft an entirely new, horrific adventure.', price: '$24.99', image: ARCImage, grid: ARCGrid},
        {logo: DestinyLogo, header: '3V3 FALL GUYS ARCADE SPORTS', text: 'Jump into Crown Jam - a new 3v3 arcade sport from the Fall Guys universe. Play with your squad, use hype abilities, and dunk your way to glory!', price: 'Free', image: DestinyImage, grid: DestinyGrid},
        {logo: CloudheimLogo, header: 'saving during holiday sale', text: 'Enter the ultimate all out ware-fare experience. Earn 20% back in Epic Rewards with your purchase.', discount: '-10%', stroke: '$13.49', price: '$12.14', image: CloudheimImage, grid: CloudheimGrid}
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    return(
    <>
        <div className="welcome_image_slider">
            <div className="swiper_game_slide">
                <Swiper
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[Pagination, Autoplay, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ 
                    el: '.vertical_pagination',
                    clickable: true, 
                    renderBullet: function (index, className) {
                    return`
                        <div class="${className} custom-bullet">
                            <img src="${paginationData[index].image}" alt="" />
                            <a href="${paginationData[index].link}">${paginationData[index].texts}</a>
                        </div>
                    `
                    },
                }}

                style={{ flex: 1 }}
                speed={1500}
                autoplay={{
                    delay: 8500, // 3 seconds between slides
                    disableOnInteraction: false, // Keep autoplaying after user interaction
                    pauseOnMouseEnter: true, // Optional: pause when hovering
                }}
                loop={true} 
                className='swiper_welcome_slide'
                >
                <SwiperSlide>
                    <div className="swiper_game_content">
                        <div className="swiper_game_content_texts">
                            <div className="swiper_game_content_texts_1">
                                <div className="content_swiper_logo">
                                    <motion.div 
                                    key={activeIndex}
                                    className="content_swiper_logo_1"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}
                                    >
                                        <img src={slideContent[0].logo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="content_swiper_texts">
                                    <div className="text_header">
                                        <h4>{slideContent[0].header}</h4>
                                    </div>

                                    <div className="texts_note">
                                        <p>{slideContent[0].text}</p>
                                    </div>
                                </div>

                                {isAuthenticated ? (
                                    <>
                                        <div className="content_swiper_button">
                                            <button><Link to='/Hello'>Play Now</Link></button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="content_swiper_button">
                                            <button><Link to='/login'>Play Now</Link></button>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>

                        <div className="swiper_game_content_image">
                            <div className="swiper_dark_over"></div>

                            <img src={slideContent[0].image} alt="" />
                        </div>
                    </div>   
                </SwiperSlide>


                <SwiperSlide>
                    <div className="genshin_content">
                        <div className="genshin_text_content">
                            <div className="genshin_text_content_1">
                                <div className="genshin_logo">
                                    <motion.div 
                                    key={activeIndex}
                                    className="genshin_logo_image"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}>
                                        <img src={slideContent[1].logo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="genshin_text_price">
                                    <div className="genshin_text_header">
                                        <h4>{slideContent[1].header}</h4>
                                    </div>

                                    <div className="genshin_text_text">
                                        <div className="genshin_text_text_1">
                                            <p>{slideContent[1].text}</p>
                                        </div>
                                    </div>

                                    <div className="genshin_text_price_">
                                        <h4>{slideContent[1].price}</h4>
                                    </div>
                                </div>

                                {isAuthenticated ? (
                                    <>
                                       <div className="genshin_button">
                                            <div className="genshin_buttons">
                                                <button><Link to='/Hello'>Play Now</Link></button>
                                                <button className='gift_box'>
                                                    <i class="fa-solid fa-gift"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                       <div className="genshin_button">
                                            <div className="genshin_buttons">
                                                <button><Link to='/login'>Play Now</Link></button>
                                                <button className='gift_box'>
                                                    <i class="fa-solid fa-gift"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}

                                
                            </div>
                        </div>

                        <div className="genshin_content_image">
                            <div className="swiper_dark_over"></div>

                            <img src={slideContent[1].image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                     {/* <div className="cloudheim">
                        <div className="cloudheim_content_text">
                            <div className="cloudheim_content_text_1">
                                <div className="cloudheim_logo">
                                    <motion.div
                                    key={activeIndex} 
                                    className="cloudheim_logo_1"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}>
                                        <img src={slideContent[2].logo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="cloudheim_text_text">
                                    <div className="cloudheim_header">
                                        <h4>{slideContent[2].header}</h4>
                                    </div>

                                    <div className="cloudheim_text__">
                                        <div className="cloudheim_text___1">
                                            <p>{slideContent[2].text}</p>
                                        </div>
                                    </div>

                                    <div className="cloudheim_price">
                                        <div className="cloudheim_price_1">
                                            <button>{slideContent[2].discount}</button>
                                            <h4 className='cancel'>{slideContent[2].stroke}<sup>*</sup></h4>
                                            <h4>{slideContent[2].price}</h4>
                                        </div>
                                    </div>
                                </div>

                                {isAuthenticated ? (
                                    <>
                                       <div className="cloudheim_button">
                                            <div className="raider_buttons_1">
                                                <button className='buy_now'><Link to='/Hello'>Buy Now</Link></button>
                                                <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                                <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                       <div className="cloudheim_button">
                                            <div className="raider_buttons_1">
                                                <button className='buy_now'><Link to='/login'>Buy Now</Link></button>
                                                <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                                <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="cloudheim_image_content">
                            <div className="swiper_dark_over"></div>

                            <img src={slideContent[2].image} alt="" />
                        </div>
                    </div> */}

                    <div className="swiper_game_content">
                        <div className="swiper_game_content_texts">
                            <div className="swiper_game_content_texts_1">
                                <div className="content_swiper_logo">
                                    <motion.div 
                                    key={activeIndex}
                                    className="content_swiper_logo_1"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}
                                    >
                                        <img src={slideContent[2].logo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="content_swiper_texts">
                                    <div className="text_header">
                                        <h4>{slideContent[2].header}</h4>
                                    </div>

                                    <div className="texts_note">
                                        <p>{slideContent[2].text}</p>
                                    </div>
                                </div>

                                {isAuthenticated ? (
                                    <>
                                        <div className="content_swiper_button">
                                            <button><Link to='/Hello'>Save Now</Link></button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="content_swiper_button">
                                            <button><Link to='/login'>Save Now</Link></button>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>

                        <div className="swiper_game_content_image">
                            <div className="swiper_dark_over"></div>

                            <img src={slideContent[2].image} alt="" />
                        </div>
                    </div> 
                </SwiperSlide>

                <SwiperSlide>
                    <div className="arc_raiders">
                        <div className="raiders_content_text">
                            <div className="raiders_content_text_1">
                                <div className="raider_logo">
                                    <motion.div
                                    key={activeIndex} 
                                    className="raider_logo_1"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}>
                                        <img src={slideContent[3].logo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="raider_text_content">
                                    <div className="raider_text_content_1">
                                        <div className="raider_header">
                                            <h4>{slideContent[3].header}</h4>
                                        </div>

                                        <div className="raider_text_content__">
                                            <p>{slideContent[3].text}</p>
                                        </div>

                                        <div className="raider_price">
                                            <h4>{slideContent[3].price}</h4>
                                        </div>
                                    </div>
                                </div>

                                

                                {isAuthenticated ? (
                                    <>
                                       <div className="raider_button">
                                            <div className="raider_buttons_1">
                                                <button className='buy_now'><Link to='/Hello'>Buy Now</Link></button>
                                                <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                                <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                       <div className="raider_button">
                                            <div className="raider_buttons_1">
                                                <button className='buy_now'><Link to='/login'>Buy Now</Link></button>
                                                <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                                <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                            </div>
                                        </div>
                                    </>
                                )}

                                
                            </div>
                        </div>

                        <div className="raiders_content_image">
                            <div className="swiper_dark_over"></div>

                            <img src={slideContent[3].image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="arc_raiders">
                        <div className="raiders_content_text">
                            <div className="raiders_content_text_1">
                                <div className="raider_logo">
                                    <motion.div
                                    key={activeIndex} 
                                    className="raider_logo_1"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}>
                                        <img src={slideContent[4].logo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="raider_text_content">
                                    <div className="raider_text_content_1">
                                        <div className="raider_header">
                                            <h4>{slideContent[4].header}</h4>
                                        </div>

                                        <div className="raider_text_content__">
                                            <p>{slideContent[4].text}</p>
                                        </div>

                                        <div className="raider_price">
                                            <h4>{slideContent[4].price}</h4>
                                        </div>
                                    </div>
                                </div>

                                {isAuthenticated ? (
                                    <>
                                       <div className="raider_button">
                                            <div className="raider_buttons_1">
                                                <button className='buy_now'><Link to='/Hello'>Buy Now</Link></button>
                                                <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                                <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                       <div className="raider_button">
                                            <div className="raider_buttons_1">
                                                <button className='buy_now'><Link to='/login'>Buy Now</Link></button>
                                                <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                                <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="raiders_content_image">
                            <div className="swiper_dark_over"></div>

                            <img src={slideContent[4].image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="cloudheim">
                        <div className="cloudheim_content_text">
                            <div className="cloudheim_content_text_1">
                                <div className="cloudheim_logo">
                                    <motion.div
                                    key={activeIndex} 
                                    className="cloudheim_logo_1"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}>
                                        <img src={slideContent[5].logo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="cloudheim_text_text">
                                    <div className="cloudheim_header">
                                        <h4>{slideContent[5].header}</h4>
                                    </div>

                                    <div className="cloudheim_text__">
                                        <div className="cloudheim_text___1">
                                            <p>{slideContent[5].text}</p>
                                        </div>
                                    </div>

                                    <div className="cloudheim_price">
                                        <div className="cloudheim_price_1">
                                            <button>{slideContent[5].discount}</button>
                                            <h4 className='cancel'>{slideContent[5].stroke}<sup>*</sup></h4>
                                            <h4>{slideContent[5].price}</h4>
                                        </div>
                                    </div>
                                </div>

                                {isAuthenticated ? (
                                    <>
                                      <div className="cloudheim_button">
                                            <div className="raider_buttons_1">
                                                <button className='buy_now'><Link to='/Hello'>Buy Now</Link></button>
                                                <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                                <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                       <div className="cloudheim_button">
                                            <div className="raider_buttons_1">
                                                <button className='buy_now'><Link to='/login'>Buy Now</Link></button>
                                                <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                                <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="cloudheim_image_content">
                            <div className="swiper_dark_over"></div>

                            <img src={slideContent[5].image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                ...
                </Swiper>
            </div>

            <div className="swiper_pagination_display">
                <div className="vertical-pagination">
                    <div className="vertical_pagination"></div>
                </div>
            </div>
        </div>
    </>
    )
}