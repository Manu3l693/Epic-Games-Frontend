import { Link } from 'react-router-dom'
import { useState } from 'react'

import './TopCont4.css'

export const TopCont4 = (props) => {

        const key = props.key
        const image = props.image
        const header = props.header
        const button = props.button
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
           <div className="topCont4" key={key} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                <Link to={link}>
                    <div className="top_cont4">
                        <div className="topContImage4">
                            <div className="topCont_image4">
                                <div className="topHidden4" style={{display: display}}>
                                    <div className="topHidden_4">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                
                                <img src={image} alt="" /> 
                            </div>
                        </div>

                        <div className="topContContent4">
                            <div className="topContent_44">
                                <div className="topContDetails4">
                                    <h2>{header}</h2>
                                </div>

                                <div className="topContButton4">
                                    <div className="topContButton4_4">
                                        <button><i class="fa-solid fa-crown"></i> {button}</button>
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