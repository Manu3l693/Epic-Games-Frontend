import { NavigationOne } from "./Nav1"
import { NavigationBarTwo } from "./Nav2"
import { FirstSlide } from "./FirstSlide"

import './Home.css'


export const WelcomePage = () => {
    return(
        <>
            <NavigationOne />
            <NavigationBarTwo color1="#fff" color2="gray" color3="gray"/>
            <FirstSlide />
        </>
    )
}