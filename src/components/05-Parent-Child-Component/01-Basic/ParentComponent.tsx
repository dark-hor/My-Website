import React from 'react';
import ChildComponent from './ChildComponent';
interface IProps { };
interface IState {
    pMessage: string;
    cMessage: string;
};
class ParentComponent extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            pMessage: "Hello im from Parent Component",
            cMessage: ''
        }
    }

    receiveData = (value: string): void => {
        this.setState({
            ...this.state,
            cMessage: value
        })
    };
    render() {
        return (
            <React.Fragment>
                <div className="section mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body bg-success text-white">
                                        <p className="h3">Parent Component</p>

                                        Parent Component:<small>{this.state.pMessage}</small><br />
                                        Child Component: <small>{this.state.cMessage}</small>

                                        <ChildComponent message={this.state.pMessage} sendData = {this.receiveData} />
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
export default ParentComponent;