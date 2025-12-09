
import { Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ImageSlider.css'

import fortNiteReloadImage from '../images/fortnite_reload_image.jpg'
import genshinImage from '../images/1317101.jpeg'
import ffcImage from '../images/fortnite_sparking_outfit.jpg'
import ARCImage from '../images/1401751.jpg'
import DestinyImage from '../images/destiny_2_renegades.jpg'
import CloudheimImage from '../images/cloudheim_image.jpg'

export const ImageSlider = () => {

    const paginationData = [

        {image: fortNiteReloadImage, texts: 'Fortnite Reload', link: ''},
        {image: genshinImage, texts: 'Genshin Impact', link: ''},
        {image: ffcImage, texts: 'Fortnite FFC', link: ''},
        {image: ARCImage, texts: 'ARC Raiders', link: ''},
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
                spaceBetween={50}
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
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
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