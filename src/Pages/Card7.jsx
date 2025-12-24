import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Card7.css'

export const Card7 = (props) => {
            const id = props.key
            const image = props.image
            const genre = props.genre
            const name = props.name
            const button = props.button
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
           <div className="card7_card" key={id}>
                    <Link to={link}>
                        <div className="car7_card_">
                            <div className="card7_image" onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave}>
                                <div className="hidden_container7" style={{display: cardHover}}>
                                    <div className="bookmark_hidden7"><i class="fa-regular fa-bookmark"></i></div>
                                </div>

                                <img src={image} alt=""/>
                            </div>

                            <div className="car7_details">
                                <div className="genre">
                                    <h4>{genre}</h4>
                                </div>

                                <div className="game_name">
                                    <p>{name}</p>

                                    <button><i class="fa-solid fa-crown"></i> {button}</button>
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