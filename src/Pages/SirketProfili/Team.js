import React, { Component } from 'react'
import classes from './Team.module.css';
export default class Team extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center p-2 alert alert-danger border-0 rounded-0 ">Ekip</h2>
                <section id="team" className={classes.section}>

                    <div className="container-fluid  " style={{ 'width': '60%' }}>
                        <div className="row ">
                            <div className="col-lg-6 ">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img className="img-fluid" src={require("../../images/muhasebe.jpg").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Muhasebe</h4>
                                        <div>
                                            <span>mail@gmail.com</span>
                                            <p>fax burası</p>
                                        </div>
                                        <p>0543 233 23 23</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img className="img-fluid" src={require("../../images/muhasebe.jpg").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Muhasebe</h4>
                                        <div>
                                            <span>mail@gmail.com</span>
                                            <p>fax burası</p>
                                        </div>
                                        <p>0543 233 23 23</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img className="img-fluid" src={require("../../images/muhasebe.jpg").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Muhasebe</h4>
                                        <div>
                                            <span>mail@gmail.com</span>
                                            <p>fax burası</p>
                                        </div>
                                        <p>0543 233 23 23</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className={`${classes.member} d-flex align-items-center`}>
                                    <div className={classes.pic}>
                                        <img className="img-fluid" src={require("../../images/muhasebe.jpg").default} alt="aaa" />
                                    </div>

                                    <div className={classes.memberInfo}>
                                        <h4>Muhasebe</h4>
                                        <div>
                                            <span>mail@gmail.com</span>
                                            <p>fax burası</p>
                                        </div>
                                        <p>0543 233 23 23</p>
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
