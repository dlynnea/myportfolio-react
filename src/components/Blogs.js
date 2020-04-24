import React, { Component } from 'react';
import one from '../images/img1.jpg';
import three from '../images/img3.jpg';

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    id: 0,
                    title: 'Thin, Vertical Slices',
                    subtitle: 'CLI App',
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: one,
                    date: '9 Dec 2019',
                    link: 'https://medium.com/@danimatton/a-cli-app-thin-vertical-slices-and-the-art-of-collaboration-3f03e0cb288a',
                    selected: false
                },
                {
                    id: 1,
                    title: 'HTTP & MVC Architecture',
                    subtitle: 'Ruby on Rails',
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: one,
                    date: '7 Jan 2020',
                    link: 'https://medium.com/@danimatton/taking-a-look-at-http-mvc-architecture-and-routes-through-ruby-on-rails-cac9ec742e0a',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Forms & FormData',
                    subtitle: 'JavaScript',
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: one,
                    date: '29 Jan 2020',
                    link: 'https://medium.com/@danimatton/forms-formdata-and-javascript-32d97bcd28d8',
                    selected: false
                },
                {
                    id: 3,
                    title: 'SQL vs. NoSQL',
                    subtitle: 'Databases',
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: one,
                    date: '19 Feb 2020',
                    link: 'https://medium.com/@danimatton/sql-vs-nosql-whats-the-deal-93b4943a2ce6',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Redux Middleware',
                    subtitle: 'Middleware',
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: one,
                    date: '11 March 2020',
                    link: 'https://medium.com/@danimatton/redux-middleware-what-is-it-why-use-it-ea18e0433fa0',
                    selected: false
                },
                {
                    id: 5,
                    title: 'WebSockets',
                    subtitle: 'WebSockets, Socket.io',
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: one,
                    date: '14 April 2020',
                    link: 'https://medium.com/@danimatton/what-are-websockets-22a43da6871f',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Getting Started with Node.js',
                    subtitle: 'Node.js',
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    img: one,
                    date: '21 April 2020',
                    link: 'https://medium.com/@danimatton/getting-started-with-node-js-e4717cbc2ace',
                    selected: false
                },
            ]
        }}
    render() {
        const { id, title, subtitle, img, link, selected } = this.state;

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
                            <div className="box">
                                <div className="img">
                                    <img src={blog.img} alt={blog.title} />
                                </div>
                                <div className="info">
                                    <span>{blog.date}</span> <span>{blog.subtitle}</span>
                                </div>
                                <h3>{blog.title}</h3>
                                <p>{blog.subtitle}</p>
                                <a href={blog.link}>Read the Article Here</a>
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