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

        const [width, setWidth] = useState('15px')
        const [height, setHeight] = useState('15px')
        const [colorr, setColorr] = useState('#000')
        const [border, setBorder] = useState('1px solid #646464')
        const [borderRadius, setBorderRadius] = useState('50%')
        const [fontSize, setFontSize] = useState('0px')
        const [transition, setTransition] = useState('all 0s')
    
        const handleHoverCard = () => {
            setCardHover('block')
        }
    
        const handleHoverLeave = () => {
            setCardHover('none')
        }

        const onHiddenHover = () => {
            setWidth('50%')
            setHeight('10%')
            setColorr('#c0c0c0')
            setBorder('none')
            setBorderRadius('3px')
            setFontSize('10px')
            setTransition('all 0.6s')
        }

        const onHiddenLeave = () => {
            setWidth('15px')
            setHeight('15px')
            setColorr('#000')
            setBorder('1px solid #646464')
            setBorderRadius('50%')
            setFontSize('0px')
            setTransition('all 0.6s')
        }

    return(
        <>
            <div className="card5_card" key={id}>
                    <Link to={link}>
                        <div className="car5_card_">
                            <div className="card5_image" onMouseEnter={handleHoverCard} onMouseLeave={handleHoverLeave}>
                                <div className="hidden_container5" style={{display: cardHover}}>
                                    <div className="bookmark_hidden5" style={{width: width, height: height, border: border, borderRadius: borderRadius, transition: transition}} onMouseEnter={onHiddenHover} onMouseLeave={onHiddenLeave}>
                                        <i style={{fontSize: fontSize, color: colorr}} class="fa-solid fa-cart-arrow-down"></i> 
                                        <p style={{fontSize: fontSize, color: colorr}}>Add to Cart</p>
                                    </div>
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