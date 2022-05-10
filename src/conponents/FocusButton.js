import React from 'react';

const FocusButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default FocusButton;