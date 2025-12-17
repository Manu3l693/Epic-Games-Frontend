import { Link } from "react-router-dom"
import { useState } from 'react'

import './Card5.css'

export const Card5 = (props) => {
        const id = props.key
        const image = props.image
        const genre = props.genre
        const name = props.name
        const price = props.price
        const link = props.link
        const available = props.available
    
        const [cardHover, setCardHover] = useState('none')
    
        const handleHoverCard = () => {
            setCardHover('block')
        }
    
        const handleHoverLeave = () => {
            setCardHover('none')
        }

    return(
        <>
            <div className="card5_card" key={id}>
                    <Link to={link}>
                        <div className="car5_card_">
                            <div className="card5_image" onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave}>
                                <div className="hidden_container5" style={{display: cardHover}}>
                                    <div className="bookmark_hidden5"><i class="fa-regular fa-bookmark"></i></div>
                                </div>

                                <img src={image} alt=""/>
                            </div>

                            <div className="car5_details">
                                <div className="genre">
                                    <h4>{genre}</h4>
                                </div>

                                <div className="game_name">
                                    <p>{name}</p>

                                    <h4>{available}</h4>
                                </div>

                                <div className="game_price">
                                    <p>{price}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
        </>
    )
}