import React from 'react'

export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title text-center">
                        <h1>Contact Me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-form">
                        <div className="row">
                            <div className="text">
                                <h2>Drop me a line</h2>
                                <p>I would love to chat or answer any questions you may have!</p>
                            </div>
                        </div>
                        <div className="row space-between">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <textarea rows="6" className="form-control" placeholder="Your Comment"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="button text-right">
                                <a href="">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}