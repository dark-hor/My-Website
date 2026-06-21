import React from 'react';
import { User } from './IUser';
import axios from 'axios';
interface IProps { };
interface IState {
    users: User[];
};
class UserList extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            users: [] as User[]
        }
    }
    componentDidMount(): void {
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        axios.get<User[]>(dataURL).then((response)=>{
            console.log(response.data);
            this.setState({
                users: response.data
            });
        }).catch((error)=>{
            console.log(error);
        })
    }
    

    render() {
        return (
            <React.Fragment>
                <h3>User List</h3>
                <div className="section mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className='table table-hover table-primary table-striped text-center'>
                                    <thead className='table-dark'>
                                        <tr>
                                            <th>SNO</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Website</th>
                                            <th>Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.users.length > 0 && this.state.users.map(user => {
                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td>{user.website}</td>
                                                        <td>{user.address.city}</td>
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
export default UserList;