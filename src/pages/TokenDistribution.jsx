import React from 'react';
import '../css/TokenDistribution.css';
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";


function TokenDistribution(props) {
    return (
        <div className='app'>
            <ProgressBar active={"three"}/>
            <div className='token_distribution_container'>

                <h1 className='header'>Token Distribution</h1>

                <div className='inputs_container'>
                    <div className='input'>
                        <label >Name</label>
                        <input type="text" />
                    </div>

                    <div className='input'>
                        <label >Amount</label>
                        <input type="text" />
                    </div>

                    <div className='token_distribution_button'>
                        <button>Add more</button>
                    </div>


                </div>

                <div className='links'>

                    <Link to="/token-symbol">
                        <span> 	&#60; Back </span>
                    </Link>

                    <Link to="/select-chain">
                        <span> Next &#62; </span>
                    </Link>

                </div>

                <div className='description'>
                    <p>Token distribution relates to how you share your assets between different players, such as your developmen team, marketing and community. In this slide you must add as much players as you like and the amount of tokens each one is entiteled with.</p>
                </div>
            </div>
        </div>
    );
}

export default TokenDistribution;