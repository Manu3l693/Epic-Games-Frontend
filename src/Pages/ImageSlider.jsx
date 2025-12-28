import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from 'framer-motion'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageSlider.css'

import fortNiteReloadImage from '../images/1373237.jpeg'
import fortNiteReloadLogo from '../images/fortnite_reload_logo.png'
import fortNiteReloadGrid from '../images/fortnite_reload_grid.png'
import genshinImage from '../images/1242486.jpg'
import genshinLogo from '../images/genshin_impact_logo.png'
import genshinGrid from '../images/genshin_impact_grid.jpg'
import ffcImage from '../images/1366758.jpeg'
import ffcLogo from '../images/Expedition_logo.png'
import ffcGrid from '../images/Expedition_grid.jpg'
import ARCImage from '../images/1401751.jpg'
import ARCLogo from '../images/arc_raiders_logo.png'
import ARCGrid from '../images/arc_grid.jpg'
import DestinyImage from '../images/1399403.jpg'
import DestinyLogo from '../images/destiny_2_logo.png'
import DestinyGrid from '../images/Destiny_Grid.jpg'
import CloudheimImage from '../images/1398943.jpg'
import CloudheimLogo from '../images/battle_field_logo.png'
import CloudheimGrid from '../images/battle_field_grid.png'

export const ImageSlider = () => {

    const paginationData = [

        {image: fortNiteReloadGrid, texts: 'Fortnite Reload', link: '/login'},
        {image: genshinGrid, texts: 'Genshin Impact', link: '/login'},
        {image: ffcGrid, texts: 'Expedition 33', link: '/login'},
        {image: ARCGrid, texts: 'ARC Raiders', link: '/login'},
        {image: DestinyGrid, texts: 'Destiny 2', link: '/login'},
        {image: CloudheimGrid, texts: 'Battlefield 6', link: '/login'}

    ]

    const slideContent = [
        {logo: fortNiteReloadLogo, header: 'out now', text: 'Reload is back with the new Surf City map!', price: '', image: fortNiteReloadImage, grid: fortNiteReloadGrid},
        {logo: genshinLogo, header: 'new update!', text: 'Genshin Impact Version Luna "III" introduces Durin a dragon with dual forms, and continues the story of Nod-Krai into its next chapter.', price: 'Free', image: genshinImage, grid: genshinGrid},
        {logo: ffcLogo, header: 'available now', text: 'Join Expedition 33 on their mission to destroy th paintress in this innovative reactive turn-based RPG.', discount: '-20%', stroke: '$34.99', price: '27.99', image: ffcImage, grid: ffcGrid},
        {logo: ARCLogo, header: 'the surface is calling; your adventure starts now', text: 'Survival is an option, but thriving? That takes courage. Are you ready to build a new home in the ruins?', price: '$39.99', image: ARCImage, grid: ARCGrid},
        {logo: DestinyLogo, header: 'Out now', text: 'Rule the Lawless Frontier. Navigate a world of Syndicates and become the force that tips the balance.', price: '$35.99', image: DestinyImage, grid: DestinyGrid},
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
                    return `
                        <div class="${className} custom-bullet">
                            <img src="${paginationData[index].image}" alt="" />
                            <a href="${paginationData[index].link}">${paginationData[index].texts}</a>
                        </div>
                    `;
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

                                <div className="content_swiper_button">
                                    <button><Link to='/login'>Play Now</Link></button>
                                </div>
                            </div>
                        </div>

                        <div className="swiper_game_content_image">
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

                                <div className="genshin_button">
                                    <div className="genshin_buttons">
                                        <button><Link to='/login'>Play Now</Link></button>
                                        <button className='gift_box'>
                                            <i class="fa-solid fa-gift"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="genshin_content_image">
                            <img src={slideContent[1].image} alt="" />
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

                                <div className="cloudheim_button">
                                    <div className="raider_buttons_1">
                                        <button className='buy_now'><Link to='/login'>Buy Now</Link></button>
                                        <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                        <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cloudheim_image_content">
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

                                <div className="raider_button">
                                    <div className="raider_buttons_1">
                                        <button className='buy_now'><Link to='/login'>Buy Now</Link></button>
                                        <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                        <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="raiders_content_image">
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

                                <div className="raider_button">
                                    <div className="raider_buttons_1">
                                        <button className='buy_now'><Link to='/login'>Buy Now</Link></button>
                                        <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                        <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="raiders_content_image">
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

                                <div className="cloudheim_button">
                                    <div className="raider_buttons_1">
                                        <button className='buy_now'><Link to='/login'>Buy Now</Link></button>
                                        <button className='gift-box'><i class="fa-solid fa-gift"></i></button>
                                        <button className='bookmark'><i class="fa-regular fa-bookmark"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cloudheim_image_content">
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