import React from 'react';

const Option = ({ option, correctAnswer }) => {
    return (
        <div>
            <button className='bg-blue-600 hover:bg-blue-800 text-white my-1 p-2 w-2/4 rounded font-medium'>{option}</button>
        </div>
    );
};

export default Option;