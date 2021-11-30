import React, { Component } from 'react'
import classes from './Team.module.css';
export default class Team extends Component {
    render() {
        return (
            <div>

                <section id="team" className={classes.section}>
                    <h2 className="text-center container-fluid  p-2 alert alert-danger border-0 rounded-0 " style={{ "width": "85%", "fontSize": "2.8rem" }}>Ekip</h2>
                    <div className="container-fluid" style={{ "width": "85%" }}>

                        <div className="row ">
                            <div className="col-lg-4 mt-4">
                                <div className={`${classes.member} d-flex align-items-center `}>
                                    <div className={classes.pic}>
                                        <img src={require("../../images/ekip_ikonlar/santrall.png").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Santral</h4>
                                        <div>
                                            <span><strong>Mail: </strong>santral@printsan.com</span>
                                        </div>
                                        <p><strong>Dahili No: </strong>111-112</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img src={require("../../images/ekip_ikonlar/müşterihiz.jpg").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Sürdürülebilirlik</h4>
                                        <h4> Sorumlusu</h4>
                                        <div>
                                            <span><strong>Mail: </strong>ik@printsan.com</span>
                                        </div>
                                        <p><strong>Dahili No: </strong>114</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img src={require("../../images/ekip_ikonlar/muhasebe.png").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Muhasebe</h4>
                                        <div>
                                            <span><strong>Mail </strong>muhasebe@printsan.com</span>
                                        </div>
                                        <strong>Dahili No </strong>
                                        <p>115</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img src={require("../../images/ekip_ikonlar/insankaynaklari.png").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>İnsan Kaynakları</h4>
                                        <div>
                                            <span><strong>Mail: </strong>ik@printsan.com</span>
                                        </div>
                                        <p><strong>Dahili No: </strong>127</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 mt-4">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img src={require("../../images/ekip_ikonlar/imalatmuduru.png").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>İmalat Müdürü</h4>
                                        <div>
                                            <span><strong>Mail: </strong>hakan@printsan.com</span>
                                        </div>
                                        <p><strong>Dahili No: </strong>135</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 ">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img src={require("../../images/ekip_ikonlar/müşterihiz.jpg").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>İrsaliye Sevkiyat</h4>
                                        <div>
                                            <span><strong>Mail: </strong>sevkiyat@printsan.com</span>
                                        </div>
                                        <p><strong>Dahili No: </strong>137</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img src={require("../../images/ekip_ikonlar/desen.png").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Desen</h4>
                                        <div>
                                            <span><strong>Mail: </strong>desen@printsan.com</span>
                                        </div>
                                        <p><strong>Dahili No: </strong>139</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img src={require("../../images/ekip_ikonlar/musteritemsilcisi.png").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Müşteri Temsilcisi</h4>
                                        <div>
                                            <span><strong>Mail: </strong>musteritemsilcisi@printsan.com</span>
                                        </div>
                                        <p><strong>Dahili No: </strong>140</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                )
            </div>

        )
    }
}
