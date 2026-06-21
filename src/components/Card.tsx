import React from 'react';
import Card1 from '../assets/img/Card-1.jpg';
import Card2 from '../assets/img/Card-2.jpg';
import Card3 from '../assets/img/Card-3.jpg';
import Card4 from '../assets/img/Card-4.jpg';
import Card5 from '../assets/img/Card-5.jpg';
// import './Card.css';

interface IProps{
    // msg: string;
}
interface IState{}

class Card extends React.Component<IProps,IState>{
     constructor(props:IProps){
        super(props)
      }
      render(){
        return(
            <React.Fragment>
                {/* <div className="card">
                    <div className="card-body">
                        <h2>{this.props.msg}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius maiores accusamus earum molestiae eaque fugiat reprehenderit labore debitis. Debitis deleniti excepturi, voluptatem velit aliquam doloremque optio sapiente modi quae.</p>
                    </div>
                </div> */}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <img src={Card1} />
                                <div className="card-body">
                                    <p className="h3">Card</p>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus provident excepturi iusto nesciunt asperiores laboriosam saepe cupiditate incidunt amet illum dolore eligendi, ad tempora nostrum totam quis blanditiis suscipit sint?</p>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-3">
                            <div className="card">
                                <img src={Card2} />
                                <div className="card-body">
                                    <p className="h3">Card</p>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus provident excepturi iusto nesciunt asperiores laboriosam saepe cupiditate incidunt amet illum dolore eligendi, ad tempora nostrum totam quis blanditiis suscipit sint?</p>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-3">
                            <div className="card">
                                <img src={Card3} />
                                <div className="card-body">
                                    <p className="h3">Card</p>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus provident excepturi iusto nesciunt asperiores laboriosam saepe cupiditate incidunt amet illum dolore eligendi, ad tempora nostrum totam quis blanditiis suscipit sint?</p>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-3">
                            <div className="card">
                                <img src={Card4} />
                                <div className="card-body">
                                    <p className="h3">Card</p>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus provident excepturi iusto nesciunt asperiores laboriosam saepe cupiditate incidunt amet illum dolore eligendi, ad tempora nostrum totam quis blanditiis suscipit sint?</p>
                                </div>
                            </div>
                        </div>
                         <div className="col-md-3">
                            <div className="card">
                                <img src={Card5} />
                                <div className="card-body">
                                    <p className="h3">Card</p>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus provident excepturi iusto nesciunt asperiores laboriosam saepe cupiditate incidunt amet illum dolore eligendi, ad tempora nostrum totam quis blanditiis suscipit sint?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
           
            </React.Fragment>
        )
      }
}
export default Card;