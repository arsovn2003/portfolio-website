import { Component } from "../components/Component"
import { Footer } from "../shared/Footer"
import { Navbar } from "../shared/Navbar"
import { About } from "./About"
import { Contact } from "./Contact"
import { Projects } from "./Projects"

export const Home = () => {
    return (
        <div className="container-fluid px-0">
            <Navbar />
            <Component />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}