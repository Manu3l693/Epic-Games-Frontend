import './TopSellers.css'

import { TopCont2 } from './TopCont2'
import { TopCont3 } from './TopCont3'


import EAsport from '../images/Polar.jpg'
import ArcRaider from '../images/Agency.jpg'
import GTA from '../images/Shaka.jpg'
import Hogwart from '../images/Oneiric.jpg'
import BattlField from '../images/FrozenLegend.jpg'
import fortNite from '../images/FortniteFree_1.jpg'
import RocketLeagues from '../images/9e838a968536e5abd87f747aba67f440.jpg'
import jotunn from '../images/Genshin.jpg'
import Mongil from '../images/Honkai.jpg'
import Tides from '../images/Zenless.jpg'
import SubNautica from '../images/HalfSword.jpg'
import outOf from '../images/Arise.jpg'
import jurassic from '../images/TruckWorld.jpg'
import XDDL from '../images/CalamityBeta.jpg'
import Saturday from '../images/WilderWorlds.jpg'

export const TopAdd = () => {

            const product1 = [
                {id: 1, image: EAsport,    header: 'Polar Legend Park',                 discount: '-50%', stroke: '$22.99',  price: '$11.49', link: '/login'},
                {id: 2, image: ArcRaider,  header: 'Agency Renegades Pack',             discount: '-50%', stroke: '$20.99',   price: '$10.49', link: '/login'},
                {id: 3, image: GTA,        header: "Shaka Surfin' Pack",                price: '$4.49',   link: '/login'},
                {id: 4, image: Hogwart,    header: 'Oneiric Shard *6480',               price: '$99.99',    link: '/login'},
                {id: 5, image: BattlField, header: 'Frozen Legends Pack',               discount: '-50%', stroke: '$16.99',   price: '$8.49',  link: '/login'},
            ]
        
            const product2 = [
                {id: 1, image: fortNite,      header: 'Fortnite',            price: 'Free',    link: '/login'},
                {id: 2, image: RocketLeagues, header: 'Rocket League',       price: 'Free',    link: '/login'},
                {id: 3, image: jotunn,        header: 'Genshin Impact',      price: 'Free',    link: '/login'},
                {id: 4, image: Mongil,        header: 'Honkai: Star Rail',   price: 'Free',    link: '/login'},
                {id: 5, image: Tides,         header: 'Zenless Zone Zero',   price: 'Free',    link: '/login'},
            ]
        
            const product3 = [
                {id: 1, image: SubNautica,       header: 'Half Sword Demo',                       price: '',        color: 'grey',        link: '/login'},
                {id: 2, image: outOf,            header: 'Arise - Closed Paytest',                price: 'Free',    color: '#fff',      link: '/login'},
                {id: 3, image: jurassic,         header: 'Truck World: Driving School',           price: '',        color: 'grey',        link: '/login'},
                {id: 4, image: XDDL,             header: 'Calamity Beta', button: 'First Run',    price: '',        link: '/login'},
                {id: 5, image: Saturday,         header: 'Wilder World - Super Early Access',     price: '',        color: 'grey',         link: '/login'},
            ]
    return(
        <>
        <div className="top_sellers">
                <div className="top_sellers_1">
                    <div className="topSellers">
                        <div className="most_played_1">
                            <div className="topSeller_header">
                               <h2>Top Adds-Ons</h2>
                            </div>

                            <div className="top_Seller_content">
                                <TopCont2 key={product1[0].id} image={product1[0].image} header={product1[0].header} discount={product1[0].discount} stroke={product1[0].stroke} price={product1[0].price} link={product1[0].link}/>
                                <TopCont2 key={product1[1].id} image={product1[1].image} header={product1[1].header} discount={product1[1].discount} stroke={product1[1].stroke} price={product1[1].price} link={product1[1].link}/>
                                <TopCont3 key={product1[2].id} image={product1[2].image} header={product1[2].header} price={product1[2].price} link={product1[2].link}/>
                                <TopCont3 key={product1[3].id} image={product1[3].image} header={product1[3].header} price={product1[3].price} link={product1[3].link}/>
                                <TopCont2 key={product1[4].id} image={product1[4].image} header={product1[4].header} discount={product1[4].discount} stroke={product1[4].stroke} price={product1[4].price} link={product1[4].link}/>
                            </div>
                        </div>
                    </div>

                    <div className="most_played">
                        <div className="most_played_1">
                            <div className="topSeller_header">
                                <h2>Top Free to Play</h2>
                            </div>

                            <div className="top_Seller_content">
                                {product2.map((product)=> 
                                    <TopCont3 
                                        Key={product.id}
                                        image={product.image}
                                        header={product.header}
                                        price={product.price}
                                        link={product.link}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="topUpcoming">
                         <div className="most_played_1">
                            <div className="topSeller_header">
                               <h2>Top Demos</h2>
                            </div>

                            <div className="top_Seller_content">
                               {product3.map((product)=> 
                                    <TopCont3 
                                        Key={product.id}
                                        image={product.image}
                                        header={product.header}
                                        price={product.price}
                                        link={product.link}
                                    />
                                )}
                            </div>
                         </div>
                    </div>
                </div>
            </div> 
        </>
    )
}