import { Link } from 'react-router-dom'

import './otherNewsCard.css'

export const OtherNewsCards = ({key, image, genre, header, content, link}) => {
    return(
        <>
            <div className="otherNewsCards" key={key}>
                <div className="otherNewsCard_1">
                    <div className="otherCard_image">
                        <div className="otherCard_image_1">
                            <img src={image} alt="" />
                        </div>
                    </div>

                    <div className="otherCard_content">
                        <div className="otherCard_content_1">
                            <div className="genreee">
                                <h4>{genre}</h4>
                            </div>

                            <div className="headerrr">
                                <h3>{header}</h3>
                            </div>

                            <div className="contentt">
                                <p>{content}</p>
                            </div>

                            <div className="linkk">
                                <Link>{link}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}