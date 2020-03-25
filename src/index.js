import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';

import Login from './login';
export default class Basic extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>
            
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))

// ReactDOM.render(<Basic/>,
//    document.getElementById('root'));