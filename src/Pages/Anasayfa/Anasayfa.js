import React, { Component } from 'react'
import Slider from "Pages/Anasayfa/Components/Slider";
import Company from "Pages/Anasayfa/Components/Company";
import Counter from "Pages/Anasayfa/Components/Counter";
import Clients from "Pages/Anasayfa/Components/Clients";
import Video from "Pages/Anasayfa/Components/Video";
import Vision from "Pages/Anasayfa/Components/Vision";
import PopulerProducts from "Pages/Anasayfa/Components/PopulerProducts";
export default class Anasayfa extends Component {
    render() {
        return (
            <div>                
                <Slider />
                <Clients />
                <Company />
                <Vision />
                <PopulerProducts />
                <Counter />
                <Video /> 
            </div>
        )
    }
}
