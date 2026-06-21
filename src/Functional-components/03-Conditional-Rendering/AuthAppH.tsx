import React , {useState} from 'react';
interface IProps{};
interface IState{
    isLoggedin : boolean;
};

let AuthAppH : React.FC<IProps>=()=>{
    let [setAuth , setAuthState] = useState<IState>({
       isLoggedin : false
    });

    let Login =()=>{
        setAuthState({
            isLoggedin : true
        })
    }

    let Logout=()=>{
        setAuthState({
            isLoggedin : false
        })
    }
    return(
        <React.Fragment>
            <div className="section mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body bg-light">
                                    {
                                        setAuth.isLoggedin ? 
                                        <button onClick={Logout} className='btn btn-warning btn-sm'>Logout</button>:
                                        <button onClick={Login} className='btn btn-success btn-sm'>Login</button>
                                    }
                                    {
                                        setAuth.isLoggedin ? <h3>Welcome User</h3>: <h3>Welcome Guest</h3>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )


}

export default AuthAppH;