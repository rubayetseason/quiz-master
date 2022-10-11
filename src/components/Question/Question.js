import React from 'react';
import Option from '../Option/Option';
import Swal from 'sweetalert2';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ singleQuestion }) => {
    const q = singleQuestion;
    const { question, options, correctAnswer } = q;

    // console.log(singleQuestion.correctAnswer);
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

    const eye = () => {
        Swal.fire({
            icon: 'info',
            title: "Correct Answer:",
            text: correctAnswer,
        })
    }
    return (
        <div className='my-8 p-4 border-2 border-black rounded w-4/5 mx-auto'>
            <div className='flex justify-evenly'>
                <h1 className='text-xl mb-2'><span className='font-bold underline'>Question:</span> {question.slice(3, -4)}</h1>
                <EyeIcon className="h-6 w-6 text-blue-500 hover:cursor-pointer" onClick={eye} />

            </div>
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