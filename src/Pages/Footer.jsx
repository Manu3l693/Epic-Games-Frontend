import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

import {useState, useEffect} from 'react'

import './Footer.css'

export const Footer = () => {

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

    const GameLink = [
        {id: 1, name: 'Fortnite', link: '/Hello'},
        {id: 2, name: 'Fall Guys', link: '/Hello'},
        {id: 3, name: 'Rocket League', link: '/Hello'},
        {id: 4, name: 'Unreal Tournament', link: '/Hello'},
        {id: 5, name: 'Infinity Blade', link: '/Hello'},
        {id: 6, name: 'Shadow Complex', link: '/Hello'},
        {id: 7, name: 'Robo Recall', link: '/Hello'},
    ]

    const onlineServices = [
        {id: 1, name: 'Epic Online Services', link: '/Hello'},
        {id: 2, name: 'Kids Web Services', link: '/Hello'},
        {id: 3, name: 'Services Agreement', link: '/Hello'},
        {id: 4, name: 'Acceptable Use Policy', link: '/Hello'},
        {id: 5, name: 'Trust Statement', link: '/Hello'},
        {id: 6, name: 'Subprocessor List', link: '/Hello'},
    ]

    const marketPlaces = [
        {id: 1, name: 'Epic Games Store', link: '/Hello'},
        {id: 2, name: 'Fab', link: '/Hello'},
        {id: 3, name: 'Sketchfab', link: '/Hello'},
        {id: 4, name: 'ArtStation', link: '/Hello'},
        {id: 5, name: 'Store Refund Policy', link: '/Hello'},
        {id: 6, name: 'Store EULA', link: '/Hello'},
    ]

    const company = [
        {id: 1, name: 'About', link: '/Hello'},
        {id: 2, name: 'Newsroom', link: '/Hello'},
        {id: 3, name: 'Careers', link: '/Hello'},
        {id: 4, name: 'Students', link: '/Hello'},
        {id: 5, name: 'UX Research', link: '/Hello'},
    ]

    const tools = [
        {id: 1, name: 'Unreal Engine', link: '/Hello'},
        {id: 2, name: 'UEFN', link: '/Hello'},
        {id: 3, name: 'MetaHuman', link: '/Hello'},
        {id: 4, name: 'Twinmotion', link: '/Hello'},
        {id: 5, name: 'Megascans', link: '/Hello'},
        {id: 6, name: 'RealityScan', link: '/Hello'},
        {id: 7, name: 'RAD Game Tools', link: '/Hello'},
    ]

    const resources = [
        {id: 1, name: 'Dev Community', link: '/Hello'},
        {id: 2, name: 'MegaGrants', link: '/Hello'},
        {id: 3, name: 'Support-A-Creator', link: '/Hello'},
        {id: 4, name: 'Creator Agreement', link: '/Hello'},
        {id: 5, name: 'Distribute on Epic Games', link: '/Hello'},
        {id: 6, name: 'Unreal Engine Branding Guidelines', link: '/Hello'},
        {id: 7, name: 'Fan Art Policy', link: '/Hello'},
        {id: 8, name: 'Community Rules', link: '/Hello'},
        {id: 9, name: 'EU Digital Services Act Inquiries', link: '/Hello'},
        {id: 10, name: 'Epic Pro Support', link: '/Hello'},
    ]

    const termsOfServices = [
        {id: 1, name: 'Terms of services', link: '/Hello'},
        {id: 2, name: 'Privacy policy', link: '/Hello'},
        {id: 3, name: 'Safety & security', link: '/Hello'},
        {id: 4, name: 'Store refund policy', link: '/Hello'},
        {id: 5, name: 'Publisher index', link: '/Hello'},
    ]

    return(
        <>
           <div className="footer">
                <div className="footer_1">
                    <div className="footer_header">
                        <div className="footer_header_1">
                            <div className="footer_store">
                                <div className="footer_store_1">
                                    <h1>store</h1>
                                </div>
                            </div>

                            <div className="footer_socials">
                                <div className="footer_social_icons">
                                    <Link><i class="fa-brands fa-facebook-f"></i></Link>
                                    <Link><i class="fa-brands fa-x-twitter"></i></Link>
                                    <Link><i class="fa-brands fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_links">
                        <div className="games__">
                            <div className="games__1">
                                <div className="games_fort">
                                    <div className="games_fort_header">
                                        <h3>Games</h3>
                                    </div>

                                    <div className="games_fort_links">
                                        <ul>
                                            {isAuthenticated ? (
                                                <>
                                                    {GameLink.map((game)=> 
                                                        <li key={game.id}>
                                                            <Link to={game.link}>{game.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {GameLink.map((game)=> 
                                                        <li key={game.id}>
                                                            <Link to='/login'>{game.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <div className="online_service">
                                    <div className="games_fort_header">
                                        <h3>Online Services</h3>
                                    </div>

                                    <div className="games_fort_links">
                                        <ul>
                                            {isAuthenticated ? (
                                                <>
                                                    {onlineServices.map((service)=> 
                                                        <li key={service.id}>
                                                            <Link to={service.link}>{service.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {onlineServices.map((service)=> 
                                                        <li key={service.id}>
                                                            <Link to='/login'>{service.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="marketPlace__">
                            <div className="games__1">
                                <div className="games_fort">
                                    <div className="games_fort_header">
                                        <h3>Marketplaces</h3>
                                    </div>

                                    <div className="games_fort_links">
                                        <ul>
                                           {isAuthenticated ? (
                                            <>
                                                {marketPlaces.map((game)=> 
                                                    <li key={game.id}>
                                                        <Link to={game.link}>{game.name}</Link>
                                                    </li>
                                                )}
                                            </>
                                           ) : (
                                            <>
                                                {marketPlaces.map((game)=> 
                                                    <li key={game.id}>
                                                        <Link to='/login'>{game.name}</Link>
                                                    </li>
                                                )}
                                            </>
                                           )}
                                        </ul>
                                    </div>
                                </div>

                                <div className="online_service">
                                    <div className="games_fort_header">
                                        <h3>Company</h3>
                                    </div>

                                    <div className="games_fort_links">
                                        <ul>
                                            {isAuthenticated ? (
                                                <>
                                                    {company.map((service)=> 
                                                        <li key={service.id}>
                                                            <Link to={service.link}>{service.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {company.map((service)=> 
                                                        <li key={service.id}>
                                                            <Link to='/login'>{service.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tools__">
                            <div className="games__1">
                                <div className="games_fort">
                                    <div className="games_fort_header">
                                        <h3>Tools</h3>
                                    </div>

                                    <div className="games_fort_links">
                                        <ul>
                                            {isAuthenticated ? (
                                                <>
                                                    {tools.map((game)=> 
                                                        <li key={game.id}>
                                                            <Link to={game.link}>{game.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {tools.map((game)=> 
                                                        <li key={game.id}>
                                                            <Link to='/login'>{game.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <div className="online_service">
                                    <div className="games_fort_header">
                                        <h3>Resources</h3>
                                    </div>

                                    <div className="games_fort_links">
                                        <ul>
                                            {isAuthenticated ? (
                                                <>
                                                    {resources.map((service)=> 
                                                        <li key={service.id}>
                                                            <Link to={service.link}>{service.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            ) : (
                                                <>
                                                    {resources.map((service)=> 
                                                        <li key={service.id}>
                                                            <Link to='/login'>{service.name}</Link>
                                                        </li>
                                                    )}
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer_end">
                        <div className="footer_end_1">
                            <div className="foot_end_texts">
                                <div className="foot_details">
                                    <p>&copy; 2025, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. Epic Games has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them. </p>
                                </div>

                                <div className="terms_service">
                                    <ul>
                                        {isAuthenticated ? (
                                            <>
                                                {termsOfServices.map((term)=> 
                                                    <li key={term.id}>
                                                        <Link to={term.link}>{term.name}</Link>
                                                    </li>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {termsOfServices.map((term)=> 
                                                    <li key={term.id}>
                                                        <Link to='/login'>{term.name}</Link>
                                                    </li>
                                                )}
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="foot_end_button">
                                <div className="footer_button_1">
                                    <button><a href="#">Back to top</a> <i class="fa-solid fa-arrow-up"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}