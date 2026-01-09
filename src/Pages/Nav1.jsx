import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { motion } from 'framer-motion'

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

import userDefaultImage from '../images/account.png'

export const NavigationOne = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        checkAuth()
    }, [])

    const checkAuth = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/verify', {withCredentials: true})
            if(response.data.success && response.data.user.isVerified){
                setIsAuthenticated(true)
                setUser(response.data.user.firstname)
            }else{
                setIsAuthenticated(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogOut = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:5000/api/auth/logout', {}, {
                withCredentials: true
            })
            alert('Are you sure you want to logout?')
            setIsAuthenticated(false)
            setUser(null)
            navigate('/')
        } catch (error) {
            console.error(error); 
        }
    }

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
        {page: 'Distribute on Epic Games Store', links: '/distributed'},
        {page: 'Developer  Forums', links: '/developer'},
        {page: 'Documentation', links: '/documentation'},
        {page: 'Learning', links: '/learning'}
    ]

    const [profileDisplay, setProfileDisplay] = useState('none')

    const handleProfileDisplay = () => {
        setProfileDisplay(p => p === 'none' ? 'block' : 'none' )
    }


    return(
        <>
            <div className="Navigation_one">
                <div className="navigation_one">
                    <div className="logo">
                        <div className="logo_1">
                            <div className="logo_1_1">
                                <div className="web_logo">
                                    <div className="web_logo_1" onMouseEnter={handleHoverLogo} >
                                        <motion.div 
                                        className="logo_image"
                                        animate={{ rotate: 360 }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: Infinity,
                                            ease: "linear" 
                                        }}
                                        >
                                            <img src={ecpicLogo} alt="Epic Logo" />
                                        </motion.div>

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
                                {isAuthenticated ? (
                                    <>
                                        <div className="world-logo">
                                            <div className="world_logo_1">
                                                <i class="fa-solid fa-globe"></i>
                                            </div>
                                        </div>

                                        <div className="sign_in_button_1">
                                            <button onClick={handleProfileDisplay}>{user}</button>
                                        </div>

                                        <div className="sign_up_button">
                                            <form onSubmit={handleLogOut}>
                                                <button>Logout</button>
                                            </form>
                                        </div>  


                                        <div className="profileDropDown" style={{display: profileDisplay}}>
                                            <div className="profiledropdown_1">
                                                <div className="profile__">
                                                   <div className="profile__1">
                                                        <img src={userDefaultImage} alt="" />
                                                   </div>
                                                </div>

                                                <div className="edit_profile">
                                                    <Link to="/editprofile">Edit Profile</Link>
                                                </div>

                                                <div className="logout_container">
                                                    <form onSubmit={handleLogOut}>
                                                        <button>Logout</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>                                  
                                    </>
                                ) : (
                                    <>
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
                                    </>
                                )}
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
                                {isAuthenticated ? (
                                    <>
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
                                                    <Link to='/fortnite'>Fortnite</Link>
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
                                                    <Link to='/android'>Android</Link>
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
                                                    <Link to='/fallguy'>Fall Guys</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
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
                                                    <Link to='/login'>Fortnite</Link>
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
                                                    <Link to='/login'>Android</Link>
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
                                                    <Link to='/login'>Fall Guys</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="discover">
                            <div className="play_1_1">

                                {isAuthenticated ? (
                                    <>
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
                                                    <Link to='/epicgamestore'>Epic Games Store</Link>
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
                                                    <Link to='/alienware'>Alien Ware</Link>
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
                                                    <Link to='/sketchfab'>Sketchfab</Link>
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
                                                    <Link to='/artstation'>ArtStation</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
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
                                                    <Link to='/login'>Epic Games Store</Link>
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
                                                    <Link to='/login'>Alien Ware</Link>
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
                                                    <Link to='/login'>Sketchfab</Link>
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
                                                    <Link to='/login'>ArtStation</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="create">
                        <div className="create_play">
                            {isAuthenticated ? (
                                <>
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
                                                <Link to='/unrealengine'>Unreal Engine</Link>
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
                                                <Link to='/createafortnite'>Create in Fortnite</Link>
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
                                                <Link to='/steam'>Steam</Link>
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
                                                <Link to='/twinmotion'>Twinmotion</Link>
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
                                                <Link to='/apachecordova'>Apachecordova</Link>
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
                                                <Link to='/aseprite'>Aseprite</Link>
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
                                                <Link to='/concourse'>Concourse</Link>
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
                                                <Link to='/dcentertainment'>Dcentertainment</Link>
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
                                                <Link to='/drizzle'>Drizzle</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
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
                                                <Link to='/login'>Unreal Engine</Link>
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
                                                <Link to='/login'>Create in Fortnite</Link>
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
                                                <Link to='/login'>Steam</Link>
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
                                                <Link to='/login'>Twinmotion</Link>
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
                                                <Link to='/login'>Apachecordova</Link>
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
                                                <Link to='/login'>Aseprite</Link>
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
                                                <Link to='/login'>Concourse</Link>
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
                                                <Link to='/login'>Dcentertainment</Link>
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
                                                <Link to='/login'>Drizzle</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="distribute_dropdown" style={{display: disDisplay}} onMouseLeave={handleDisLeaveDropdown}>
                <div className="distribute_dropdown_1">
                    <div className="dis_drop_menu">
                        {isAuthenticated ? (
                            <>
                                {distributeLinks.map((dis, index) => <div className='drop_dis_menu'><div className="dis_down_pages" key={index}><Link to={dis.links}>{dis.page}</Link></div></div>)}
                            </>
                        ) : (
                            <>
                                {distributeLinks.map((dis, index) => <div className='drop_dis_menu'><div className="dis_down_pages" key={index}><Link to='login'>{dis.page}</Link></div></div>)}
                            </>
                        )}
                    </div>
                </div>
            </div>

            
        </>
    )
}