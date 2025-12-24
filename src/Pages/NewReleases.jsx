import './TopSellers.css'

import { TopCont1 } from './TopCont1'
import { TopCont2 } from './TopCont2'
import { TopCont3 } from './TopCont3'
import { TopCont4 } from './TopCont4'
import { TopCont5 } from './TopCont5'
import { TopCont6 } from './TopCont6'

import EAsport from '../images/wildWest.jpg'
import ArcRaider from '../images/24e2fe53c8ed9248036af6efaf93966d.jpg'
import GTA from '../images/images (1).jpg'
import Hogwart from '../images/panic-room-ghosts-of-the-past-1onxj.avif'
import BattlField from '../images/0066fdca207700676998c29bf2b68f4d.jpg'
import fortNite from '../images/31d0566bc21d12fb67d67ffe9c535ee1.jpg'
import RocketLeagues from '../images/b2e2b368beb84a9e25ddeaa4d195d2ce.jpg'
import jotunn from '../images/b2c6c5b4f6992b115368bcb678c4662a.jpg'
import Mongil from '../images/cb4e5386d6dc74ac7f71f8c504addab4.jpg'
import Tides from '../images/e17233dc1c4e3457d5a259c06c7eb502.jpg'
import SubNautica from '../images/images (2).jpg'
import outOf from '../images/SunBlockers.jpg'
import jurassic from '../images/MemoryUniverse.jpg'
import XDDL from '../images/XDDL.jpg'
import Saturday from '../images/images.png'


export const NewReleases = () => {

        const product1 = [
            {id: 1, image: EAsport,    header: 'Wild West Saga',                 button: 'Now On Epic',   price: 'Free',      link: '/login'},
            {id: 2, image: ArcRaider,  header: 'The Pedestrian',                 button: 'Now On Epic',   discount: '-40%',   stroke: '$8.99',   price: '$5.39', link: '/login'},
            {id: 3, image: GTA,        header: 'DroneStone',                     price: 'Free',           link: '/login'},
            {id: 4, image: Hogwart,    header: 'Panic Room: Ghosts of the past', price: 'Free',          color: '#fff',    link: '/login'},
            {id: 5, image: BattlField, header: 'Epic Cards Battle 3',            button: 'First Run',     price: 'Free',      link: '/login'},
        ]
    
        const product2 = [
            {id: 1, image: fortNite,      header: 'KINGDOM HEARTS HD 1.5+2.5 ReMIX',    discount: '-50%', stroke: '$49.99*', price: '$24.99',   link: '/login'},
            {id: 2, image: RocketLeagues,       header: 'PowerWash Simulator 2',              discount: '-15%', stroke: '$9.99*',  price: '$8.49',    link: '/login'},
            {id: 3, image: jotunn, header: 'Hades II',                           discount: '-20%', stroke: '$14.50*', price: '$11.60',   link: '/login'},
            {id: 4, image: Mongil,           header: 'Goat Simulator 3',                   price: '$16.19',  link: '/login'},
            {id: 5, image: Tides,        header: 'Disco Elysium - The Final Cut',      price: '$9.99',   link: '/login'},
        ]
    
        const product3 = [
            {id: 1, image: SubNautica,       header: 'Codename Medusa',        price: 'Available 12/25/25',    color: 'grey',        link: '/login'},
            {id: 2, image: outOf,  header: 'SunBlockers',            price: 'Available 12/25/25',    color: 'grey',        link: '/login'},
            {id: 3, image: jurassic,       header: 'Memory Universe',        price: 'Available Dec 2025',    color: 'grey',        link: '/login'},
            {id: 4, image: XDDL,        header: 'XDDL Revive or let Die', button: 'First Run',            price: 'Available Dec 2025', link: '/login'},
            {id: 5, image: Saturday,    header: 'Saturday Super Day',     price: 'Available Dec 2025',           color: 'grey',        link: '/login'},
        ]
    return(
        <>
           <div className="top_sellers">
                <div className="top_sellers_1">
                    <div className="topSellers">
                        <div className="most_played_1">
                            <div className="topSeller_header">
                               <h2>New Releases</h2>
                            </div>

                            <div className="top_Seller_content">
                                <TopCont5 key={product1[0].id} image={product1[0].image} header={product1[0].header} button={product1[0].button} price={product1[0].price} link={product1[0].link}/>
                                <TopCont1 key={product1[1].id} image={product1[1].image} header={product1[1].header} button={product1[1].button} discount={product1[1].discount} stroke={product1[1].stroke} price={product1[1].price} link={product1[1].link}/>
                                <TopCont3 key={product1[2].id} image={product1[2].image} header={product1[2].header} price={product1[2].price} color={product1[2].color} link={product1[2].link}/>
                                <TopCont3 key={product1[3].id} image={product1[3].image} header={product1[3].header} price={product1[3].price} color={product1[3].color} link={product1[3].link}/>
                                <TopCont6 key={product1[4].id} image={product1[4].image} header={product1[4].header} button={product1[4].button} price={product1[4].price} link={product1[4].link}/>
                            </div>
                        </div>
                    </div>

                    <div className="most_played">
                        <div className="most_played_1">
                            <div className="topSeller_header">
                                <h2>Top Player Rated</h2>
                            </div>

                            <div className="top_Seller_content">
                                <TopCont2 key={product2[0].id} image={product2[0].image} header={product2[0].header} discount={product2[0].discount} stroke={product2[0].stroke} price={product2[0].price} link={product2[0].link}/>
                                <TopCont2 key={product2[1].id} image={product2[1].image} header={product2[1].header} discount={product2[1].discount} stroke={product2[1].stroke} price={product2[1].price} link={product2[1].link}/>
                                <TopCont2 key={product2[2].id} image={product2[2].image} header={product2[2].header} discount={product2[2].discount} stroke={product2[2].stroke} price={product2[2].price} link={product2[2].link}/>
                                <TopCont3 key={product2[3].id} image={product2[3].image} header={product2[3].header} price={product2[3].price} color={product2[3].color} link={product2[3].link}/>
                                <TopCont3 key={product2[4].id} image={product2[4].image} header={product2[4].header} price={product2[4].price} color={product2[4].color} link={product2[4].link}/>
                            </div>
                        </div>
                    </div>

                    <div className="topUpcoming">
                         <div className="most_played_1">
                            <div className="topSeller_header">
                               <h2>Coming Soon</h2>
                            </div>

                            <div className="top_Seller_content">
                                <TopCont3 key={product3[0].id} image={product3[0].image} header={product3[0].header} price={product3[0].price} color={product3[0].color} link={product3[0].link}/>
                                <TopCont3 key={product3[1].id} image={product3[1].image} header={product3[1].header} price={product3[1].price} color={product3[1].color} link={product3[1].link}/>
                                <TopCont3 key={product3[2].id} image={product3[2].image} header={product3[2].header} price={product3[2].price} color={product3[2].color} link={product3[2].link}/>
                                <TopCont4 key={product3[3].id} image={product3[3].image} header={product3[3].header} button={product3[3].button} price={product3[3].price} link={product3[3].link}/>
                                <TopCont3 key={product3[4].id} image={product3[4].image} header={product3[4].header} price={product3[4].price} color={product3[4].color} link={product3[4].link}/>
                            </div>
                         </div>
                    </div>
                </div>
           </div>
        </>
    )
}