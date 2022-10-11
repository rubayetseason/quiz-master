import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
const Home = () => {
    const quizes = useLoaderData();
    const quizList = quizes.data;
    return (
        <div className='mt-9'>
            <div className='px-9'>
                <hr className='border-2 border-blue-600 mb-5' />
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get ready to test <span className="text-blue-600 dark:text-blue-500">your programming knowledge</span> with <span className="text-blue-600 dark:text-blue-500">Quiz Master</span></h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">There's no end of learning in Web Development. <br />
                    Thus, sharpen your knowledge with the help of our topic wise quizes. </p>
                    <hr className='border-2 border-blue-600 mt-5' />
            </div>
            <div className='quiz-container my-9 grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1'>
{
    quizList.map(quiz => <Quizes 
    quiz={quiz} key={quiz.id}
    ></Quizes>)
}
            </div>
        </div>
    );
};

export default Home;