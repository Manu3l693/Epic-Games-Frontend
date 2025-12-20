import { Link } from 'react-router-dom'
import { useState } from 'react'

import './TopCont3.css'

export const TopCont3 = (props) => {

        const key = props.key
        const image = props.image
        const header = props.header
        const price = props.price
        const color = props.color
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
                    <div className="top_cont3">
                        <div className="topContImage3">
                            <div className="topCont_image3">
                                <div className="topHidden3" style={{display: display}}>
                                    <div className="topHidden_3"></div>
                                </div>
                                
                                <img src={image} alt="" /> 
                            </div>
                        </div>

                        <div className="topContContent3">
                            <div className="topContent_33">
                                <div className="topContDetails3">
                                    <h2>{header}</h2>
                                </div>

                                <div className="topContPrice3">
                                    <div className="topContPrice_3">
                                        <p style={{color: color}}>{price}</p>
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