import React, { HtmlHTMLAttributes } from 'react';
interface IProps { };
interface IState {
    fooding: boolean;
    coding: boolean;
    cricket: boolean;
};
class HobbySelector extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            fooding: false,
            coding: false,
            cricket: false
        }

    }
    updateCheck =(event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            ...this.state,
            [event.target.name] : event.target.checked
        })

    }
    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">
                                        <p className="h3">Hobby Selector</p>
                                    </div>
                                    <div className="card-body bg-light">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <form >
                                                    <div className="form-check">
                                                        <input 
                                                        onChange={this.updateCheck}
                                                        name='fooding' className="form-check-input" type="checkbox" value="" />
                                                        <label className="form-check-label">
                                                            Fooding
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input 
                                                        onChange={this.updateCheck}
                                                        name='coding' className="form-check-input" type="checkbox" value="" />
                                                        <label className="form-check-label" >
                                                            Coding
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                        onChange={this.updateCheck} 
                                                         name='cricket' className="form-check-input" type="checkbox" value="" />
                                                        <label className="form-check-label" >
                                                            Cricket
                                                        </label>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="col-md-8">
                                                {
                                                    this.state.fooding &&
                                                    <div className="card mb-2 animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <div className="h3">Fooding</div>
                                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, alias!</p>
                                                        </div>
                                                    </div>
                                                }

                                                {
                                                    this.state.coding &&
                                                    <div className="card mb-2 animated jello">
                                                        <div className="card-body bg-warning text-white">
                                                            <div className="h3">Coding</div>
                                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, alias!</p>
                                                        </div>
                                                    </div>
                                                }

                                                {
                                                    this.state.cricket &&
                                                    <div className="card mb-2 animated jello">
                                                        <div className="card-body bg-danger text-white">
                                                            <div className="h3">Cricket</div>
                                                            <p className="card-text text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, alias!</p>
                                                        </div>
                                                    </div>
                                                }

                                            </div>
                                        </div>
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
export default HobbySelector;