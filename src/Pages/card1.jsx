import { useState } from 'react'
import { Link } from 'react-router-dom'

import './card1.css'


export const Card1 = (props) => {
    const id = props.key
    const image = props.image
    const genre = props.genre
    const name = props.name
    const price = props.price
    const link = props.link

    const [cardHover, setCardHover] = useState('none')

    const handleHoverCard = () => {
        setCardHover('block')
    }

    const handleHoverLeave = () => {
        setCardHover('none')
    }

    return(
        <>
            
                <div className="card1_card" key={id}>
                    <Link to={link}>
                        <div className="car1_card_">
                            <div className="card1_image" onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave}>
                                <div className="hidden_container" style={{display: cardHover}}>
                                    <div className="bookmark_hidden"><i class="fa-regular fa-bookmark"></i></div>
                                </div>

                                <img src={image} alt=""/>
                            </div>

                            <div className="car1_details">
                                <div className="genre">
                                    <h4>{genre}</h4>
                                </div>

                                <div className="game_name">
                                    <p>{name}</p>
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