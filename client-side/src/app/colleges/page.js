'use client';
import React, { useState } from 'react';
import withAuth from '@/hoc/withAuth';
import { DataTableDemo } from './CollegesTable';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { YearBox } from './Year';
import { ProgramBox } from './Colleges';
import { CategoryBox } from './Category';
import { Label } from '@/components/ui/label';

const Home = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [rank, setRank] = useState("");

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    console.log("Selected Year:", year);
  };

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    console.log("Selected Program:", program);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  const handleRankChange = (event) => {
    setRank(event.target.value);
    console.log("Entered Rank:", event.target.value);
  };

  return (
    <>
      <div className='max-w-7xl m-auto border-b-[2px] p-20 lg:px-30 md:px-20 sm:px-10 '>
        <div className="w-full p-30 m-auto">
          <h1 className="text-2xl text-left mb-10 font-bold">Get Colleges for Your Rank</h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center">
            <div className="space-y-1">
            <YearBox onSelect={handleYearSelect} />
            </div>
            <div className="space-y-1">
            <ProgramBox onSelect={handleProgramSelect} />
            </div>
            <div className="space-y-1">
            <CategoryBox onSelect={handleCategorySelect} />
            </div>
            <div className="space-y-1">
              <Input
                placeholder="Enter your rank..."
                value={rank}
                onChange={handleRankChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-30 md:px-20 sm:px-5 py-5">
      <DataTableDemo
        year={selectedYear}
        branch={selectedProgram}
        category={selectedCategory}
        rank={rank}
      />
      </div>
    </>
  );
};

export default withAuth(Home);
