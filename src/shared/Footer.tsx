import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export const Footer = () => {
    return (
        <div className="Footer container-fluid py-5 mt-lg-0 mt-5">
            <div className="row">
                <div className="col-12">
                    <ul className='d-lg-flex text-center justify-content-center list-inline lh-2'>
                        <li>
                            <Link to={"/"} className='text-decoration-none text-white'>
                                <span>&lt;/</span>Home<span>&gt;</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"} className='ms-lg-5 text-decoration-none text-white'>
                                <span>&lt;/</span>About<span>&gt;</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/projects"} className='ms-lg-5 text-decoration-none text-white'>
                                <span>&lt;/</span>Projects<span>&gt;</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"} className='ms-lg-5 text-decoration-none text-white'>
                                <span>&lt;/</span>Contact<span>&gt;</span>
                            </Link>
                        </li>
                    </ul>
                    <hr className='text-white mx-5'></hr>
                    <p className='text-white text-center'>&copy; Nikola Arsov</p>
                </div>
            </div>
        </div>
    )
}