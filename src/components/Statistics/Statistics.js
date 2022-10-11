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
            <hr className='border-2 border-blue-600 my-9 mx-auto w-9/12' />
        </div>
    );
};

export default Statistics;