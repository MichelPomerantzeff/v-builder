import React from 'react';
import '../css/TokenName.css';
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

function TokenName(props) {
    return (
        <div className='app'>
            <ProgressBar active={"one"} />
            <div className='token_name_container'>

                <h1 className='header'>Token Name</h1>

                <div className='input'>
                    <input type="text" />
                </div>

                <div className='links'>

                    <span>
                        {/* emplty */}
                    </span>

                    <Link to="/token-symbol">
                        <span> Next &#62; </span>
                    </Link>
                    
                </div>

                <div className='description'>
                    <p>The token name represents how your is going to be known.</p>
                </div>
            </div>
        </div>
    );
}

export default TokenName;