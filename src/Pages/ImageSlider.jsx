import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from 'framer-motion'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageSlider.css'

import fortNiteReloadImage from '../images/1326038.jpeg'
import fortNiteReloadLogo from '../images/fortnite_reload_logo.png'
import fortNiteReloadGrid from '../images/fortnite_reload_grid.jpg'
import genshinImage from '../images/1242486.jpg'
import genshinLogo from '../images/genshin_impact_logo.png'
import genshinGrid from '../images/genshin_impact_grid.jpg'
import ffcImage from '../images/1393355.jpg'
import ffcLogo from '../images/ffc_logo.png'
import ffcGrid from '../images/ffc_grid.jpg'
import ARCImage from '../images/1401751.jpg'
import ARCLogo from '../images/arc_raiders_logo.png'
import ARCGrid from '../images/arc_grid.jpg'
import DestinyImage from '../images/destiny_2_renegades.jpg'
import DestinyLogo from '../images/destiny_2_logo.png'
import DestinyGrid from '../images/Destiny_Grid.jpg'
import CloudheimImage from '../images/cloudheim_image.jpg'
import CloudheimLogo from '../images/cloudheim_logo.png'
import CloudheimGrid from '../images/cloudheim_grid.webp'

export const ImageSlider = () => {

    const paginationData = [

        {image: fortNiteReloadGrid, texts: 'Fortnite Reload', link: ''},
        {image: genshinGrid, texts: 'Genshin Impact', link: ''},
        {image: ffcGrid, texts: 'Fortnite FFC', link: ''},
        {image: ARCGrid, texts: 'ARC Raiders', link: ''},
        {image: DestinyGrid, texts: 'Destiny 2', link: ''},
        {image: CloudheimGrid, texts: 'Cloudheim', link: ''}

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
                                        <img src={fortNiteReloadLogo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="content_swiper_texts">
                                    <div className="text_header">
                                        <h4>out now</h4>
                                    </div>

                                    <div className="texts_note">
                                        <p>Reload is back with the new Surf City map!</p>
                                    </div>
                                </div>

                                <div className="content_swiper_button">
                                    <button><Link to='/login'>Play Now</Link></button>
                                </div>
                            </div>
                        </div>

                        <div className="swiper_game_content_image">
                            <img src={fortNiteReloadImage} alt="" />
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
                                        <img src={genshinLogo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="genshin_text_price">
                                    <div className="genshin_text_header">
                                        <h4>new update!</h4>
                                    </div>

                                    <div className="genshin_text_text">
                                        <div className="genshin_text_text_1">
                                            <p>Genshin Impact Version Luna "III" introduces Durin a dragon with dual forms, and continues the story of Nod-Krai into its next chapter.  </p>
                                        </div>
                                    </div>

                                    <div className="genshin_text_price_">
                                        <h4>Free</h4>
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
                            <img src={genshinImage} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                     <div className="ffc_content">
                        <div className="ffc_text_content">
                            <div className="ffc_text_content_1">
                                <div className="ffc_logo">
                                    <motion.div
                                    key={activeIndex}
                                    className="ffc_logo_1"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}>
                                        <img src={ffcLogo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="ffc_content_text">
                                    <div className="ffc_content_header">
                                        <h4>available now</h4>
                                    </div>

                                    <div className="ffc_text_text">
                                       <div className="ffc_text_text_1">
                                         <p>Geta an Outfit in Fortnite when you buy EA SPORTS FC <sup>TM</sup> 26, REMATCH, or Football Manager 26 now until August 8, 2026.</p>
                                       </div>
                                    </div>
                                </div>

                                <div className="ffc_button">
                                    <button><Link to='/login'>Learn More</Link></button>
                                </div>
                            </div>
                        </div>

                        <div className="ffc_image_content">
                            <img src={ffcImage} alt="" />
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
                                        <img src={ARCLogo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="raider_text_content">
                                    <div className="raider_text_content_1">
                                        <div className="raider_header">
                                            <h4>the surface is calling; your adventure starts now</h4>
                                        </div>

                                        <div className="raider_text_content__">
                                            <p>Survival is an option, but thriving? That takes courage. Are you ready to build a new home in the ruins?</p>
                                        </div>

                                        <div className="raider_price">
                                            <h4>$39.99</h4>
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
                            <img src={ARCImage} alt="" />
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
                                        <img src={DestinyLogo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="raider_text_content">
                                    <div className="raider_text_content_1">
                                        <div className="raider_header">
                                            <h4>Out now</h4>
                                        </div>

                                        <div className="raider_text_content__">
                                            <p>Rule the Lawless Frontier. Navigate a world of Syndicates and become the force that tips the balance.</p>
                                        </div>

                                        <div className="raider_price">
                                            <h4>$35.99</h4>
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
                            <img src={DestinyImage} alt="" />
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
                                        <img src={CloudheimLogo} alt="" />
                                    </motion.div>
                                </div>

                                <div className="cloudheim_text_text">
                                    <div className="cloudheim_header">
                                        <h4>early access available now</h4>
                                    </div>

                                    <div className="cloudheim_text__">
                                        <div className="cloudheim_text___1">
                                            <p>Team up in chaotic co-op combat, craft powerful gear, and restore a shattered realm in Cloudheim, out now!</p>
                                        </div>
                                    </div>

                                    <div className="cloudheim_price">
                                        <div className="cloudheim_price_1">
                                            <button>-10%</button>
                                            <h4 className='cancel'>$13.49<sup>*</sup></h4>
                                            <h4>$12.14</h4>
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
                            <img src={CloudheimImage} alt="" />
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