import React, { Component } from 'react';
import one from '../images/img1.jpg';
import three from '../images/img3.jpg';
import LightBox from './LightBox';
import craft from '../images/craft.png';
import dotJoin from '../images/dotJoin.png';
import curator from '../images/curator.png';

class Portfolio extends Component {

    state = {
        active: false,
        items: [
            {
                id: 0,
                title: 'Curator',
                subtitle: 'Content Aggregator',
                img: curator,
                link: 'https://github.com/dlynnea/curator-frontend',
                selected: false
            },
            {
                id: 1,
                title: 'DotJoin',
                subtitle: 'Social Network Application',
                img: dotJoin,
                link: 'https://github.com/dlynnea/dot-join',
                selected: false
            },
            {
                id: 2,
                title: 'Craft Chat',
                subtitle: 'Chatroom Application',
                img: craft,
                link: 'https://github.com/dlynnea/chatroom',
                selected: false
            },
            {
                id: 3,
                title: 'title',
                subtitle: 'fashion',
                img: three,
                link: '',
                selected: false
            },
            {
                id: 4,
                title: 'title',
                subtitle: 'branding',
                img: one,
                link: '',
                selected: false
            },
            {
                id: 5,
                title: 'title',
                subtitle: 'fashion',
                img: three,
                link: '',
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
                            <h1>My Recent Projects</h1>
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
                                    {/* {item.selected && <LightBox title={item.title} subtitle={item.subtitle} link={item.link}/>} */}
                                </div>
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