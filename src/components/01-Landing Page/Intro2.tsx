import React from 'react';
interface IProps{};
interface IState{};
class Intro2 extends React.Component<IProps,IState>{

    constructor(props:IProps) {
        super(props);
        
    }
    render(){
        return(
            <section className='text-white bg-teal p-5'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>Welcome to the Holiday World</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus et a beatae distinctio optio facilis fuga? Distinctio, iure sequi. Id exercitationem fugit corporis? Quae, ipsa rerum omnis non alias perspiciatis?</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Intro2