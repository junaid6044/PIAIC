import { ExpenseType } from '@/app/types/commonTypes';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function chart(props: {expenseData : ExpenseType[]}) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={props.expenseData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#115e59" />
      </BarChart>
    </ResponsiveContainer>
  );
}
