import React from 'react';
interface IProps { };
interface IState {
    Username: string
};
class UserInput extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            Username: 'john'
        }
    }
    changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
       this.setState({
        Username:event.target.value
       })
    }
    render() {
        return (
            <React.Fragment>

                <div className="section mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <h3>Change user Name</h3>
                                </div>
                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group">
                                            <input type="text"
                                                onChange={this.changeInput}
                                                value={this.state.Username}
                                                className="form-control" />
                                        </div>
                                    </form>
                                    <p className='h3'>{this.state.Username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default UserInput;