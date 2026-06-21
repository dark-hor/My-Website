import React from 'react';
interface IProps{
    message : string
    sendData : (value: string) => void 
};
interface IState{
    cMessage : string
};
class ChildComponent extends React.Component<IProps,IState>{
    /**
     *
     */
    constructor(props:IProps) {
        super(props);
        this.state = {
            cMessage : "Hello im from child component"
        }
    }
    updateInput =()=>{
        // alert("hello")
      this.props.sendData(this.state.cMessage)
    };
    render(){
        return(
         <React.Fragment>
              <div className="section mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body bg-primary text-white">
                                    <p className="h3">Child Component</p>
                                    <small>From Parent : {this.props.message}</small><br />
                                    <small>From Child : {this.state.cMessage}</small>
                                    <button className='btn btn-warning btn-sm'
                                    onClick={this.updateInput}>Send To Parent</button>
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
export default ChildComponent;