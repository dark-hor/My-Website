import React, { useState } from 'react';
interface IProps { };
interface IState {
    img: string;
    name: string;
    age: number;
    address: string;
    college: string;
};

let MessageCard: React.FC<IProps> = () => {
    let [messageState, setMessageState] = useState<IState>({
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIy1AAKvj6SSQpqAqjtnLEBbR-uIDnsf3RnQ&s",
        name: "Arjun reddy",
        age: 30,
        address: "Gwalior",
        college: "GRMC"
    });
     return(
        <React.Fragment>
            <div className="section mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Student Details</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={messageState.img} alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <ul className='list-group'>
                                                <li className='list-group-item'>
                                                    <strong>{messageState.name}</strong>
                                                </li>
                                                <li className='list-group-item'>
                                                    <strong>{messageState.age}</strong>
                                                    </li>
                                                <li className='list-group-item'>
                                                <strong>{messageState.college}</strong>
                                                </li>
                                                <li className='list-group-item'>
                                                    <strong>{messageState.address}</strong>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     )
}
export default MessageCard;
