import React from 'react';
interface IProps { };
interface IState { };
class LandingPage2 extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="landing">
                        <div className="wrapper">
                            <div className='d-flex flex-column text-center justify-content-center align-items-center h-100'>
                                <h3 className='display-4'>Ultimate Destination</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit quod doloribus rerum et? Dolores quam temporibus dolorum, vero fugit blanditiis maiores et esse accusamus laudantium corrupti odio nulla! Odio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default LandingPage2;