import React from 'react';
import './App.css';

export default function App(h, j) {

  //create topics array
  var topics = require('./topics.json');
  let tMax = topics.length;
  h = Math.floor(Math.random() * tMax);
  console.log((h + 1) + " of " + topics.length);
  console.log(topics[h]);

  //create modifiers array
  var modifiers = require('./modifiers.json');
  let mMax = modifiers.length;
  j = Math.floor(Math.random() * mMax);
  console.log((j + 1) + " of " + modifiers.length);
  console.log(modifiers[j]);

  function runGen() {
    var str = document.getElementById("gen").innerHTML;
    var res = str.replace("?topic", "topics[h]");
    document.getElementById("gen").innerHTML = res;
  }

  return (
    <div class="Generate">
      <p id="gen">Everyone must draw ?topic ?modifier</p>
      <button onClick="runGen()">GENERATE</button>
    </div>
  );

}
