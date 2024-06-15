"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const programs = [
    {
        "academic_program": "Civil Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Civil Engineering and M. Tech. in Structural Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Civil Engineering and M.Tech in Transportation Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Civil Engineering and M.Tech. in Environmental Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Computer Science and Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Electrical  Engineering and M.Tech Power Electronics and Drives (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Electrical Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Electronics and Communication Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Mechanical Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Mechanical Engineering and M. Tech. in Mechanical System Design (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Mechanical Engineering and M. Tech. in Thermal Science & Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Mechanical Engineering with M.Tech. in Manufacturing Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Metallurgical and Materials Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Aerospace Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "BS in Mathematics (4 Years, Bachelor of Science)"
    },
    {
        "academic_program": "Chemical Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Chemistry (4 Years, Bachelor of Science)"
    },
    {
        "academic_program": "Economics (4 Years, Bachelor of Science)"
    },
    {
        "academic_program": "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Energy Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Engineering Physics (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Environmental Science and Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "B.Tech in General Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "B.Tech in Materials Science and Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "B.Tech in Microelectronics & VLSI (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Bio Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "BS in Chemical Sciences (4 Years, Bachelor of Science)"
    },
    {
        "academic_program": "Data Science and Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Materials Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Mathematics and Computing (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Production and Industrial Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Textile Technology (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Space Sciences and Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Agricultural and Food Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Agricultural and Food Engineering with M.Tech. in any of the listed specializations (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Applied Geology (4 Years, Bachelor of Science)"
    },
    {
        "academic_program": "Architecture  (5 Years, Bachelor of Architecture)"
    },
    {
        "academic_program": "Biotechnology and Biochemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Civil Engineering with any of the listed specialization (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Electrical Engineering with M.Tech. in any of the listed specializations (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Electronics and Electrical Communication Engineering with M.Tech. in any of the listed specializations (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Exploration Geophysics (4 Years, Bachelor of Science)"
    },
    {
        "academic_program": "Industrial and Systems Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Industrial and Systems Engineering with M.Tech. in Industrial and Systems Engineering and Management (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Instrumentation Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Manufacturing Science and Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Manufacturing Science and Engineering with M.Tech. in Industrial and Systems Engineering and Management (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Mathematics and Computing (4 Years, Bachelor of Science)"
    },
    {
        "academic_program": "Mechanical Engineering with M.Tech. in any of the listed specializations (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Mining Engineering  (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Mining Safety Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Ocean Engineering and Naval Architecture (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Ocean Engineering and Naval Architecture (5 Years, Bachelor and Master of Technology (Dual Degree))"
    },
    {
        "academic_program": "Physics (4 Years, Bachelor of Science)"
    },
    {
        "academic_program": "Artificial Intelligence (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Biomedical Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Biotechnology and Bioinformatics (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Computational Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Electrical Engineering (IC Design and Technology) (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Engineering Science (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Industrial Chemistry (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Environmental Engineering and Management (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Environmental Science and Engineering (4 Years, Bachelor of Technology)"
    },
    {
        "academic_program": "Metallurgical Engineering and Materials Science (5 Years, Bachelor and Master of Technology (Dual Degree))"
    }
];

export function ProgramBox({ onSelect }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelect = (currentValue) => {
    setValue(currentValue === value ? "" : currentValue);
    onSelect(currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between overflow-auto"
        >
          {value
            ? programs.find((program) => program.academic_program === value)?.academic_program
            : "Select program..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search program..." />
          <CommandList>
            <CommandEmpty>No program found.</CommandEmpty>
            <CommandGroup>
              {programs.map((program) => (
                <CommandItem
                  key={program.academic_program}
                  onSelect={() => handleSelect(program.academic_program)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === program.academic_program ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {program.academic_program}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
