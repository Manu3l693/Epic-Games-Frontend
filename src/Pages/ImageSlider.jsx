
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
import CloudheimImage from '../images/cloudheim_image.jpg'

export const ImageSlider = () => {

    const paginationData = [

        {image: fortNiteReloadGrid, texts: 'Fortnite Reload', link: ''},
        {image: genshinGrid, texts: 'Genshin Impact', link: ''},
        {image: ffcGrid, texts: 'Fortnite FFC', link: ''},
        {image: ARCGrid, texts: 'ARC Raiders', link: ''},
        {image: DestinyImage, texts: 'Destiny 2', link: ''},
        {image: CloudheimImage, texts: 'Cloudheim', link: ''}

    ]

    return(
    <>
        <div className="welcome_image_slider">
            <div className="swiper_game_slide">
                <Swiper
                      // install Swiper modules
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
                                    <div className="content_swiper_logo_1">
                                        <img src={fortNiteReloadLogo} alt="" />
                                    </div>
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
                                    <button>Play Now</button>
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
                                    <div className="genshin_logo_image">
                                        <img src={genshinLogo} alt="" />
                                    </div>
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
                                        <button>Play Now</button>
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
                                    <div className="ffc_logo_1">
                                        <img src={ffcLogo} alt="" />
                                    </div>
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
                                    <button>Learn More</button>
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
                                    <div className="raider_logo_1">
                                        <img src={ARCLogo} alt="" />
                                    </div>
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
                                        <button className='buy_now'>Buy Now</button>
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

                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
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