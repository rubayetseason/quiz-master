import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import './Statistics.css'
const Statistics = () => {
    const data = useLoaderData();
    const bardata = data.data;
    console.log(bardata);
    return (
        <div>
            <hr className='border-2 border-blue-600 my-8 mx-auto w-9/12' />

            <div className='question'>
                <div className='question-container'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={500} height={400} data={bardata}>
                            <Line type="monotone" dataKey="total" stroke='#82ca9d' />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip></Tooltip>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistics;