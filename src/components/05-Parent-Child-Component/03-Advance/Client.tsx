import React from 'react';
interface IProps{
    serverMessage : string;
    setData:(value:string)=>void
};

interface IState{
    clientMessage:string;
};
class Client extends React.Component<IProps,IState>{
    /**
     *
     */
    constructor(props:IProps) {
        super(props);
        this.state = {
            clientMessage:''
        }
    }
    submitClient = (e: React.FormEvent<HTMLElement>)=>{
        e.preventDefault();
        this.props.setData(this.state.clientMessage);
    }
    render(){
        return(
           <React.Fragment>
             <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className='h4'>Client Card Component</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.submitClient}>
                                    <div className="form-group">
                                        <input type="text" value={this.state.clientMessage}
                                        onChange={e => this.setState({clientMessage: e.target.value})}
                                        className='form-control' />
                                    </div>
                                    <div>
                                        <input type="submit"  className='btn btn-success brn-sm' value="send"/>
                                    </div>
                                </form>
                            </div>
                            <div className='card-footer bg-dark text-white'>
                                From Client: <span className='font-weight-bold'>{this.state.clientMessage}</span><br />
                                From Server: <span className='font-weight-bold'>{this.props.serverMessage}</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </React.Fragment>
        )
    }
}
export default Client;