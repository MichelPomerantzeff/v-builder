import React from 'react';
import '../css/ProgressBar.css'

function ProgressBar(props) {
    return (
        <div className='progress_bar_container'>
            
            <div className={`step ${props.active === "one" && "one"}`}>1</div>

            <div className='horizontal_line'>
                <hr />
            </div>

            <div className={`step ${props.active === "two" && "two"}`}>2</div>

            <div className='horizontal_line'>
                <hr />
            </div>

            <div className={`step ${props.active === "three" && "three"}`}>3</div>

            <div className='horizontal_line'>
                <hr />
            </div>

            <div className={`step ${props.active === "four" && "four"}`}>4</div>
            
        </div>
    );
}

export default ProgressBar;