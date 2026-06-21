import React from 'react';
interface IProps{};
interface IState{
    msg:string;
};
class Welcome extends React.Component<IProps,IState>{
   
    constructor(props:IProps) {
        super(props);

        this.state = {
            msg: "Hello"
        }
        
    }
    sayGoodMorning =() =>{
        this.setState({
            msg:"Good Morning"
        });
        // alert("Good Morning")
    }

    sayGoodAfternoon =(value : string) =>{
        this.setState({
            msg:value
        });
    }

    sayGoodEvening = () =>{
        this.setState({
            msg : "Good Evening"
        })
    }

    render(){
        return(
          <React.Fragment>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className='text-center'>{this.state.msg}</h3>
                                    <button onClick={this.sayGoodMorning} className='btn btn-success btn-sm'>Good Morning</button>
                                    <button onClick={this.sayGoodAfternoon.bind(this,'Good Afternoon')} className='btn btn-success btn-sm'>Good Afternoon</button>
                                    <button onClick={this.sayGoodEvening} className='btn btn-success btn-sm'>Good Evening</button>
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
export default Welcome;