import React from 'react';
interface IProps { }
interface IState { }
class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="d-flex flex-column justify-content-center

align-items-center h-100 text-center">
                            <h4 className="display-3">React Routing</h4>

                            <p>Lorem </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;