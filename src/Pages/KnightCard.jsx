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
    
        const HandleHover = () => {
            setDisplay('block')
        }
    
        const HandleLeave = () => {
            setDisplay('none')
        }

    return(
        <>
           <div className="knightCard" key={key}>
           <Link to={link}>
             <div className="knightCard_1">
                <div className="knightCard_image"  onMouseEnter={HandleHover} onMouseLeave={HandleLeave}>
                    <div className="KnightCard_hover" style={{display: display}}><div className="KnightCard_dot"></div></div>

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