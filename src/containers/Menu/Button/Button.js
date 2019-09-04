import React from 'react';

const Button = props => {
    const { isButtonAct, clickHandler } = props

    return (
        <button
            onClick={clickHandler}
            className={
                isButtonAct ?
                    "hamburger hamburger--spin is-active" :
                    "hamburger hamburger--spin"
            }
            type="button"
        >
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default Button;