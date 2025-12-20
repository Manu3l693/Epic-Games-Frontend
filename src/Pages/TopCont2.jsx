import { Link } from 'react-router-dom'
import { useState } from 'react'

import './TopCont2.css'


export const TopCont2 = (props) => {

    const key = props.key
    const image = props.image
    const header = props.header
    const discount = props.discount
    const stroke = props.stroke
    const price = props.price
    const link = props.link



    const [display, setDisplay] = useState('none')

    const handleHover = () => {
        setDisplay('block')
    }

    const handleHoverLeave = () => {
        setDisplay('none')
    }

    return(
        <>
            <div className="topCont2" key={key} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                <Link to={link}>
                    <div className="top_cont2">
                        <div className="topContImage2">
                            <div className="topCont_image2">
                                <div className="topHidden2" style={{display: display}}>
                                    <div className="topHidden_2"></div>
                                </div>
                                
                                <img src={image} alt="" /> 
                            </div>
                        </div>

                        <div className="topContContent2">
                            <div className="topContent_22">
                                <div className="topContDetails2">
                                    <h2>{header}</h2>
                                </div>

                                <div className="topContPrice2">
                                    <div className="topContPrice_2">
                                        <button>{discount}</button>
                                        <p className='stroke'>{stroke}</p>
                                        <p>{price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}