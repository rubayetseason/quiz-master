import { Tooltip } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
const Statistics = () => {
    const data = useLoaderData();
    const bardata = data.data;
    console.log(bardata);
    return (
        <div>
            <hr className='border-2 border-blue-600 my-8 mx-auto w-3/4' />
<h1 className='text-2xl font-bold'>
    Here is a <span className='text-blue-600'> chart on total quiz</span> available in our website.
</h1>
      <div className='flex justify-center'>
        <ResponsiveContainer width="95%" height={400}>
        <LineChart width={500} height={400} data={bardata}>
           <Line type="monotone" dataKey="total" stroke='#82ca9d' />
           <XAxis dataKey="name" />
           <YAxis/>
           <Tooltip></Tooltip>
            </LineChart>
        </ResponsiveContainer>
        </div>      
        </div>
    );
};

export default Statistics;