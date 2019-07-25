import React from 'react';

const Total = ({additionalPrice, car: {price}}) => {
    return (
        <div className='content'>
            <h4>Total Amount: ${price + additionalPrice}</h4>
        </div>
    );
};

export default Total;
