import { useState } from 'react'
import { Link } from 'react-router-dom'
import './KnightCard.css'

export const KnightCard = (props) => { 

        const key = props.id
        const image = props.image
        const header = props.header
        const text = props.text
        const firstButton = props.firstButton
        const secondButton = props.secondButton
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
            setWidth('21%')
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
           <div className="knightCard" key={key}>
           <Link to={link}>
             <div className="knightCard_1">
                <div className="knightCard_image"  onMouseEnter={HandleHover} onMouseLeave={HandleLeave}>
                    <div className="KnightCard_hover" style={{display: display}}>
                        <div className="KnightCard_dot" style={{width: width, height: height, border: border, borderRadius: borderRadius, transition: transition}} onMouseEnter={onHiddenHover} onMouseLeave={onHiddenLeave}>
                            <i style={{fontSize: fontSize, color: colorr}} class="fa-solid fa-cart-arrow-down"></i> 
                            <p style={{fontSize: fontSize, color: colorr}}>Learn More</p>
                        </div>
                    </div>

                    <img src={image} alt="" />
                </div>

                <div className="knightCard_texts">
                    <div className="sevenKnight_header">
                        <h2>{header}</h2>
                    </div>

                    <div className="sevenKnight_text">
                        <div className="sevenKnight_text_1">
                            <p>{text}</p>
                        </div>
                    </div>

                    <div className="sevenKnight_firstButton">
                        <button><i class="fa-solid fa-crown"></i> {firstButton}</button>
                    </div>

                    <div className="sevenKnight_secondButton">
                        <button>{secondButton}</button>
                    </div>
                </div>
            </div>
           </Link>
           </div>
        </>
    )
}