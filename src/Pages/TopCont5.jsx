import { Link } from 'react-router-dom'
import { useState } from 'react'
import './TopCont5.css'

export const TopCont5 = (props) => {

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
             <div className="topCont1" key={key} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
                <Link to={link}>
                    <div className="top_cont1">
                        <div className="topContImage">
                            <div className="topCont_image">
                                <div className="topHidden" style={{display: display}}>
                                    <div className="topHidden_1">
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                
                                <img src={image} alt="" /> 
                            </div>
                        </div>

                        <div className="topContContent">
                            <div className="topContent_11">
                                <div className="topContDetails">
                                    <h2>{header}</h2>
                                </div>

                                <div className="topContButton">
                                    <button>{button}</button>
                                </div>

                                <div className="topContPrice">
                                    <div className="topContPrice_1">
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