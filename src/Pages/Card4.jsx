import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Card4.css'

export const Card4 = (props) => {
        const id = props.key
        const image = props.image
        const genre = props.genre
        const name = props.name
        const available = props.available
        const price = props.price
        const link = props.link
        const discount = props.discount
        const stroke = props.stroke


    const [cardHover, setCardHover] = useState('none')
    
        const handleHoverCard = () => {
            setCardHover('block')
        }
    
        const handleHoverLeave = () => {
            setCardHover('none')
        }
    return(
        <>
           <div className="card4_card" key={id}>
                    <Link to={link}>
                        <div className="car4_card_">
                            <div className="card4_image" onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave}>
                                <div className="hidden_container4" style={{display: cardHover}}>
                                    <div className="bookmark_hidden4"><i class="fa-regular fa-bookmark"></i></div>
                                </div>

                                <img src={image} alt=""/>
                            </div>

                            <div className="car4_details">
                                <div className="genre">
                                    <h4>{genre}</h4>
                                </div>

                                <div className="game_name">
                                    <p>{name}</p>

                                    <h4>{available}</h4>
                                </div>

                                <div className="game_price">
                                    <div className="game_price_1">
                                        <button>{discount}</button>
                                        <p className='stroke'>{stroke}</p>
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