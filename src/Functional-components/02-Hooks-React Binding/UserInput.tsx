import React, { useState } from 'react';
interface IProps { };
interface IState {
    Username: string;
};

let UserInputH: React.FC<IProps> = () => {
    let [userState, setUserState] = useState<IState>({
        Username: 'john'
    });

    let changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserState({
            Username: event.target.value
        });
    };

    return (
        <React.Fragment>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Change User Name</h3>
                                </div>
                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group">
                                            <input type="text" onChange={changeInput}
                                                // value={userState.Username}// for showing in input column only
                                                className='form-control' />
                                        </div>
                                    </form>
                                    <p className="h3">{userState.Username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default UserInputH;