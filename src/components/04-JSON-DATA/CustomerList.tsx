import React from 'react';
import { CustomerStore, ICustomer } from './ICustomer';
interface IProps { };
interface IState {
    customers: ICustomer[],
};
class CustomerList extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            customers: CustomerStore.customerData
        }

    }
    render() {
        return (
            <React.Fragment>
                <h3>Customer Data</h3>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">Customer Details</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente ratione perferendis itaque tempore nisi quam! Doloribus culpa quas quasi laudantium, fugiat odio pariatur nemo, animi in, praesentium sapiente! Atque!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover text-center table-primary">
                                    <thead className='bg-dark text-white'>

                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Location</th>

                                    </thead>
                                    <tbody>
                                        {
                                            this.state.customers.map((customer) => {
                                                return (
                                                    <tr>
                                                        <td>{customer.login.uuid.substring(customer.login.uuid.length - 5)}</td>
                                                        <td>
                                                            <img src={customer.picture.large} alt="" width="50" height="50" />
                                                        </td>
                                                        <td>{customer.name.first}{customer.name.last}</td>
                                                        <td>{customer.dob.age}</td>
                                                        <td>{customer.email}</td>
                                                        <td>{customer.location.city}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default CustomerList;