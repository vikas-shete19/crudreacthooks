import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>
                <div>
                    Enter Name:
                    <input type="text" id="name" name="name"/>
                </div>
                
            </div>
        )
    }
}
