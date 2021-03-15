import React, { Component } from 'react';
import LightBox from './LightBox';
import craft from '../images/craft.png';
import dotJoin from '../images/dotJoin.png';
import curator from '../images/curator.png';
import todo from '../images/todo.png';

class Portfolio extends Component {

    state = {
        active: false,
        items: [
            {
                id: 0,
                title: 'Curator',
                subtitle: 'Content Aggregator',
                summary: 'Built using Ruby, Rails with React and React-Redux for state management. I wrote web crawlers using Python and the Scrapy framework to implement sources of news from several different sources. SQL Database.',
                img: curator,
                link: 'https://github.com/dlynnea/curator-frontend',
                selected: false
            },
            {
                id: 1,
                title: 'DotJoin',
                subtitle: 'Social Network Application',
                summary: 'Built with NodeJS, Express and React. I utilized React-Redux and Hooks for state management, using a MongoDB database.',
                img: dotJoin,
                link: 'https://github.com/dlynnea/dot-join',
                selected: false
            },
            {
                id: 2,
                title: 'Craft Chat',
                subtitle: 'Chatroom Application',
                summary: 'Built with NodeJS, Express and vanilla JavaScript. Utilized the socket.io library to create real-time, event-based communication.',
                img: craft,
                link: 'https://github.com/dlynnea/chatroom',
                selected: false
            },
            {
                id: 3,
                title: 'Task List',
                subtitle: 'To-Do List Application',
                summary: 'Built with ClojureSctipt, Reagent and Shadow CLJS with vanilla CSS fro styling. A fun and experimental, purely front end application built while learning ClojureScript and Reagent',
                img: todo,
                link: 'https://github.com/dlynnea/SeH-todo-app',
                selected: false
            },
        ]
    };

    handleClick = (id) => {
        console.log(id)
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <LightBox item={item} click={(event => this.handleClick(item.id, event))} key={item.id} />
        })
    }

    toggleActive = () => {
        console.log("click")
        this.setState({
            active: !this.state.active
        })
    }

    addSpec = (work) => {
        this.setState({
            selectedWork: work
        })
    }

    render() {  
        return (
            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center">
                            <h1>Latest Projects</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-gallery">
                            {this.state.items.map(item => (
                            <div className="item" key={item.id} data-id={item.subtitle}>
                                <div className="inner">
                                    <img src={item.img} alt="portfolio-img" />
                                    <div className="overlay">
                                        <h5>{item.subtitle}</h5>
                                        <h4>{item.title}</h4>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                                    </div>
                                </div>
                                <p>{item.summary}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Portfolio;