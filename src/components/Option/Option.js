import React from 'react';

const Option = ({ option, correctAnswer }) => {
    const ans = (clicked) => {
       if(clicked === correctAnswer){
        console.log('correct');
       }
       else{
        console.log('wrong');
       }
    }
    return (
        <div>
            <button className='bg-blue-600 hover:bg-blue-800 text-white my-1 p-2 w-2/4 rounded font-medium' onClick={() => ans(option)}>{option}</button>
        </div>
    );
};

export default Option;