import { useState } from 'react'

import './freegameCard.css'


export const FreeGameCard = (props) => {

    const image = props.image
    const backgroundColor = props.backgroundColor
    const free = props.free
    const color = props.color
    const h3 = props.h3
    const p = props.p

    const [display, setDisplay] = useState('none')

    const HandleHover = () => {
        setDisplay('block')
    }

    const HandleLeave = () => {
        setDisplay('none')
    }

    return(
        <>
           <div className="freeGameCard">
                <div className="free_game_image" onMouseEnter={HandleHover} onMouseLeave={HandleLeave}>
                    <div className="freeGame_hover" style={{display: display}}><div className="free_game_dot"></div></div>

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
        </>
    )
}