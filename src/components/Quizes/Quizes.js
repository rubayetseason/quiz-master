import { Button, Card } from 'flowbite-react';
import React from 'react';

const Quizes = ({ quiz }) => {
    console.log(quiz);
    const { name, logo, total } = quiz;
    return (
        <div className="w-full p-7">
            <Card>
                <img className='bg-gray-700' src={logo} alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-medium text-gray-700 dark:text-gray-400">
                    Total questions : {total}
                </p>
                <button className='bg-blue-600 p-2 text-white font-semibold'>
                    Enter Quiz
                </button>
            </Card>
        </div>
    );
};

export default Quizes;