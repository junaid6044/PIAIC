import { ExpenseType } from '@/app/types/commonTypes';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const categories = ['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Online Purchases', 'Other'];

export default function Chart(props: { expenseData: ExpenseType[] }) {
  // Create an array with zero amounts for each category
  const dataWithZeroAmounts = categories.map(category => ({
    category,
    amount: props.expenseData.find(entry => entry.category === category)?.amount || 0,
  }));

  return (
    <ResponsiveContainer width="60%" height={200}>
      <BarChart
        width={500}
        height={300}
        data={dataWithZeroAmounts}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="category" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="amount" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  );
}
