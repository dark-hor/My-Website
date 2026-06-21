import React from 'react';
interface IProps { }
interface IState { }

class About extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-primary">About Us</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga cupiditate, quis, perspiciatis quasi voluptatum aliquid blanditiis dignissimos beatae eius saepe quos eligendi accusantium vel adipisci quas, labore numquam sapiente!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        NAME : <span className="font-weight-bold text-primary">React Routing</span>
                                    </li>
                                    <li className="list-group-item">

                                    Version : <span className="font-weight-bold text-primary">1.0.2</span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default About;