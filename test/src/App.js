import logo from './logo.svg'
import React from 'react';
import './App.css';


import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import {Button} from "primereact/button";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            balance: {
                remaining: null,
                account:''
            },
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        debugger;
        this.setState({
            balance: {remaining: 1234568}
        });
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        debugger;
        const {balance} = this.state;

        // if (this.sdk !==true){
        //     return(
        //
        //         <div>
        //             Invalid apiKey or apiSecret
        //         </div>
        //         )
        // }
        return (
            <div>

                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand" href="https/reactjs.org">
                        <img src={logo} className="App-logo" alt="logo"/>
                        React
                    </a>
                </nav>
                <div className="card card-container">
                    <div>
                        <label htmlFor="account">Account</label>
                        <input type="text" className="form-control" name="username" value={balance.account}
                        />
                        <div style={{paddingTop: 20}}>
                            <div className={'form-group' + (!balance.remaining ? 'has-error' : '')}>
                                <label htmlFor="remaining">Remaining</label>
                                <input type="text" className="form-control" name="remaining" value={balance.remaining}
                                       onChange={this.onChange}/>
                            </div>
                        </div>
                        <div style={{paddingLeft: 50, paddingTop: 10}}>
                            <Button label="submit" onClick={(e) => this.handleSubmit(e)}/>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

