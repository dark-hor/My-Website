import React from 'react';
interface IProps { };
interface IState { };
class Navebar2 extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                    <a href="/" className='navbar-brand'>Ultimate Destination</a>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navebar2