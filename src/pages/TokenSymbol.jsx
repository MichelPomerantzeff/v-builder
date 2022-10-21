import React from 'react';
import '../css/TokenSymbol.css';
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

function TokenSymbol(props) {
    return (
        <div className='app'>
            <ProgressBar active={"two"}/>
            <div className='token_symbol_container'>

                <h1 className='header'>Token Symbol</h1>

                <div className='input'>
                    <input type="text" />
                </div>

                <div className='links'>

                    <Link to="/">
                        <span> 	&#60; Back </span>
                    </Link>

                    <Link to="/token-distribution">
                        <span> Next &#62; </span>
                    </Link>

                </div>

                <div className='description'>
                    <p>The token Symbol is a short name to your asset, usually it is about 3 to 5 capital letters, as USD stands for US Dollar.</p>
                </div>
            </div>
        </div>
    );
}

export default TokenSymbol;