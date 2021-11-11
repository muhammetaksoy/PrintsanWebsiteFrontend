import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 fixed-top">
                <div className="container-fluid w-75 ">
                    <a className="navbar-brand" style={{ color: "#556270", fontWeight: "bold", fontSize: "28px" }} href="#">Printsan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <a className="nav-link " aria-current="page" href="#">Anasayfa</a>
                            </li>
                            <li className="nav-item me-4 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Şirket Profili
                                </a>
                                <ul className="dropdown-menu rounded-0" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Politikalar</a></li>
                                    <li><a className="dropdown-item" href="#">Sertifikalar</a></li>
                                    <li><a className="dropdown-item" href="#">Vizyon & Misyon</a></li>
                                    <li><a className="dropdown-item" href="#">Hakkımızda</a></li>
                                    <li><a className="dropdown-item" href="#">Ekip</a></li>
                                </ul>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#">Ürünler</a>
                            </li>
                            <li className="nav-item me-4 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Üretim
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Prosesler</a></li>
                                    <li><a className="dropdown-item" href="#">Laboratuvar</a></li>
                                </ul>
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
