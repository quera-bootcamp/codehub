import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

type SummaryProps = {
  totalSales: number;
  totalCustomers: number;
  totalOrders: number;
  monthlySalesData: { month: string; sales: number }[];
};

const Dashboard: React.FC<SummaryProps> = ({ totalSales, totalCustomers, totalOrders, monthlySalesData }) => {
  return (
    <div className="w-full mt-10">
      {/* Summary Section */}
      <div className="flex flex-row justify-center items-center gap-8 w-full mb-8">
        <div className="flex flex-col gap-3 grow justify-start items-start px-4 py-6 bg-default-50 rounded-lg dark:bg-default-950">
          <div className="w-8 h-8 rounded-full bg-danger flex justify-center items-center">
            $
          </div>
          <p className="font-normal text-base text-default-700">فروش کل</p>
          <p className="text-xl font-bold text-default-950 dark:text-default-50">{totalSales} تومان</p>
        </div>

        <div className="flex flex-col gap-3 grow justify-start items-start px-4 py-6 bg-default-50 rounded-lg dark:bg-default-950">
          <div className="w-8 h-8 rounded-full bg-danger flex justify-center items-center">
            $
          </div>
          <p className="font-normal text-base text-default-700">مشتری ها</p>
          <p className="text-xl font-bold text-default-950 dark:text-default-50">{totalCustomers}</p>
        </div>

        <div className="flex flex-col grow justify-start items-start gap-3 px-4 py-6 bg-default-50 rounded-lg dark:bg-default-950">
          <div className="w-8 h-8 rounded-full bg-danger flex justify-center items-center">
            $
          </div>
          <p className="font-normal text-base text-default-700">سفارشات</p>
          <p className="text-xl font-bold text-default-950 dark:text-default-50">{totalOrders}</p>
        </div>
      </div>

        <div style={{ width: '100%', height: 600 }}>
          <ResponsiveContainer>
            <BarChart data={monthlySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" label={{ value: 'تاریخ', position: 'insideBottom', offset: 0 }} />
              <YAxis label={{ value: 'فروش', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="sales" fill="#e91e63" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
};

export default Dashboard;
