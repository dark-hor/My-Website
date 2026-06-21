import React from 'react';
import { NavLink } from 'react-router-dom';
import RouteCard from'../../assets/img/RouteCard.png';
interface IProps { };
interface IState { };
class RoutingCard extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">

                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-3">

                            <NavLink to="/formcontrol" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">
                                    <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        {/* Card 2 */}
                        <div className="col-3">

                            <NavLink to="/Messagecard" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        {/* Card 3 */}
                        <div className="col-3">

                            <NavLink to="/Shoppingcart" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        {/* Card 4 */}
                        <div className="col-3">

                            <NavLink to="/ShoppingArr" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                    <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/SMS" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Userinput" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Welcome" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Auth" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Hobbyselector" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/CustomerList" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Digitalwatch" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                    <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Userlist" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Contactapp" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Githubprofile" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/Message" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                        <div className="col-3">

                            <NavLink to="/card" style={{ textDecoration: 'none' }}>

                                <div className="card shadow-lg p-4 text-center rounded-4">

                                     <img
                                        src={RouteCard}
                                        alt="form"
                                        className="card-img-top rounded-4"
                                    />

                                </div>

                            </NavLink>

                        </div>

                    </div>

                </div>

            </React.Fragment>
        )
    }
}
export default RoutingCard;