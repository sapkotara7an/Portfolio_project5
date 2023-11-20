import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"

const HomePage = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default HomePage;