import { Component } from "react";
import React from 'react';
import logo from './logo.svg';
import ReactDOM from "react-dom";
import './App.css';
import './styles/site.scss';
import './styles/direction-reveal.scss';
// import './scripts/main.js'; 
import DirectionReveal from './scripts/direction-reveal.js';
const img1 = require('./images/mountain-1.jpg');

export default class SwingComponent extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        const directionRevealDefault = DirectionReveal({
        selector: '.direction-reveal',
        itemSelector: '.direction-reveal__card',
        animationName: 'swing',
        animationPostfixEnter: 'enter',
        animationPostfixLeave: 'leave',
        enableTouch: true,
        touchThreshold: 250

      });
      directionRevealDefault.init();
    }
    render(){
        return ( 
    
            <div className = "App" >
                {/* <script src="./scripts/main.js" type="module"></script> */}
                <div className="fullwidth">
                <div className="container separator">
                <h3>Swing</h3>
                
                <div className="direction-reveal direction-reveal--3-grid direction-reveal--demo-swing" ref={ n => {this.myRef = n }}>
                    <a href="#" className="direction-reveal__card" id="test">
                        <img src={img1} className="direction-reveal__img" height="400px" width="400px"></img>
                        <div className="direction-reveal__overlay direction-reveal__anim--enter">
                            <h3 className="direction-reveal__title">LOREM IPSUM</h3>
                            <p className="direction-reveal__text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            </p>
                        </div>
                    </a>
        
                    <a href="#" className="direction-reveal__card" id="test">
                        <img src={img1} className="direction-reveal__img" height="400px" width="400px"></img>
                        <div className="direction-reveal__overlay direction-reveal__anim--enter">
                            <h3 className="direction-reveal__title">LOREM IPSUM</h3>
                            <p className="direction-reveal__text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            </p>
                        </div>
                    </a>
        
                    <a href="#" className="direction-reveal__card" id="test">
                        <img src={img1} className="direction-reveal__img" height="400px" width="400px"></img>
                        <div className="direction-reveal__overlay direction-reveal__anim--enter">
                            <h3 className="direction-reveal__title">LOREM IPSUM</h3>
                            <p className="direction-reveal__text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            </p>
                        </div>
                    </a>
         
                    <a href="#" className="direction-reveal__card" id="test">
                        <img src={img1} className="direction-reveal__img" height="400px" width="400px"></img>
                        <div className="direction-reveal__overlay direction-reveal__anim--enter">
                            <h3 className="direction-reveal__title">LOREM IPSUM</h3>
                            <p className="direction-reveal__text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            </p>
                        </div>
                    </a>
                </div>
                </div>
                </div>
            </div>
            );
    }
}