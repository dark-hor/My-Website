import React from 'react';
interface IProps{};
interface IState{
    text:string,
    charCount:number,
    maxCount:number
};
class SMSApp extends React.Component<IProps,IState>{
    /**
     *
     */
    constructor(props:IProps) {
        super(props);
        this.state = {
            text:'',
            charCount:100,
            maxCount:100
        }
        
    }
    updateText =(event: React.ChangeEvent<HTMLTextAreaElement>)=>{
       this.setState({
        ...this.state,
        text:event.target.value,
        charCount: this.state.maxCount - event.target.value.length
       })
    }
    render(){
        return(
         <React.Fragment>
            <div className="section mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-warning text-white">
                                <h3>SMS App</h3>
                            </div>
                            <div className="card-body">
                               <form action="">
                                    <div className="form-group">
                                        <textarea 
                                    maxLength={this.state.maxCount}
                                    // value={this.state.text}
                                    onChange={this.updateText}
                                    rows={4} placeholder="Your Text Here" className='form-control' />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="h3">The Character Reamining : 
                                    <span className='font-weight-bold'>{this.state.charCount}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </React.Fragment>
        )
    }
}
export default SMSApp;