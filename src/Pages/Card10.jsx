import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Card10.css'

export const Card10 = (props) => {
    const id = props.key
        const image = props.image
        const genre = props.genre
        const name = props.name
        const available = props.available
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
            <div className="card10_card" key={id}>
                    <Link to={link}>
                        <div className="car10_card_">
                            <div className="card10_image" onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave}>
                                <div className="hidden_container10" style={{display: cardHover}}>
                                    <div className="bookmark_hidden10"><i class="fa-regular fa-bookmark"></i></div>
                                </div>

                                <img src={image} alt=""/>
                            </div>

                            <div className="car10_details">
                                <div className="genre">
                                    <h4>{genre}</h4>
                                </div>

                                <div className="game_name">
                                    <div className="game_name_1">
                                        <p>{name}</p>
                                    </div>

                                    <div className="available">
                                        <button>{available}</button>
                                    </div>
                                </div>

                                <div className="game_price">
                                    <div className="game_price_1">
                                        <p>{price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
           </div>
        </>
    )
}