import React from 'react';
import {GithubCred} from '../Credentials/GitHubCredentials';
import axios from 'axios';
import {IProfile} from '../Models/IProfile';
import {IRepository} from '../Models/IRepository';
import GithubProfile from '../Profile/GithubProfile';
import GithubRepos from './GithubRepos';

interface IProps{};
interface IState{
    githubUserName : string,
    profile: IProfile,
    repos : IRepository[]
};
class GithubprofilesearchApp extends React.Component<IProps,IState>{
    /**
     *
    aaaaa */
    constructor(props:IProps) {
        super(props);
        this.state ={
            githubUserName:'',
            profile: {} as IProfile,
            repos: [] as IRepository[]
        }
    }
    changeInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            ...this.state,
            githubUserName : event.target.value
        });
    }

    submitSearch = (event: React.FormEvent<HTMLFormElement>)=>{
     event.preventDefault();
     this.searchProfile(this.state.githubUserName);
     this.searchRepos(this.state.githubUserName);
    }
       searchRepos=(githubUser:string)=>{
       let dataURL =  `https://api.github.com/users/${githubUser}/repos?client_id=${GithubCred.CLIENT_ID}&client_secret=${GithubCred.CLIENT_SECRET}`;
       axios.get<IRepository[]>(dataURL).then((response)=>{
        this.setState({
            ...this.state,
            repos:response.data
        });
       }).catch((error)=>{
        console.error(error);
       });
       };
    
    searchProfile = (githubUser: string)=>{
    let dataURL : string = `https://api.github.com/users/${githubUser}?client_id=${GithubCred.CLIENT_ID}&client_secret=${GithubCred.CLIENT_SECRET}`;
    axios.get<IProfile>(dataURL).then((response)=>{
        this.setState({
            ...this.state,
            profile : response.data
        });
    }).catch((error) =>{
        console.error(error);
    });
    };
    
    render(){
        return(
            <React.Fragment>
             <div className="section mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary">GitHub Search App</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam tempora fugiat quas, cupiditate aperiam vitae corporis nobis sunt harum, beatae debitis minima non itaque unde explicabo voluptate, asperiores velit!</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={this.submitSearch}>
                                <div className="row no-gutters">
                                    <div className="col">
                                        <div className="form-group">
                                            <input value={this.state.githubUserName} onChange={this.changeInput}
                                             type="text" className='form-control' placeholder='Github Username'/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="submit" className='btn btn-primary btn-sm' value="Submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
             <div className="section mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.profile).length>0 &&
                                <GithubProfile profile={this.state.profile}/>
                            }
                        </div>
                    </div>
                </div>
             </div>
             <div className="section mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos.length>0 &&
                                <GithubRepos repos={this.state.repos}/>
                            }
                        </div>
                    </div>
                </div>
             </div>
            </React.Fragment>
        )
    }
}
export default GithubprofilesearchApp;