import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const questionSet = useLoaderData();
    const questions = questionSet.data;
    const questionObj = questions.questions;
    return (
        <div>
            <div className='px-12'>
                <h1 className='text-3xl mt-6 font-semibold'>Questions of <span className='font-bold text-blue-600'>{questions.name}</span> here</h1>
                <hr className='border-2 border-blue-600 my-5' />
            </div>
            <div>
                {
                    questionObj.map(singleQuestion => <Question singleQuestion={singleQuestion}
                        key={singleQuestion.id}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;