import { Navbar } from "../shared/Navbar"
import '../styles/Projects.css'
import BrainsterLabs from '../images/brainsterlabs.png'
import StreetArtists from '../images/streetartists.png'

export const Projects = () => {
    return (
        <div className="Projects container-fluid text-white py-5">
            <div className="row px-lg-5 px-0">
                <div className="col-12 mb-5">
                    <div className="title text-lg-start text-center">
                        <h1 className="fw-bold">&lt;/Projects&gt;</h1>
                        <div className="line-div d-flex justify-content-lg-start justify-content-center">
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="col-lg-6 col-12">
                        <img src={BrainsterLabs} className="img-fluid"></img>
                    </div>
                    <div className="col-6"></div>
                </div>
                <div className="col-12">
                    <div className="col-lg-6 col-12 mt-5">
                        <img src={StreetArtists} className="img-fluid"></img>
                    </div>
                    <div className="col-lg-6 col-12">
                    </div>
                </div>
            </div>
        </div>
    )
}