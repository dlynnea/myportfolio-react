import React, { Component } from 'react';
import Axios from 'axios';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
            emailSent: false
    });

    Axios.post('https://d-portfolio.herokuapp.com/api', this.state)
        .then(res => {
            if(res.data.success) {
                this.setState({
                    disabled: false,
                    emailSent: true
                });
            } else {
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            }
        })
        .catch(err => {
            this.setState({
                disabled: false,
                emailSent: false
            });
        })
    }

    render() {
        return (
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center">
                            <h1>Contact Me</h1>
                        </div>
                    </div>
                    <div className="row">
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="text">
                                    <h2>Drop me a line</h2>
                                    <p>I would love to chat or answer any questions you may have!</p>
                                </div>
                            </div>
                            <div className="row space-between">
                                <div className="col-6">
                                    <input type="text"  id="full-name" name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="col-6">
                                    <input type="email"  id="email" name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea rows="6"  id="message" name="message" className="form-control" placeholder="Your Comment" value={this.state.message} onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="button text-right">
                                    <button className="button text-right" type="submit" disabled={this.state.disabled}>Get In Touch</button>
                                </div>
                            </div>
                            {this.state.emailSent === true && <p className="alert success-message">Email Sent</p>}
                            {this.state.emailSent === false && <p className="alert error-message">Email Not Sent</p>}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;