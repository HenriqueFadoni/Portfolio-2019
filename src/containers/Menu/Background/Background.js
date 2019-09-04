import React from 'react';

const Background = props => {
    const { isButtonAct } = props
    
    return (
        <div 
            className={
                isButtonAct ?
                    "menu__background--active" :
                    "menu__background"
            }
        >
            &nbsp;
        </div>
    );
}

export default Background;