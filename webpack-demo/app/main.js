/**
 * Created by dubiaoqi on 2017/7/19.
 */
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

import React from 'react'
import {render} from 'react-dom'
import Greet from './Greeter.js'
import './main.css';

render ( <Greet/> , document.getElementById('root'))