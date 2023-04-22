import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createBrowserHistory} from 'history';
import {Button} from "primereact/button";
import './pages/balance/balance.page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'primeflex/primeflex.css';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            balance: {
                remaining: null
            },
            history: createBrowserHistory(),

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
