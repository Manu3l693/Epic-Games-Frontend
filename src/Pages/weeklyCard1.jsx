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

    const handleDisappear = () => {
        setDisplay('block')
    }

    const handleAppear = () => {
        setDisplay('none')
    }

    return(
        <>
            <div className="weekly_card_1" key={id}>
                        <div className="weekly_card_image" onMouseEnter={handleDisappear} onMouseLeave={handleAppear}>
                            <div className="dotted_dot" style={{display: display}}>
                                <div className="dot_dot_"></div>
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