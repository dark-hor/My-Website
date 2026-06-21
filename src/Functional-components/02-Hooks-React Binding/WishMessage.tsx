import React, {useState} from 'react';
interface IProps{};
interface IState{
    message: string
};

let WishMessage : React.FC<IProps> = ()=>{
    let [messageState , setMessageState] = useState<IState>({
        message : 'Hello'
    });

    let sayGoodMorning =()=>{
        setMessageState({
            message: 'Good Morning'
        });
    };

    let sayGoodAfternoon = (value: string)=>{
        setMessageState({
            message: value
        });
    };

    // let sayGoodEvening =()=>{
    //     setMessageState({
    //         message : 'Good Evening'
    //     });
    // };

     return(
        <React.Fragment>
            <div className="section mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{messageState.message}</h3>
                                    <button onClick={sayGoodMorning} className='btn btn-success btn-sm'>Good Morning</button>
                                    <button onClick={sayGoodAfternoon.bind(this,'Good Afternoon')} className='btn btn-warning btn-sm'>Good Afternoon</button>
                                    <button onClick={() => setMessageState({message:'Good Evening'})} className='btn btn-success btn-sm'>Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     )
}
export default WishMessage;