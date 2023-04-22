import React from 'react';
import './balance.page.css';
import {Button} from 'primereact/button';


export default class BalancePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            balance: {
                remaining: null
            },
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

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
        const {balance} = this.state;
        debugger;
        return (
            <div className="col-md-12">
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
