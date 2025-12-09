import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Nav1.css'

import ecpicLogo from '../images/Video-Game-Logo-Xbox-1--Streamline-Ultimate.png'
import fortniteIcon from '../images/download.png'
import rocketIcon from '../images/Android--Streamline-Simple-Icons.svg'
import fallGuy from '../images/download (3).png'
import epicGamesIcon from '../images/Epicgames--Streamline-Simple-Icons.svg'
import alienWareIcon from '../images/Alienware--Streamline-Simple-Icons.svg'
import sketchFabIcon from '../images/Sketchfab--Streamline-Simple-Icons.svg'
import artStationIcon from '../images/Artstation--Streamline-Simple-Icons.svg'
import unrealEngineIcon from '../images/Unrealengine--Streamline-Simple-Icons.svg'
import steamIcon from '../images/Steam--Streamline-Simple-Icons.svg'
import twimMotionIcon from '../images/Twinmotion--Streamline-Simple-Icons.svg'
import apachecordovaIcon from '../images/Apachecordova--Streamline-Simple-Icons.svg'
import asepriteIcon from '../images/Aseprite--Streamline-Simple-Icons.svg'
import concourseIcon from '../images/Concourse--Streamline-Simple-Icons.svg'
import dcEntIcon from '../images/Dcentertainment--Streamline-Simple-Icons.svg'
import drizzleIcon from '../images/Drizzle--Streamline-Simple-Icons.svg'

export const NavigationOne = () => {

    const [arrow, setArrow] = useState("fa-solid fa-arrow-down")
    const [display, setDisplay] = useState('none')
    const [disDisplay, setDisDisplay] = useState('none')
    const [disArrow, setDisArrow] = useState("fa-solid fa-arrow-down")

    const handleHoverLogo = () => {
        setArrow(arr  =>  arr === "fa-solid fa-arrow-down" ? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down")
        setDisplay(dis => dis === 'none' ? 'block' : 'none')
    }
    const handleMouseHoverDropdown = () => {
        setDisplay('block')
    }
    const handleMouseLeaveDropdown = () => {
        setDisplay('none')
        setArrow("fa-solid fa-arrow-down")
    }

    const handleDisArrowHover = () => {
        setDisArrow(strd => strd === "fa-solid fa-arrow-down"? "fa-solid fa-arrow-up" : "fa-solid fa-arrow-down" )
        setDisDisplay(disD => disD === 'none' ? 'block' : 'none')
       
    }
    const handleDisLeaveDropdown = () => {
        setDisDisplay('none')
        setDisArrow("fa-solid fa-arrow-down")
    }

    const distributeLinks = [
        {page: 'Distribute on Epic Games Store', links: ''},
        {page: 'Developer  Forums', links: ''},
        {page: 'Documentation', links: ''},
        {page: 'Learning', links: ''}
    ]

    return(
        <>
            <div className="Navigation_one">
                <div className="navigation_one">
                    <div className="logo">
                        <div className="logo_1">
                            <div className="logo_1_1">
                                <div className="web_logo">
                                    <div className="web_logo_1" onMouseEnter={handleHoverLogo} >
                                        <div className="logo_image">
                                            <img src={ecpicLogo} alt="Epic Logo" />
                                        </div>

                                        <div className="logo_arrow">
                                            <div className="logo_arrow_1">
                                                <i class={arrow}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="store">
                                    <Link to="/">store</Link>
                                </div>

                                <div className="support">
                                    <Link to="">Support</Link>
                                </div>

                                <div className="distribute">
                                    <div className="distribute_1" onMouseEnter={handleDisArrowHover}>
                                       <div className="dis_">
                                            <p>Distribute</p>
                                       </div>

                                       <div className="arr_">
                                            <div className="arr_1">
                                                <i class={disArrow}></i>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="sign_up_download">
                        <div className="sign_up_download_1">
                            <div className="sign_up_download_1_1">
                                <div className="world-logo">
                                    <div className="world_logo_1">
                                        <i class="fa-solid fa-globe"></i>
                                    </div>
                                </div>

                                <div className="sign_in_button">
                                    <button><Link to='/login'>Sign in</Link></button>
                                </div>

                                <div className="sign_up_button">
                                    <button><Link to='/signup'>Sign up</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="logo_dropdown_content" style={{display: display}} onMouseEnter={handleMouseHoverDropdown} onMouseLeave={handleMouseLeaveDropdown}>
                <div className="logo_dropdown_content_1">
                    <div className="play">
                        <div className="play_1">
                            <div className="play_1_1">
                                <div className="play_header">
                                    <h3>Play</h3>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={fortniteIcon} alt="fortnight" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Fortnite</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={rocketIcon } alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Android</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={fallGuy} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Fall Guys</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="discover">
                            <div className="play_1_1">
                                <div className="play_header">
                                    <h3>Discover</h3>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={epicGamesIcon} alt="fortnight" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Epic Games Store</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={alienWareIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Alien Ware</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={sketchFabIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Sketchfab</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={artStationIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>ArtStation</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="create">
                        <div className="create_play">
                                <div className="play_header">
                                    <h3>Create</h3>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={unrealEngineIcon} alt="fortnight" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Unreal Engine</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={fortniteIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Create in Fortnite</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={steamIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Steam</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={twimMotionIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Twinmotion</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={apachecordovaIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Apachecordova</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={asepriteIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Aseprite</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={concourseIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Concourse</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={dcEntIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Dcentertainment</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="fortnight">
                                    <div className="fortnight_1">
                                        <div className="icon_image">
                                            <div className="icon_image_1">
                                                <img src={drizzleIcon} alt="" />
                                            </div>
                                        </div>
                                    
                                        <div className="icon_name">
                                            <Link to=''>Drizzle</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="distribute_dropdown" style={{display: disDisplay}} onMouseLeave={handleDisLeaveDropdown}>
                <div className="distribute_dropdown_1">
                    <div className="dis_drop_menu">
                        {distributeLinks.map((dis, index) => <div className='drop_dis_menu'><div className="dis_down_pages" key={index}><Link to={dis.links}>{dis.page}</Link></div></div>)}
                    </div>
                </div>
            </div>
        </>
    )
}