import { KnightCard } from './KnightCard'

import './SevenKnight.css'

import sevenKnight from '../images/1250206.jpg'
import raven2 from '../images/654110.jpg'

export const SevenKnight = () => {

    const products = [
        {id: 1, image: sevenKnight, header: "Assassin's Creed", text: "A Legacy Reborn! Auto turn-based battles, bold skill action, and the story of The Evan Expedition's adventure.", firstButton: 'First Run', secondButton: 'Wishlist Now'},
        {id: 2, image: raven2, header: 'Delta Force',                 text: 'The Holiday Event is here! Claim your "Snowy Night" Holy Garment for free - only on Epic Games Store!',          firstButton: 'First Run', secondButton: 'Play For Free'},
    ]
    return(
        <>
           <div className="sevenKnight">
            <div className="sevenKnight_1">
                <KnightCard key={products[0].id} image={products[0].image} header={products[0].header} text={products[0].text} firstButton={products[0].firstButton} secondButton={products[0].secondButton}/>
                <KnightCard key={products[1].id} image={products[1].image} header={products[1].header} text={products[1].text} firstButton={products[1].firstButton} secondButton={products[1].secondButton}/>
            </div>
           </div>
        </>
    )
}