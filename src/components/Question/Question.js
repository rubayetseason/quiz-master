import React from 'react';
import Option from '../Option/Option';

const Question = ({singleQuestion}) => {
    const q = singleQuestion;
    const {question , options, correctAnswer} = q;
    return (
        <div className='my-8 p-4 border-2 border-black rounded w-3/6 mx-auto'>
         <h1 className='text-xl mb-2'><span className='font-bold underline'>Question:</span> {question}</h1>
         <div className="options">
{
    options.map(option => <Option option={option}
    key={option.id}
    correctAnswer={correctAnswer}></Option>)
}
         </div>
        </div>
    );
};

export default Question;