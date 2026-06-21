import React from 'react';
import CardHelper from './CardHelper';
import Card1 from '../../assets/img/Card-1.jpg';
import Card2 from '../../assets/img/Card-2.jpg';
import Card3 from '../../assets/img/Card-3.jpg';
import Card4 from '../../assets/img/Card-4.jpg';

interface IProps{};
interface IState{};
class CountryCard2 extends React.Component<IProps,IState>{
  
    constructor(props:IProps) {
        super(props);
        
    }
    render(){
        let cities = ['germany','poland','france','paris','england']
        return(
            <React.Fragment>
                <section className='m-3 p-3'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <CardHelper img={Card1} title={cities[0]}/>
                            </div>
                            <div className="col-md-3">
                                <CardHelper img={Card2} title={cities[1]}/>
                            </div>
                            <div className="col-md-3">
                                <CardHelper img={Card3} title={cities[2]}/>
                            </div>
                            <div className="col-md-3">
                                <CardHelper img={Card4} title={cities[3]}/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default CountryCard2;