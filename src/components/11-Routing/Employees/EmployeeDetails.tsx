import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { IEmployee } from "./Models/IEmployee";

interface IProps {
    employeeId: string;
}

interface IState {
    selectedEmployee: IEmployee | undefined;
}

class EmployeeDetails extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            selectedEmployee: undefined
        };
    }

    componentDidMount(): void {

        let dataURL = 'https://gist.githubusercontent.com/dark-hor/0cb965b3b91369878aae8581388ea9dd/raw/a6588c90632607a671126c428e04d5b5ac792304/gistfile1.txt';

        axios.get<IEmployee[]>(dataURL).then((response) => {

            let employees: IEmployee[] = response.data;

            let singleEmployee = employees.find(employee =>
                employee.login.uuid === this.props.employeeId
            );

            this.setState({
                selectedEmployee: singleEmployee
            });

        }).catch((error) => {
            console.error(error);
        });
    }

    render() {

        let { selectedEmployee } = this.state;

        return (
            <React.Fragment>

                <pre>{this.props.employeeId}</pre>

                <pre>{JSON.stringify(this.state.selectedEmployee)}</pre>

                <section className="mt-3">
                    <div className="container">
                        <h3 className="text-primary">Employee Details</h3>
                    </div>
                </section>

                <section>
                    {
                        selectedEmployee ? (

                            <div className="container">

                                <div className="card">

                                    <div className="card-header bg-primary text-white">

                                        <h3>
                                            {selectedEmployee.name.first} {selectedEmployee.name.last}
                                        </h3>

                                    </div>

                                    <div className="card-body">

                                        <div className="row align-items-center">

                                            <div className="col-md-2">

                                                <img
                                                    src={selectedEmployee.picture.large}
                                                    className="img-fluid img-thumbnail"
                                                    alt=""
                                                    width="170"
                                                    height="100"
                                                />

                                            </div>

                                            <div className="col-md-6">

                                                <ul className="list-group">

                                                    <li className="list-group-item">
                                                        AGE: {selectedEmployee.dob.age} yrs
                                                    </li>

                                                    <li className="list-group-item">
                                                        Phone: {selectedEmployee.phone}
                                                    </li>

                                                    <li className="list-group-item">
                                                        Email: {selectedEmployee.email}
                                                    </li>

                                                    <li className="list-group-item">
                                                        Location: {selectedEmployee.location.city}
                                                    </li>

                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="card-footer">

                                        <NavLink
                                            to="/employees/list"
                                            className="btn btn-primary btn-sm"
                                        >
                                            Back
                                        </NavLink>

                                    </div>

                                </div>

                            </div>

                        ) : null
                    }
                </section>

            </React.Fragment>
        );
    }
}

export let EmployeeDetailsWrapper = () => {
let { employeeId } = useParams<{ employeeId: string }>();
return <EmployeeDetails employeeId={employeeId!} />;
};

export default EmployeeDetails;

