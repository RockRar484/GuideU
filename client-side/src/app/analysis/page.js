'use client';
import React, { useState } from 'react';
import withAuth from '@/hoc/withAuth';
import LineChart from './LineChart';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ProgramBox } from '../colleges/Colleges';
import { CategoryBox } from '../colleges/Category';
import { InstituteBox } from './Institute';

const Home = () => {
  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
    console.log("Selected Program:", program);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category:", category);
  };

  const handleInstituteSelect = (institute) => {
    setSelectedInstitute(institute);
    console.log("Selected Institute:", institute);
  };

  return (
    <>
      <div className='max-w-7xl border-b-[2px] m-auto p-20 lg:px-30 md:px-20 sm:px-10'>
        <div className="w-full p-30 border-1 m-auto">
          <h1 className="text-2xl text-left mb-10 font-bold">Yearly Trends of Ranks</h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="space-y-1">
              <ProgramBox onSelect={handleProgramSelect} />
            </div>
            <div className="space-y-1">
              <CategoryBox onSelect={handleCategorySelect} />
            </div>
            <div className="space-y-1">
              <InstituteBox onSelect={handleInstituteSelect} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <LineChart
          branch={selectedProgram}
          category={selectedCategory}
          institute={selectedInstitute}
        />
      </div>
    </>
  );
};

export default withAuth(Home);
