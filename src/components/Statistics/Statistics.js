import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const Statistics = () => {
    const data = useLoaderData();
    const bardata = data.data;
    console.log(bardata);
    return (
        <div>
            <h1>this is stat</h1>
            <div className='w-3/6 mx-auto'>
            <LineChart width={500} height={400} data={bardata}>
           <Line type="monotone" dataKey="total" stroke='#82ca9d' />
           <XAxis dataKey="name" />
           <YAxis/>
           <Tooltip></Tooltip>
            </LineChart>
        </div>
        </div>
    );
};

export default Statistics;