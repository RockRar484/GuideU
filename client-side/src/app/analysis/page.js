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
  const [rank, setRank] = useState("");

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
      <div className='max-w-7xl m-auto p-20 lg:p-30 md:p-20 sm:p-10 '>
        <Card className="w-full p-30 border-1 m-auto">
          <CardTitle className="text-2xl text-left mb-10">Get Colleges for Your Rank</CardTitle>
          <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 space-y-2">
            <div className="space-y-1">
              <ProgramBox onSelect={handleProgramSelect} />
            </div>
            <div className="space-y-1">
              <CategoryBox onSelect={handleCategorySelect} />
            </div>
            <div className="space-y-1">
              <InstituteBox onSelect={handleInstituteSelect} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="p-5 lg:p-30 md:p-20 sm:p-5">
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
