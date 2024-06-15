'use client';
import React, { useState } from 'react';
import withAuth from '@/hoc/withAuth';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { YearBox } from '../colleges/Year';
import { TopBranch } from './TopBranch';

const Home = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    console.log("Selected Year:", year);
  };

  return (
    <>
      <div className='max-w-7xl mx-auto px-20 lg:px-30 md:px-20 sm:px-10 py-20 lg:py-30 md:py-20 sm:py-10'>
        <div className="w-full p-30 border-0 mx-auto">
          <h1 className="text-2xl text-left mb-10 font-bold">Get Colleges for Your Rank</h1>
          <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-y-2">
            <div className="space-y-1">
              <YearBox onSelect={handleYearSelect} />
            </div>
          </CardContent>
        </div>
      </div>
      <div className="p-5 lg:p-30 md:p-20 sm:p-5">
        <TopBranch
          year={selectedYear}
        />
      </div>
    </>
  );
};

export default withAuth(Home);
