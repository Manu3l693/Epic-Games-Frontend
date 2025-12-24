import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Card9.css'

export const Card9 = (props) => {
            const id = props.key
            const image = props.image
            const genre = props.genre
            const name = props.name
            const button = props.button
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
           <div className="card9_card" key={id}>
                    <Link to={link}>
                        <div className="car9_card_">
                            <div className="card9_image" onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave}>
                                <div className="hidden_container9" style={{display: cardHover}}>
                                    <div className="bookmark_hidden9"><i class="fa-regular fa-bookmark"></i></div>
                                </div>

                                <img src={image} alt=""/>
                            </div>

                            <div className="car9_details">
                                <div className="genre">
                                    <h4>{genre}</h4>
                                </div>

                                <div className="game_name">
                                    <div className="game_name_p">
                                        <p>{name}</p>
                                    </div>

                                    <div className="game_name_button">
                                        <button><i class="fa-solid fa-crown"></i> {button}</button>
                                        <p>{available}</p>
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