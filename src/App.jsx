import MainContent from "./components/MainContent/MainContent"
import Navbar from "./components/Navbar/Navbar"
import Marquee from "./components/Marquee/Marquee"
import About from "./components/About/About"
import TechMarquee from "./components/TechMarquee/TechMarquee"
import "./css/index.css"
import Speciality from "./components/Speciality/Speciality"
import MyWork from "./components/MyWork/MyWork"
import Footer from "./components/Footer/Footer"

export default function App(){
    return(
        <>
            <Navbar />
            <MainContent />
            <Marquee />
            <About />
            <Speciality />
            <TechMarquee />
            <MyWork />
            <Footer />
        </>
    )
}