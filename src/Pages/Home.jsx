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
import { Featured } from "./Featured"
import { FirstRun } from "./FirstRun"
import { TopAdd } from "./TopAdd"
import { MostPopular } from "./MostPopular"
import { RecentlyUpdated } from "./RecentlyUpdated"
import { GameStore } from "./GameStore"
import { SalesAndSpecial } from "./SalesAndSpecial"
import { Lowest } from "./Lowest"
import { Footer } from "./Footer"

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
            <Featured />
            <FirstRun />
            <TopAdd />
            <MostPopular />
            <RecentlyUpdated />
            <GameStore />
            <SalesAndSpecial />
            <Lowest />
            <Footer />
        </>
    )
}