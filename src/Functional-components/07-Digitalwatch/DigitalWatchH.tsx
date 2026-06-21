import React, {useState} from 'react';
interface IProps{};
interface IState{
    currentTime : string;
};

let DigitalwatchH : React.FC<IProps>=()=>{
    let[setDigital, setDigitalState] = useState<IState>({
        currentTime : new Date().toLocaleTimeString()
    });
    return(
        <React.Fragment></React.Fragment>
    )
}