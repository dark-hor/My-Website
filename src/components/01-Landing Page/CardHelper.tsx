import React from 'react';

interface IProps{
    img:string;
    title:string;
};

interface IState{};
class CardHelper extends React.Component<IProps,IState>{
   
    constructor(props:IProps) {
        super(props);
        
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <div className="card">
                        <img src={this.props.img} alt="" className='img-fluid'/>
                        <div className="card-body">
                            <h3>{this.props.title}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nesciunt recusandae corrupti aliquid est, commodi in, omnis eaque culpa doloremque possimus, sunt officiis dolorum corporis reprehenderit at enim explicabo adipisci.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default CardHelper;