import React from 'react';
import { IProfile } from '../Models/IProfile';
interface IProps{
    profile : IProfile
};
interface IState{};
class GithubProfileCard extends React.Component<IProps,IState>{
    /**
     *
     */
    constructor(props:IProps) {
        super(props);
        
    }
    render(){
        let {profile} = this.props
        return(
           <React.Fragment>
            <div className="section">
                <div className="card">
                    <img src={profile.avatar_url} alt="" className='img-fluid'/>
                    <div className="card-body">
                        <p className="h4">{profile.name}</p>
                        <small>{profile.bio}</small><br />
                        <a href={profile.html_url} target="_blank" className='btn btn-seccess btn-sm'></a>
                    </div>
                </div>
            </div>
           </React.Fragment>
        )
    }
}
export default GithubProfileCard;