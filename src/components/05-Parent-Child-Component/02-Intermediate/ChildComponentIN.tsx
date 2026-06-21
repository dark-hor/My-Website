import React, { HtmlHTMLAttributes } from 'react';
interface IProps {
    pText: string
    sendData: (value: string) => void;
};

interface IState {
    cText: string;
};
class ChildComponentIN extends React.Component<IProps, IState> {
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            cText: ''
        }
    }
    updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            cText: event.target.value
        });
        this.props.sendData(event.target.value);
    };




    render() {
        return (
            <React.Fragment>
                <div className="section mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body bg-primary text-white">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <form action="" className='form-inline'>
                                                    <div className="form-group">
                                                        <input type="text" value={this.state.cText}
                                                            onChange={this.updateInput} className='form-control' placeholder='Child Component' />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <small className='text-white font-weight-bold'>{this.props.pText}</small>
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
export default ChildComponentIN;