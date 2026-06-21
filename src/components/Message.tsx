import React from 'react';
import './Message.css';
interface IProps{}
interface IState{}

class Message extends React.Component<IProps,IState>{

  colors={
    color:'white',
    backgroundColor:'greenyellow'
  }
  fonts={
    fontFamily:'Arail "sans-serif"',
    fontSize : '50px'
  }

  constructor(props:IProps){
    super(props)
  }
  render(){
    return(
        <React.Fragment>
        <h1 style={{fontSize:'20px',backgroundColor:'red'}}>I am from Message Component</h1>
        <h1 style={{...this.colors, ...this.fonts}}>I am from second message</h1>
        <h1 className='colors'>This is my third message</h1>
        </React.Fragment>
    )
  }
}
export default Message;