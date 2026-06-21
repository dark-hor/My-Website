import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps{};
interface IState{};

class Navbar extends React.Component<IProps,IState>{

    constructor(props:IProps) {
        super(props);
    }

    render(){
        return(
           <React.Fragment>

            <div className="navbar navbar-dark bg-primary navbar-expand-sm">

                <div className="container">

                    <NavLink to="/" className="navbar-brand">
                        <i className='fa fa-snowflake'>React Routing</i>
                    </NavLink>

                    <div className="collapse navbar-collapse">

                        <ul className='navbar-nav'>

                            <li className='nav-item'>
                                <NavLink to="/employees/list" className="nav-link">
                                    Employees
                                </NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to="/stocks/list" className="nav-link">
                                    Stocks
                                </NavLink>
                            </li>

                            <li nav-item>
                                <NavLink to="/aboutus" className="nav-link" >
                                    About us
                                </NavLink>
                            </li>

                        </ul>

                        <ul className='navbar-nav d-flex align-items-end flex-row'>

                            <li className='nav-item'>
                                <NavLink to="/users/register" className="nav-link">
                                    Register
                                </NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to="/users/login" className="nav-link">
                                    Login
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

           </React.Fragment>
        )
    }
}

export default Navbar;