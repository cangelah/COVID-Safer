import React, { Component } from 'react'
import {AppContext} from '../context'
import { Redirect } from "react-router-dom";
export class BusinessSignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: "",
             fname: "",
             lname: "",
             address: "",
             redirect: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    static contextType = AppContext;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    handleSubmit(event) {
        const {registerNewBusiness} = this.context;
        console.log("hi")
        const user = {
            fname: this.state.fname,
            lname: this.state.lname,
            address: this.state.address,
            email: this.state.email,
            password: this.state.password
        }
        
        registerNewBusiness(user)
            .then((res) => {
                this.setState({redirect: "/BusinessLogin"})
            }, (res) => {
                console.log(res);
                this.setState({errors: res});
            });
            event.preventDefault();
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <section className="section-wrap" id="business-signup">
            <section className="section-body">
            <h1>Business Sign Up</h1>   
                <label>
                    First Name: <p></p>
                    <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange}/>
                </label>
                <label>
                    Last Name: <p></p>
                    <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange}/>
                </label> 
                <label>
                    Business Address: <p></p>
                    <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/>
                </label>
                <label>
                    Email Address: <p></p>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                </label>
                <label>
                    Password: <p></p>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </section>
            </section>
        )
    }
}

export default BusinessSignUp
