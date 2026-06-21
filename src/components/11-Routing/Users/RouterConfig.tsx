import React from 'react';
import Employees from '../Employees/Employees';
import {Routes,Route} from "react-router-dom";
import Home from '../Layout/Home';
import About from '../Layout/Aboutus';
import { IEmployee } from '../Employees/Models/IEmployee';
import { EmployeeDetailsWrapper } from '../Employees/EmployeeDetails';

const RouterConfig: React.FC = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<About/>}/>
             <Route path='/employees/:employeeId' element={<EmployeeDetailsWrapper/>}/>
            <Route path='/employees/list' element={<Employees sendContact={function (contact: IEmployee): void {
                throw new Error('Function not implemented.');
            } }/>}/>


        </Routes>
    )
}
export default RouterConfig;