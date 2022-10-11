import React from 'react';
import Option from '../Option/Option';
import Swal from 'sweetalert2';


const Question = ({ singleQuestion }) => {
    const q = singleQuestion;
    const { question, options, correctAnswer } = q;

    const ans = (clicked) => {
        if (clicked === correctAnswer) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulation',
                text: 'Your answer is correct!',
              })
        }
        else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your answer is wrong! Try again.',
              })
        }
    }

    return (
        <div className='my-8 p-4 border-2 border-black rounded w-3/6 mx-auto'>
            <h1 className='text-xl mb-2'><span className='font-bold underline'>Question:</span> {question}</h1>
            <div className="options">
                {
                    options.map(option => <Option option={option}
                        key={option.id}
                        correctAnswer={correctAnswer}
                        ans={ans}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;