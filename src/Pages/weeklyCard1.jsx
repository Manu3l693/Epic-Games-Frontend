import { Link } from 'react-router-dom'
import { useState } from 'react'

import './weeklycard1.css'

export const WeeklyCard1 = (props) => {

    const id = props.id
    const image = props.image
    const header = props.header
    const text = props.text
    const button = props.button
    const link = props.link

    const [display, setDisplay] = useState('none')

    const [width, setWidth] = useState('15px')
    const [height, setHeight] = useState('15px')
    const [colorr, setColorr] = useState('#000')
    const [border, setBorder] = useState('1px solid #646464')
    const [borderRadius, setBorderRadius] = useState('50%')
    const [fontSize, setFontSize] = useState('0px')
    const [transition, setTransition] = useState('all 0s')

    const handleDisappear = () => {
        setDisplay('block')
    }

    const handleAppear = () => {
        setDisplay('none')
    }

     const onHiddenHover = () => {
        setWidth('30%')
        setHeight('15%')
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
            <div className="weekly_card_1" key={id}>
                        <div className="weekly_card_image" onMouseEnter={handleDisappear} onMouseLeave={handleAppear}>
                            <div className="dotted_dot" style={{display: display}}>
                                <div className="dot_dot_" style={{width: width, height: height, border: border, borderRadius: borderRadius, transition: transition}} onMouseEnter={onHiddenHover} onMouseLeave={onHiddenLeave}>
                                    <i style={{fontSize: fontSize, color: colorr}} class="fa-solid fa-cart-arrow-down"></i> 
                                        <p style={{fontSize: fontSize, color: colorr}}>Learn More</p>
                                </div>
                            </div>
                            <img src={image} alt="" />
                        </div>

                        <div className="weekly_card_content">
                            <div className="weekly_card_header">
                                <h3>{header}</h3>
                            </div>

                            <div className="weekly_card_texts">
                                <div className="weekly_card_texts_">
                                    <p>{text}</p>
                                </div>
                            </div>

                            <div className="weekly_card_button">
                                <button><Link to={link}>{button}</Link></button>
                            </div>
                        </div>
            </div>
        </>
    )
}