import { Link } from 'react-router-dom'

import './EpicGameCard.css'

export const EpicGameCard = ({image, genre, header, content,link}) => {
    return(
        <>
            <div className="epicGameCard">
                <div className="epicGameImage">
                    <img src={image} alt="" />
                </div>

                <div className="epicGameContent">
                    <div className="epicGameContent_1">
                        <div className="genre">
                            <h4>{genre}</h4>
                        </div>

                        <div className="header">
                            <h3>{header}</h3>
                        </div>

                        <div className="content">
                           <div className="content_1">
                                <p>{content}</p>
                           </div>
                        </div>

                        <div className="link">
                            <Link>{link}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}