import React from 'react';
import '../css/TokenResume.css';
import Chart from '../components/Chart';
import { Link } from "react-router-dom";
import {icons} from '../data'


function TokenResume(props) {
    return (
        <div className='app'>
            <div className='token_resume_container'>

                <h1 className='header'>Token Resume</h1>

                <div className='token_resume_wrapper'>

                    <div className='token_resume_row'>
                        <label>Template: </label>
                        <div className='content template'></div>
                    </div>

                    <div className='token_resume_row'>
                        <label>Name: </label>
                        <div className='content name'></div>
                    </div>

                    <div className='token_resume_row'>
                        <label>Symbol: </label>
                        <div className='content symbol'></div>
                    </div>

                    <div className='token_resume_row toTop'>
                        <label>Distribution: </label>
                        <div className='content'> <Chart /></div>
                    </div>

                    <div className='token_resume_row toTop'>
                        <label>Blockchains: </label>
                        <div className='content blockchains'>
                            <img src={icons.icon2} alt="" />
                            <img src={icons.icon4} alt="" />
                            <img src={icons.icon7} alt="" />
                        </div>
                    </div>
                </div>

                <div className='links'>

                    <Link to="/select-chain">
                        <span> 	&#60; Back </span>
                    </Link>

                    <Link to="">
                        <span> Build &#62; </span>
                    </Link>

                </div>

            </div>
        </div>
    );
}

export default TokenResume;