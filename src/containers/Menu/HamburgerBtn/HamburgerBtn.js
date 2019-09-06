import React from 'react';

const HamburgerBtn = props => {
    const { isButtonAct, clickHandler } = props

    return (
        <button
            type="button"
            onClick={clickHandler}
            className={
                isButtonAct ?
                    "hamburger hamburger--spin is-active" :
                    "hamburger hamburger--spin"
            }>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

export default HamburgerBtn;