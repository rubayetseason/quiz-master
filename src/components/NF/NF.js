import React from 'react';
import Sorry from './sorry.png'
const NF = () => {
    return (
        <div>
           <div>
           <img className='w-2/5 mx-auto' src={Sorry} alt="" />
           </div>
            <h2 className='text-center text-2xl'> Try again with another link</h2>
        </div>
    );
};

export default NF;