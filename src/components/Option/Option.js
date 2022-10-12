import React from 'react';

const Option = ({ option, ans }) => {
   
    return (
        <div>
            <button className='bg-blue-600 hover:bg-blue-800 text-white my-1 p-2 w-3/4 rounded font-medium' onClick={() => ans(option)}>{option}</button>
 
        </div>
    );
};

export default Option;