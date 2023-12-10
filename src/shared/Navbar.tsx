import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Logo from '../images/logo.png'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="col-6 col-md-4">
                    <a className="navbar-brand" href="#">
                        <Link to={"/"}>
                            <img src={Logo} className='w-100' />
                        </Link>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <a href='#home'><span>&lt;/</span>Home<span>&gt;</span></a>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <a href='#about'><span>&lt;/</span>About<span>&gt;</span></a>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to={"/projects"} className='text-decoration-none'>
                                    <span>&lt;/</span>Projects<span>&gt;</span>
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to={"/contact"} className='text-decoration-none'>
                                    <span>&lt;/</span>Contact<span>&gt;</span>
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}