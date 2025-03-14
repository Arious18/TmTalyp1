import Hero from "../components/hero/Hero.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import CardsGrid from "../components/card/CardsGrid.jsx";
import React from "react";
import Comp2 from "../components/hero2/Comp2.jsx";
import Comp3 from "../components/hero3/Comp3.jsx";
import Flag from "../components/flag/Flag.jsx";
import LogoCarusel from "../components/logoCarusel/LogoCarusel.jsx";
import { StarryBackground } from "../Auth/components/StarryBackground.jsx";
import { LoginForm } from "../Auth/components/LoginForm.jsx";
import Auth from "./Auth/Auth.jsx";
import DashboardApp from "../Admin/dashboard/src/DashboardApp.jsx";

function Home() {
    return (
        <>
            {/*<DashboardApp />*/}
            <Header/>
            <Hero/>
            <CardsGrid/>
            <Comp2/>
            <Comp3/>
            <Flag/>
            <LogoCarusel/>
            <Footer/>
        </>
    );
}

export default Home;
