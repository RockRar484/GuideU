'use client'
import React,{useState} from 'react'
import withAuth from '@/hoc/withAuth'
import { DataTableDemo } from './CollegesTable'
import { Card, CardContent,CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {  YearBox } from './Year'
import { ProgramBox } from './Colleges'
import { CategoryBox } from './Category'


const Home = () => {
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleYearSelect = (year) => {
    setSelectedYear(year)
    console.log("Selected Year:", year)
  }

  const handleProgramSelect = (program) => {
    setSelectedProgram(program)
    console.log("Selected Program:", program)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    console.log("Selected Category:", category)
  }
  return (
    <>
      <div className='max-w-7xl m-auto p-20'>
      <Card className="w-full p-30 border-1 m-auto">

        <CardTitle className="text-2xl text-left m-0">Get Colleges for Your Rank</CardTitle>

        <CardContent className="grid grid-cols-3 gap-4">
            <YearBox onSelect={handleYearSelect} />
            <ProgramBox onSelect={handleProgramSelect}/>
            <CategoryBox onSelect={handleCategorySelect}/>
        </CardContent>
        </Card>
        </div>
    <DataTableDemo/>

    </>
  )
}

export default withAuth(Home)


// year dropdown crl normal input branch dropdown categorty rank mode
