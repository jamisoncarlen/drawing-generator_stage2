import React from 'react';
export default class Generate extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { topic: "a gorilla", modifier: "with purple hair" };
    }

    handleClick(evt) {

        const id = evt.target.getAttribute("id");
        console.log("id: " + id)
        //create topics array
        let topics = require('../topics.json');

        let tMax = topics.length;
        var h = Math.floor(Math.random() * tMax);

        console.log((h + 1) + " of " + topics.length);
        console.log(topics[h]);


        //create modifiers array
        let modifiers = require('../modifiers.json');

        let mMax = modifiers.length;
        var j = Math.floor(Math.random() * mMax);

        console.log((j + 1) + " of " + modifiers.length);
        console.log(modifiers[j]);

        
        if(id==="topic"){
            //set topic state
            this.setState({ topic: this.setState.topic = topics[h] });
        } else {
            //set modifier state
            this.setState({ modifier: this.setState.modifier = modifiers[j] });
        }
    }

    render() {
        return (
            <div>
                <h1>You must draw {this.state.topic} {this.state.modifier}</h1>
                <button id="topic" onClick={this.handleClick.bind(this.state.topic)}>New Topic</button>
                <button id="modifier" onClick={this.handleClick.bind(this.state.modifier)}>New Modifier</button>
            </div>
        );
    }
}