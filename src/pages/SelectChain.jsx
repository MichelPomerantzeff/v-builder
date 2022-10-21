import React from 'react';
import '../css/SelectChain.css';
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import {icons} from '../data'


function SelectChain(props) {
    return (
        <div className='app'>
            <ProgressBar active={"four"} />
            <div className='select_chain_container'>

                <h1 className='header'>Select Chain</h1>

                <div className='icons_wrapper'>

                    <div className='single_icon'>
                        <img src={icons.icon1} alt="" />
                    </div>

                    <div className='single_icon'>
                        <img src={icons.icon2} alt="" />
                    </div>

                    <div className='single_icon'>
                        <img src={icons.icon3} alt="" />
                    </div>

                    <div className='single_icon'>
                        <img src={icons.icon4} alt="" />
                    </div>

                    <div className='single_icon'>
                        <img src={icons.icon5} alt="" />
                    </div>

                    <div className='single_icon'>
                        <img src={icons.icon6} alt="" />
                    </div>

                    <div className='single_icon'>
                        <img src={icons.icon7} alt="" />
                    </div>

                    <div className='single_icon'>
                        <img src={icons.icon8} alt="" />
                    </div>

                    <div className='single_icon'>
                        <img src={icons.icon9} alt="" />
                    </div>

                </div>

                <div className='links'>

                    <Link to="/token-distribution">
                        <span> 	&#60; Back </span>
                    </Link>

                    <Link to="/token-resume">
                        <span> Next &#62; </span>
                    </Link>

                </div>
                <div className='description'>
                    <p>Now it is time to select which Blockchain you want to use. Select as many as you want.</p>
                </div>
            </div>
        </div>
    );
}

export default SelectChain;