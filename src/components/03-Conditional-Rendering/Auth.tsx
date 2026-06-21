import React from 'react';
interface IProps{};
interface IState{
    isLoggedin: boolean
};
class Auth extends React.Component<IProps,IState>{
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoggedin: false
        };
    }
    login =() => {
        this.setState({
            isLoggedin : true
        })
    }

    logout =() => {
        this.setState({
            isLoggedin : false
        })
    }

    render(){
        return(
            <React.Fragment>
              <div className="section mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body bg-light">
                                    {
                                        this.state.isLoggedin ? 
                                        <button onClick={this.logout} className='btn btn-warning btn-sm'>Logout</button> :
                                        <button onClick={this.login} className='btn  btn-success btn-sm'>Login</button>
                                    }

                                    {
                                        this.state.isLoggedin ? <h3>Welcome User</h3> : <h3>Welcome Guest</h3>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </React.Fragment>
        );
    }
}
export default Auth;