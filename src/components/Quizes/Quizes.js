import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Quizes = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
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
                <Link to={`/${id}`} className='bg-blue-600 hover:bg-blue-800 p-2 text-white font-semibold'>
                    <button >
                        Enter Quiz
                    </button>
                </Link>
            </Card>
        </div>
    );
};

export default Quizes;