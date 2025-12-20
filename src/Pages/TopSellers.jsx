import './TopSellers.css'

import { TopCont1 } from './TopCont1'
import { TopCont2 } from './TopCont2'
import { TopCont3 } from './TopCont3'
import { TopCont4 } from './TopCont4'

import EAsport from '../images/484b32fe2022ee1feb6d4eeccd56a7a9.jpg'
import ArcRaider from '../images/5373be3fc629b0f98ca1b669e54c0c17.jpg'
import GTA from '../images/c255cc8c8622d97196866fd3fb955dce.jpg'
import Hogwart from '../images/27b13bb902631bcfeacb1fc53480c101.jpg'
import BattlField from '../images/battle_field_grid.png'
import fortNite from '../images/bdcf6b2142e41aa77ce6a54067475f5d.jpg'
import RocketLeagues from '../images/9e838a968536e5abd87f747aba67f440.jpg'
import jotunn from '../images/392452b6b9eaad228456e970a8cde3cc.jpg'
import Mongil from '../images/images.jpg'
import Tides from '../images/279b12c7b5f8ea651c9b8618f5f85e64.jpg'
import SubNautica from '../images/50896c8a37922749110dae272e7a345b.jpg'
import outOf from '../images/MV5BYWFhMGE1YTYtZDFlZS00MGI4LTg3MTItMjI0M2RmYTVjZTUzXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg'
import jurassic from '../images/4bffcc001f9a8208ef53c77a697846e2.jpg'

export const TopSellers = () => {

    const product1 = [
        {id: 1, image: EAsport,    header: 'EA SPORTS FC 26 Standard Edition',   button: 'Trial Available',   discount: '-60%',   stroke: '$69.99', price: '$27.99', link: '/login'},
        {id: 2, image: ArcRaider,  header: 'ARC Raiders',                        discount: '-20%',            stroke: '$39.99',   price: '$31.99', link: '/login'},
        {id: 3, image: GTA,        header: 'Grand Theft Auto V Enhanced',        discount: '-50%',            stroke: '$29.99',   price: '$14.99', link: '/login'},
        {id: 4, image: Hogwart,    header: 'Hogwarts Legacy',                    price: '$59.99',             color: '#fff',    link: '/login'},
        {id: 5, image: BattlField, header: 'Battlefield 6',                      discount: '-30%',            stroke: '$69.99',   price: '$48.99', link: '/login'},
    ]

    const product2 = [
        {id: 1, image: fortNite,      header: 'Fortnite',         price: 'Free',    color: '#fff',             link: '/login'},
        {id: 2, image: Hogwart,       header: 'Hogwarts Legacy',                    price: '$59.99',             color: '#fff',    link: '/login'},
        {id: 3, image: RocketLeagues, header: 'Rocket League',                      price: 'Free',               color: '#fff',    link: '/login'},
        {id: 4, image: GTA,           header: 'Grand Theft Auto V Enhanced',        discount: '-50%',            stroke: '$29.99',   price: '$14.99', link: '/login'},
        {id: 5, image: jotunn,        header: 'Jotunnslayer: Hordes of Hel',        discount: '-25%',            stroke: '$5.99',    price: '$4.49', link: '/login'},
    ]

    const product3 = [
        {id: 1, image: Mongil,      header: 'MONGIL: STAR DIVE',       button: 'First Run',     price: 'Coming Soon', link: '/login'},
        {id: 2, image: Tides,       header: 'Tides of Annihilation',   price: 'Coming Soon',    color: 'grey',        link: '/login'},
        {id: 3, image: SubNautica,  header: 'Subnautica 2',            price: 'Coming Soon',    color: 'grey',        link: '/login'},
        {id: 4, image: outOf,       header: 'Out of Words',            price: 'Coming Soon',    color: 'grey',        link: '/login'},
        {id: 5, image: jurassic,    header: 'Jurassic Park: Survival', price: 'Coming Soon',    color: 'grey',        link: '/login'},
    ]

    return(
        <>
            <div className="top_sellers">
                <div className="top_sellers_1">
                    <div className="topSellers">
                        <div className="most_played_1">
                            <div className="topSeller_header">
                               <h2>Top Sellers</h2>
                            </div>

                            <div className="top_Seller_content">
                                <TopCont1 key={product1[0].id} image={product1[0].image} header={product1[0].header} button={product1[0].button} discount={product1[0].discount} stroke={product1[0].stroke} price={product1[0].price} link={product1[0].link}/>
                                <TopCont2 key={product1[1].id} image={product1[1].image} header={product1[1].header} discount={product1[1].discount} stroke={product1[1].stroke} price={product1[1].price} link={product1[1].link}/>
                                <TopCont2 key={product1[2].id} image={product1[2].image} header={product1[2].header} discount={product1[2].discount} stroke={product1[2].stroke} price={product1[2].price} link={product1[2].link}/>
                                <TopCont3 key={product1[3].id} image={product1[3].image} header={product1[3].header} price={product1[3].price} color={product1[3].color} link={product1[3].link}/>
                                <TopCont2 key={product1[4].id} image={product1[4].image} header={product1[4].header} discount={product1[4].discount} stroke={product1[4].stroke} price={product1[4].price} link={product1[4].link}/>
                            </div>
                        </div>
                    </div>

                    <div className="most_played">
                        <div className="most_played_1">
                            <div className="topSeller_header">
                                <h2>Most Played</h2>
                            </div>

                            <div className="top_Seller_content">
                                <TopCont3 key={product2[0].id} image={product2[0].image} header={product2[0].header} price={product2[0].price} color={product2[0].color} link={product2[0].link}/>
                                <TopCont3 key={product2[1].id} image={product2[1].image} header={product2[1].header} price={product2[1].price} color={product2[1].color} link={product2[1].link}/>
                                <TopCont3 key={product2[2].id} image={product2[2].image} header={product2[2].header} price={product2[2].price} color={product2[2].color} link={product2[2].link}/>
                                <TopCont2 key={product2[3].id} image={product2[3].image} header={product2[3].header} discount={product2[3].discount} stroke={product2[3].stroke} price={product2[3].price} link={product2[3].link}/>
                                <TopCont2 key={product2[4].id} image={product2[4].image} header={product2[4].header} discount={product2[4].discount} stroke={product2[4].stroke} price={product2[4].price} link={product2[4].link}/>
                            </div>
                        </div>
                    </div>

                    <div className="topUpcoming">
                         <div className="most_played_1">
                            <div className="topSeller_header">
                               <h2>Top Upcoming Wishlisted</h2>
                            </div>

                            <div className="top_Seller_content">
                                <TopCont4 key={product3[0].id} image={product3[0].image} header={product3[0].header} button={product3[0].button} price={product3[0].price} link={product3[0].link}/>
                                <TopCont3 key={product3[1].id} image={product3[1].image} header={product3[1].header} price={product3[1].price} color={product3[1].color} link={product3[1].link}/>
                                <TopCont3 key={product3[2].id} image={product3[2].image} header={product3[2].header} price={product3[2].price} color={product3[2].color} link={product3[2].link}/>
                                <TopCont3 key={product3[3].id} image={product3[3].image} header={product3[3].header} price={product3[3].price} color={product3[3].color} link={product3[3].link}/>
                                <TopCont3 key={product3[4].id} image={product3[4].image} header={product3[4].header} price={product3[4].price} color={product3[4].color} link={product3[4].link}/>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}