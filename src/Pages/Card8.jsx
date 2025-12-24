import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Card8.css'

export const Card8 = (props) => {
            const id = props.key
            const image = props.image
            const genre = props.genre
            const name = props.name
            const button = props.button
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
           <div className="card8_card" key={id}>
                    <Link to={link}>
                        <div className="car8_card_">
                            <div className="card8_image" onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave}>
                                <div className="hidden_container8" style={{display: cardHover}}>
                                    <div className="bookmark_hidden8"><i class="fa-regular fa-bookmark"></i></div>
                                </div>

                                <img src={image} alt=""/>
                            </div>

                            <div className="car8_details">
                                <div className="genre">
                                    <h4>{genre}</h4>
                                </div>

                                <div className="game_name">
                                    <p>{name}</p>

                                    <button><i class="fa-solid fa-crown"></i> {button}</button>
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