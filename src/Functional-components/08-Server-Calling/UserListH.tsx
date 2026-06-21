import React, { useEffect, useState } from 'react';
import { User } from './IUser';
import axios from 'axios';
interface IProps { };
interface IState {
    users: User[]
};

let UserListH: React.FC<IProps> = () => {
    let [setUser, setUserState] = useState<IState>({
        users: [],
    });

    useEffect(() => {
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        axios.get<User[]>(dataURL).then((response) => {
            console.log(response.data);
            setUserState({
                users: response.data
            });
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <React.Fragment>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h3>User List</h3>
                                </div>
                                <div className="card-body">
                                    <table className='table table-hover table-striped table-bordered text-center'>
                                        <thead>
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
                                                setUser.users.length>0 &&
                                                setUser.users.map((user)=>{
                                                    return(
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
                </div>
            </div>
        </React.Fragment>
    )
}
export default UserListH;