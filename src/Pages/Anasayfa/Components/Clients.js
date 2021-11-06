import classes from './Clients.module.css';

const Clients = () => {
    let className = classes.img;
    return(
        <section className={classes.section}>
            <div className="container">

                <div className="row">

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img className={className} src={require("../../../images/client-1.png").default}  alt="aaa"/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img className={className} src={require("../../../images/client-2.png").default}  alt="aaa"/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img className={className} src={require("../../../images/client-3.png").default}  alt="aaa"/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img className={className} src={require("../../../images/client-4.png").default}  alt="aaa"/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img className={className} src={require("../../../images/client-5.png").default}  alt="aaa"/>
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                    <img className={className} src={require("../../../images/client-6.png").default}  alt="aaa"/>
                </div>

                </div>

            </div>
        </section>
    )
}
export default Clients;