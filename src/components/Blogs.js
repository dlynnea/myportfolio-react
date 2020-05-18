import React, { Component } from 'react';
import npm from '../images/npm.jpeg';
import middleware from '../images/middleware.jpeg';
import database from '../images/database.jpg';
import architecture from '../images/architecture.jpg';
import sockets from '../images/sockets.jpg';
import form from '../images/form.jpeg';
import jwt from '../images/jwt.jpg';
import js from '../images/js.jpeg';
import nodejwt from '../images/node-jwt.jpeg';

class Blogs extends Component {

    state = {
        blogs: [
            {
                id: 0,
                title: 'JWT Implementation for Node.js',
                subtitle: 'Node.js, JWT',
                summary: 'An abbreviated example of including JWT authentication within your Node API. It should give you an idea of how to protect your routes, get a token and then how to use that token to access the protected routes.',
                img: nodejwt,
                date: '7 May 2020',
                link: 'https://medium.com/@danimatton/jwt-implementation-for-node-js-cca3d64b6b50',
                selected: false
            },
            {
                id: 1,
                title: 'Getting Started with Node.js',
                subtitle: 'Node.js',
                summary: 'Node is primarily used for non-blocking, event-driven servers because of its single-threaded nature. It is used for traditional web applications and backend API services but was also designed for real-time websites with push-capability.',
                img: npm,
                date: '21 April 2020',
                link: 'https://medium.com/@danimatton/getting-started-with-node-js-e4717cbc2ace',
                selected: false
            },
            {
                id: 2,
                title: 'WebSockets',
                subtitle: 'WebSockets, Socket.io',
                summary: 'WebSockets allow for a bi-directional communication channel, meaning data flows both ways. The client and the server can talk in real-time without having to continuously make requests.',
                img: sockets,
                date: '14 April 2020',
                link: 'https://medium.com/@danimatton/what-are-websockets-22a43da6871f',
                selected: false
            },
            {
                id: 3,
                title: 'Redux Middleware',
                subtitle: 'Middleware',
                summary: 'Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store’s reducer. Some uses for middleware would be logging actions, reporting errors, making asynchronous requests, as well as dispatching new actions.',
                img: middleware,
                date: '11 March 2020',
                link: 'https://medium.com/@danimatton/redux-middleware-what-is-it-why-use-it-ea18e0433fa0',
                selected: false
            },
            {
                id: 4,
                title: 'SQL vs. NoSQL',
                subtitle: 'Databases',
                summary: 'Choosing a noSQL database over RDBMS are more prominent when needing to work with big data, when the big data needs a flexible data model with a better database architecture, or in the case of processing big data, the databases need continuous application availability with modern transaction support.',
                img: database,
                date: '19 Feb 2020',
                link: 'https://medium.com/@danimatton/sql-vs-nosql-whats-the-deal-93b4943a2ce6',
                selected: false
            },
            {
                id: 5,
                title: 'Back to some JavaScript Basics',
                subtitle: 'JavaScript',
                summary: 'A brief look into JavaScript functions, understanding scope, and how to use the .bind(), .call() and .apply() methods.',
                img: database,
                date: '17 May 2020',
                link: 'https://medium.com/@danimatton/back-to-some-javascript-basics-3e49fe948515',
                selected: false
            },
            {
                id: 5,
                title: 'Forms & FormData',
                subtitle: 'JavaScript',
                summary: 'Traditionally, a form was the only way to send data, in which the client had entered, back to the server. <form> is an HTML tag that allows you to perform GET / POST / UPDATE / DELETE, etc. operations without writing any code in JavaScript or server-side, in fact forms were designed for a pre-JavaScript Web.',
                img: form,
                date: '29 Jan 2020',
                link: 'https://medium.com/@danimatton/forms-formdata-and-javascript-32d97bcd28d8',
                selected: false
            },
            {
                id: 6,
                title: 'HTTP & MVC Architecture',
                subtitle: 'Ruby on Rails',
                summary: 'MVC separates an application into three components. The Models for handling data and business logic, the Controllers for handling the user interface and application, and Views for handling graphical user interface objects and presentation.',
                img: architecture,
                date: '7 Jan 2020',
                link: 'https://medium.com/@danimatton/taking-a-look-at-http-mvc-architecture-and-routes-through-ruby-on-rails-cac9ec742e0a',
                selected: false
            }
        ]
    }


    render() {
        return (
            <div className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center">
                            <h1>Latest Blogs</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="blogs-content">
                            {this.state.blogs.map(blog => (
                            <div key={blog.id} className="box">
                                <div className="img">
                                    <img src={blog.img} alt={blog.title} />
                                </div>
                                <div className="info">
                                    <span>{blog.date}</span> <span>{blog.subtitle}</span>
                                </div>
                                <h3>{blog.title}</h3>
                                <p>{blog.summary}</p>
                                <a target='_blank' rel="noopener noreferrer" href={blog.link}>Read {blog.title}</a>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Blogs;