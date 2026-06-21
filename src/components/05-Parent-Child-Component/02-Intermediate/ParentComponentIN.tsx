import React, { HtmlHTMLAttributes } from 'react';
import ChildComponentIN from './ChildComponentIN';
interface IProps{};
interface IState{
    pText : string;
    cText : string;
};
class ParentComponentIN extends React.Component<IProps,IState>{
    /**
     *
     */
    constructor(props:IProps) {
        super(props);
        this.state = {
            pText :'',
            cText :''
        }
    }
    updateInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            pText: event.target.value
        })
    };

    receiveData = (value: string):void =>{
        this.setState({
            ...this.state,
            cText:value
        });
    };

    render(){
        return(
            <React.Fragment>
                <div className="section mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body bg-warning text-white">
                                          <div className="row">
                                            <div className="col-md-4">
                                                <form action="" className='form-inline'>
                                                    <div className="form-group">
                                                        <input type="text" value={this.state.pText}
                                                         onChange={this.updateInput} 
                                                         className='form-control' placeholder='Parent Component' />
                                                    </div>
                                                </form>
                                            </div>
                                          </div>
                                          {/* <small className='text-white font-weight-bold'>{this.state.cText}</small> */}
                                          <small className='text-white font-weight-bold'>{this.state.cText}</small>
                                          <ChildComponentIN pText={this.state.pText} sendData={this.receiveData}/>
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
export default ParentComponentIN;