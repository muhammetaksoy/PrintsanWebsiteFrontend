import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classes from './Header.module.css';
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 ">
                <div className="container-fluid w-75 ">
                    <a className="navbar-brand" style={{ color: "#556270", fontWeight: "bold", fontSize: "28px" }} href="#">Printsan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <Link to="/Anasayfa" className="nav-link " aria-current="page">Anasayfa</Link>
                            </li>
                            <li className="nav-item me-4 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Şirket Profili
                                </a>
                                <ul className="dropdown-menu rounded-0" aria-labelledby="navbarDropdown">
                                    <li><Link to="/Hakkimizda" className="dropdown-item">Hakkımızda</Link></li>
                                    <li><Link to="/Politikalar" className="dropdown-item">Politikalar</Link></li>
                                    <li><Link to="/Ekip" className="dropdown-item">Ekip</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#">Ürünler</a>
                            </li>
                            <li className="nav-item me-4 dropdown">
                                <a className="nav-link" href="#">
                                    Üretim
                                </a>
                            </li>

                            <li className="nav-item me-4">
                                <a className="nav-link " href="#">Makina Parkuru</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link " href="#">Medya</a>
                            </li>
                            <li className="nav-item me-4 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kariyer
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Açık Pozisyonlar</a></li>
                                    <li><a className="dropdown-item" href="#">Başvuru</a></li>
                                </ul>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link " href="#">İletişim</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
