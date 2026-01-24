import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'


import './Nav2.css'

export const NavigationBarTwo = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(()=> {
        checkAuth()
    }, [])

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
            console.error(error);
            
        }
    }

    const color1 = props.color1
    const color2 = props.color2
    const color3 = props.color3

    const navPage2 = [
        {page: 'Discover', Link: '/', color: color1, weight: '600'},
        {page: 'Browse', Link: '/browse', color: color2, weight: '600'},
        {page: 'News', Link: '/news', color: color3, weight: '600'}
    ]

    return(
        <>
            <div className="navigation_bar_2">
                <div className="navigation_bar_2_1">
                    <div className="searchbar_1">
                        <div className="searcbar_1_1">

                            <div className="search_bar">
                                <form action="">
                                    <input type="text" name="" id="" placeholder='Search store' />
                                    <div className="search_button">
                                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </form>
                            </div>

                            <div className="discover">
                                <ul>
                                    {isAuthenticated ? (
                                        <>
                                            {navPage2.map((navPage, index) => <li key={index}><Link to={navPage.Link} style={{color: navPage.color, fontWeight: navPage.weight}}>{navPage.page}</Link></li>)}
                                        </>
                                    ) : (
                                        <>
                                            {navPage2.map((navPage, index) => <li key={index}><Link to='/login' style={{color: navPage.color, fontWeight: navPage.weight}}>{navPage.page}</Link></li>)}
                                        </>
                                    )}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}