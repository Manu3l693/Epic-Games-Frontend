import { NavigationOne } from "./Nav1"
import { NavigationBarTwo } from "./Nav2"
import { FirstSlide } from "./FirstSlide"
import { DiscoverSlide } from "./DiscoverSlide"
import { WeekCard } from "./WeekCard"
import { FreeGame } from "./FreeGame"
import { EpicExtra } from "./EpicExtra"
import { TopReleases } from "./TopReleases"
import { WeekCard2 } from "./WeekCard2"
import { TopSellers } from "./TopSellers"
import { SevenKnight } from "./SevenKnight"
import { Trending } from "./Trending"
import { NewReleases } from "./NewReleases"

import './Home.css'


export const WelcomePage = () => {
    return(
        <>
            <NavigationOne />
            <NavigationBarTwo color1="#fff" color2="gray" color3="gray"/>
            <FirstSlide />
            <DiscoverSlide />
            <WeekCard />
            <FreeGame />
            <EpicExtra />
            <TopReleases />
            <WeekCard2 />
            <TopSellers />
            <SevenKnight />
            <Trending />
            <NewReleases />
        </>
    )
}