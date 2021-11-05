import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
                <div class="container ">
                    <a class="navbar-brand" style={{ color: "#556270", fontWeight: "bold", fontSize: "28px" }} href="#">Printsan</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"> </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Anasayfa</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Şirket Profili
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Politikalar</a></li>
                                    <li><a class="dropdown-item" href="#">Sertifikalar</a></li>
                                    <li><a class="dropdown-item" href="#">Vizyon & Misyon</a></li>
                                    <li><a class="dropdown-item" href="#">Hakkımızda</a></li>
                                    <li><a class="dropdown-item" href="#">Ekip</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Ürünler</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Üretim
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Prosesler</a></li>
                                    <li><a class="dropdown-item" href="#">Laboratuvar</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link ">Makina Parkuru</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ">Medya</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kariyer
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Açık Pozisyonlar</a></li>
                                    <li><a class="dropdown-item" href="#">Başvuru</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link bg-danger px-4 text-white rounded ">İletişim</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
