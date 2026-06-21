import React from 'react';
interface IUser {
username:string,
email:string,
password:string,
designation:string,
bio:string,
terms:boolean,
};
interface IProps{};

interface IState{
    user:IUser
};

class FormControl extends React.Component<IProps,IState>{
    /**
     *
     */
    constructor(props: IProps) {
        super(props);
        this.state = {
            user : {
                username:'',
                email:'',
                password:'',
                designation:'',
                bio:'',
                terms:false
            }
        };
        
    }

    updateInput =(event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        });
    };

    updateCheck = (event: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name]:event.target.checked
            }
        });
    };
    submitRegister = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(this.state.user);
    }

    render(){
        let {user} = this.state;
        return(
          <React.Fragment>
            <div className="section">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h3">Registration</p>
                            </div>
                            <div className="card-body bg-light">
                               <form onSubmit={this.submitRegister}>

                                <div className="form-group mb-2">
                                    <input name='username'
                                     value={user.username} 
                                    onChange={this.updateInput}
                                     type="text" className='form-control' placeholder='Username'/>
                                </div>

                                <div className="form-group mb-2">
                                    <input name='email'
                                    value={user.email}
                                    onChange={this.updateInput}
                                    type='text' className='frorm-control' placeholder='Email' />
                                </div>

                                <div className="form-group mb-2">
                                    <input name='password'
                                     value={user.password}
                                      onChange={this.updateInput}
                                     type="text" className='form-control' placeholder='Password' />
                                </div>

                                <div className="form-group mb-2">
                                    <select name="designation" value={user.designation}
                                     onChange={this.updateInput}
                                     className='form-control'>
                                        <option value="">Select Designation</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                        <option value="Tech Lead">Tech Lead</option>
                                        <option value="Manager">Manager</option>
                                     </select>
                                </div>
                                <div className="form-group">
                                    <textarea name="bio" value={user.bio}
                                     onChange={this.updateInput}
                                     rows={4} className='form-control' placeholder='Bio'/>
                                </div>
                                <div className="form-check mb-2">
                                    <input name='terms' onChange={this.updateCheck} type="checkbox" 
                                    className='form-check-input'/>
                                    <label className='form-check-label'>Accept Terms</label>
                                </div>
                                <div className="form-group mb-2">
                                    <input type="submit" className='btn btn-secondary btn-sm' value="Register" />
                                </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </React.Fragment>
        )
    }
}
export default FormControl;