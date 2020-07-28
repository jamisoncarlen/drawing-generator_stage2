import React from 'react';
import App from '../App';

export default function Generate(h, j) {
    var topics = require('../topics.json');
    let tMax = topics.length;
    h = Math.floor(Math.random() * tMax);
    console.log((h + 1) + " of " + topics.length);
    console.log(topics[h]);
  
    //create modifiers array
    var modifiers = require('../modifiers.json');
    let mMax = modifiers.length;
    j = Math.floor(Math.random() * mMax);
    console.log((j + 1) + " of " + modifiers.length);
    console.log(modifiers[j]);

    return(
    
        <div>
            <h1>You must draw {topics[h]} {modifiers[j]}.</h1>
        </div>
    );
}