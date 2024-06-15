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

const institutes = [
    {
        "institute": "Indian Institute  of Technology Bhubaneswar"
    },
    {
        "institute": "Indian Institute  of Technology Bombay"
    },
    {
        "institute": "Indian Institute  of Technology Mandi"
    },
    {
        "institute": "Indian Institute  of Technology Delhi"
    },
    {
        "institute": "Indian Institute  of Technology Indore"
    },
    {
        "institute": "Indian Institute  of Technology Kharagpur"
    },
    {
        "institute": "Indian Institute  of Technology Hyderabad"
    },
    {
        "institute": "Indian Institute  of Technology Jodhpur"
    },
    {
        "institute": "Indian Institute  of Technology Kanpur"
    },
    {
        "institute": "Indian Institute  of Technology Madras"
    },
    {
        "institute": "Indian Institute  of Technology Gandhinagar"
    },
    {
        "institute": "Indian Institute  of Technology Patna"
    },
    {
        "institute": "Indian Institute  of Technology Roorkee"
    },
    {
        "institute": "Indian Institute  of Technology (ISM) Dhanbad"
    },
    {
        "institute": "Indian Institute  of Technology Ropar"
    },
    {
        "institute": "Indian Institute  of Technology (BHU) Varanasi"
    },
    {
        "institute": "Indian Institute  of Technology Guwahati"
    },
    {
        "institute": "Indian Institute of Technology Bhilai"
    },
    {
        "institute": "Indian Institute of Technology Goa"
    },
    {
        "institute": "Indian Institute  of Technology Palakkad"
    },
    {
        "institute": "Indian Institute  of Technology Tirupati"
    },
    {
        "institute": "Indian Institute of Technology Jammu"
    },
    {
        "institute": "Indian Institute of Technology Dharwad"
    },
    {
        "institute": ""
    }
]

export function InstituteBox({ onSelect }) {
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
            ? institutes.find((program) => program.institute === value)?.institute
            : "Select Institute..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search Institute..." />
          <CommandList>
            <CommandEmpty>No Institute found.</CommandEmpty>
            <CommandGroup>
              {institutes.map((program) => (
                <CommandItem
                  key={program.institute}
                  onSelect={() => handleSelect(program.institute)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === program.institute ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {program.institute}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
