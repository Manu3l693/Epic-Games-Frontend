import { Link } from 'react-router-dom'
import './Trending.css'

import { Card1 } from './card1'
import { Card2 } from './card2'

import paradise from '../images/1e863c3bb9f7ef9c73fb578fa860db1d.jpg'
import Ark from '../images/38847c52741da2c4590ab936fe3cb3dd.jpg'
import Sorry from '../images/94e28d653b9262d1ea55c652f7fb57ce.png'
import Avatar from '../images/0608e6241fcd68f251d8685af6e6b4cf.jpg'
import Tides from '../images/279b12c7b5f8ea651c9b8618f5f85e64.jpg'

export const Trending = () => {

    const product = [
        {id: 1, image: paradise, genre: 'Base Game', name: 'Paradise Killer',              discount: '-100%',   stroke: '$7.99',  price:'Free', link: '/login'},
        {id: 2, image: Ark, genre: 'Base Game', name: 'ARK: Survival Ascended',       price:'Coming soon', color: '#a8a8a8ff',    link: '/login'},
        {id: 3, image: Sorry, genre: 'Base Game', name: "Sorry We're Closed",           price:'$9.99',       color: '#fff',  link: '/login'},
        {id: 4, image: Avatar, genre: 'Base Game', name: 'Avatar: Frontiers of Pandora', discount: '-33%',    stroke: '$29.99', price:'$20.09', link: '/login'},
        {id: 5, image: Tides, genre: 'Base Game', name: 'Tides of Annihilation',        price:'Coming Soon', color: '#a8a8a8ff',    link: '/login'},
    ]
    return(
        <> 
            <div className="trending">
                <div className="trending_1">
                    <div className="trending_11">
                        <div className="trending_details">
                            <div className="trending_header">
                                <h2>Trending</h2> 
                            </div>

                            <div className="trending_button">
                                <button><Link to=''>View More</Link></button>
                            </div>
                        </div>

                        <div className="trending_products">
                            <Card2 key={product[0].id} image={product[0].image} genre={product[0].genre} name={product[0].name} discount={product[0].discount} stroke={product[0].stroke} price={product[0].price} link={product[0].link}/>
                            <Card1 key={product[1].id} image={product[1].image} genre={product[1].genre} name={product[1].name} price={product[1].price} color={product[1].color} link={product[1].link}/>
                            <Card1 key={product[2].id} image={product[2].image} genre={product[2].genre} name={product[2].name} price={product[2].price} color={product[2].color} link={product[2].link}/>
                            <Card2 key={product[3].id} image={product[3].image} genre={product[3].genre} name={product[3].name} discount={product[3].discount} stroke={product[3].stroke} price={product[3].price} link={product[3].link}/>
                            <Card1 key={product[4].id} image={product[4].image} genre={product[4].genre} name={product[4].name} price={product[4].price} color={product[4].color} link={product[4].link}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}