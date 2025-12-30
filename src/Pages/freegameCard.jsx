import { useState } from 'react'
import { Link } from 'react-router-dom'

import './freegameCard.css'


export const FreeGameCard = (props) => {

    const image = props.image
    const backgroundColor = props.backgroundColor
    const free = props.free
    const color = props.color
    const h3 = props.h3
    const p = props.p
    const link = props.link

    const [display, setDisplay] = useState('none')

    const [width, setWidth] = useState('15px')
    const [height, setHeight] = useState('15px')
    const [colorr, setColorr] = useState('#000')
    const [border, setBorder] = useState('1px solid #646464')
    const [borderRadius, setBorderRadius] = useState('50%')
    const [fontSize, setFontSize] = useState('0px')
    const [transition, setTransition] = useState('all 0s')

    const HandleHover = () => {
        setDisplay('block')
    }

    const HandleLeave = () => {
        setDisplay('none')
    }

    const onHiddenHover = () => {
        setWidth('23%')
        setHeight('11%')
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
           <div className="freeGameCard">
                <Link to={link}>
                    <div className="freeGameCard_1">
                        <div className="free_game_image" onMouseEnter={HandleHover} onMouseLeave={HandleLeave}>
                            <div className="freeGame_hover" style={{display: display}}>
                                <div className="free_game_dot" style={{width: width, height: height, border: border, borderRadius: borderRadius, transition: transition}} onMouseEnter={onHiddenHover} onMouseLeave={onHiddenLeave}>
                                    <i style={{fontSize: fontSize, color: colorr}} class="fa-solid fa-cart-arrow-down"></i> 
                                    <p style={{fontSize: fontSize, color: colorr}}>Learn More</p>
                                </div>
                            </div>

                    <div className="free_now" style={{backgroundColor: backgroundColor}}>
                        <h3 style={{color: color}}>{free}</h3>
                    </div>

                    <img src={image} alt="" />
                        </div>

                        <div className="free_game_content">
                            <div className="free_game_content_1">
                                <h3>{h3}</h3>
                                <p>{p}</p>
                            </div>
                        </div>
                    </div>
                </Link>
           </div>
        </>
    )
}