import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

type SummaryProps = {
  totalSales: number;
  totalCustomers: number;
  totalOrders: number;
  monthlySalesData: { month: string; sales: number }[];
};

const Dashboard: React.FC<SummaryProps> = ({ totalSales, totalCustomers, totalOrders, monthlySalesData }) => {
  return (
    <div className="w-full">

      <div className="flex flex-row justify-center items-center gap-8 w-full">

        <div className="flex flex-col grow justify-start items-start px-4 py-6">
          <div className="w-8 h-8 rounded-full bg-danger flex">
            $
          </div>
          <p className="font-normal text-base text-default-700">فروش کل</p>
          <p className="text-xl font-bold text-default-950">{totalSales} تومان</p>
        </div>

        <div className="flex flex-col grow justify-start items-start px-4 py-6">
          <div className="w-8 h-8 rounded-full bg-danger">
            $
          </div>
          <p className="font-normal text-base text-default-700">مشتری ها</p>
          <p className="text-xl font-bold text-default-950">{totalCustomers}</p>
        </div>

        <div className="flex flex-col grow justify-start items-start gap-4 px-4 py-6">
          <div className="w-8 h-8 rounded-full bg-danger">
            $
          </div>
          <p className="font-normal text-base text-default-700">سفارشات</p>
          <p className="text-xl font-bold text-default-950">{totalOrders}</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales Chart</h2>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={monthlySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#e91e63" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
