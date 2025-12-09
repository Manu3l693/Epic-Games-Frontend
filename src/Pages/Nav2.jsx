import { Link } from 'react-router-dom'

import './Nav2.css'

export const NavigationBarTwo = (props) => {

    const color1 = props.color1
    const color2 = props.color2
    const color3 = props.color3

    const navPage2 = [
        {page: 'Discover', Link: '', color: color1, weight: '400'},
        {page: 'Browse', Link: '', color: color2, weight: '500'},
        {page: 'News', Link: '', color: color3, weight: '500'}
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
                                    {navPage2.map((navPage, index) => <li key={index}><Link to={navPage.Link} style={{color: navPage.color, fontWeight: navPage.weight}}>{navPage.page}</Link></li>)}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}