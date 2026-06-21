import React from 'react';
interface IProps{};
interface IState{
    currenttime : string;
};
class Watch extends React.Component<IProps,IState>{

   private timer: NodeJS.Timeout | undefined;

    constructor(props:IProps) {
        super(props);
        this.state = {
            currenttime: new Date().toLocaleTimeString()
        }
    }
    //when the component is fully loaded in dom
    componentDidMount(): void {
        setInterval(()=>{
            this.setState({
                currenttime:new Date().toLocaleTimeString()
            })
        },1000)
    }

    //when the component is removed from the dom
    componentWillUnmount(): void {
        if(this.timer){
            clearInterval(this.timer);
        }
    }
    render(){
        return(
           <React.Fragment>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-warning text-white text-center">
                                    Digital Watch
                                </div>
                                <div className="card-body">
                                    <h4 className="display-4 text-center">{this.state.currenttime}</h4>
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
export default Watch;