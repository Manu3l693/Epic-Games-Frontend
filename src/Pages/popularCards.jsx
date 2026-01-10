import './popularCard.css'

import { Link } from 'react-router-dom'

export const PopularCard = (props) => {
    const id = props.id
    const h2 = props.header
    const image1 = props.image1
    const image2 = props.image2
    const image3 = props.image3
    const link = props.link

    return(
        <>
           <div className="popularCard" key={id}>
                <Link to={link}>
                    <div className="popular_card_1">

                        <div className="image2">
                            <img src={image2} alt="" />
                        </div>

                        <div className="popular_images">
                            <div className="image1">
                                <img src={image1} alt="" />
                            </div>

                            <div className="image3">
                                <img src={image3} alt="" />
                            </div>
                        </div>

                        <div className="popular_header">
                            <h2>{h2}</h2>
                        </div>
                    </div>
                </Link>
           </div>
        </>
    )
}