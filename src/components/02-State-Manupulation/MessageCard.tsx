import React from 'react';
interface IProps { };
interface IState {
    img: string;
    name: string;
    age: number;
    address: string;
    college: string;
};
class MessageCard extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIy1AAKvj6SSQpqAqjtnLEBbR-uIDnsf3RnQ&s",
            name: "Arjun reddy",
            age: 30,
            address: "Gwalior",
            college: "GRMC"

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">

                                <div className="card-header bg-secondary text-white">
                                    <h4>Student Details</h4>
                                </div>

                                <div className="card-body bg-light">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img
                                                src={this.state.img}
                                                alt=""
                                                className='img-fluid img-thumbnail'
                                            />
                                        </div>

                                        <div className="col-md-8">
                                            <ul className='list-group'>
                                                <li className='list-group-item'>
                                                    Name: <strong>{this.state.name}</strong>
                                                </li>

                                                <li className='list-group-item'>
                                                    Age: <strong>{this.state.age}</strong>
                                                </li>

                                                <li className='list-group-item'>
                                                    Address: <strong>{this.state.address}</strong>
                                                </li>

                                                <li className='list-group-item'>
                                                    College: <strong>{this.state.college}</strong>
                                                </li>
                                            </ul>
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
}
export default MessageCard;