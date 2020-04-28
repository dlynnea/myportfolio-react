import React, { Component } from 'react';
import one from '../images/img1.jpg';
import three from '../images/img3.jpg';
import LightBox from './LightBox';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            items: [
                {
                    id: 0,
                    title: 'Curator',
                    subtitle: 'Content Aggregator',
                    img: one,
                    link: 'https://github.com/dlynnea/curator-frontend',
                    selected: false
                },
                {
                    id: 1,
                    title: 'DotJoin',
                    subtitle: 'Social Network Application',
                    img: three,
                    link: 'https://github.com/dlynnea/dot-join',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Craft Chat',
                    subtitle: 'Chatroom Application',
                    img: one,
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
    }

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
                            <h1>My Latest Work</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="filter-buttons">
                            <ul className="filter-btns">
                                <li 
                                    className={this.state.active && 'active'}
                                    onClick={this.toggleActive}
                                    data-target="all"
                                >All</li>
                                <li 
                                    className={this.state.active && 'active'} 
                                    onClick={this.toggleActive}
                                    data-target="branding"
                                >Branding</li>
                                <li 
                                    className={this.state.active && 'active'} 
                                    onClick={this.toggleActive}
                                    data-target="photoshop"
                                >Photoshop</li>
                                <li 
                                    className={this.state.active && 'active'} 
                                    onClick={this.toggleActive}
                                    data-target="fashion"
                                >Fashion</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="portfolio-gallery">
                            {this.state.items.map(item => (
                            <div className="item" key={item.id} onClick={this.handleClick} data-id={item.subtitle}>
                                <div className="inner">
                                    <img src={item.img} alt="portfolio-img" />
                                    <div className="overlay">
                                        <span className="fa fa-plus"></span>
                                        <h4>{item.title}</h4>
                                    </div>
                                    {item.selected && <LightBox title={item.title} subtitle={item.subtitle} link={item.link}/>}
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