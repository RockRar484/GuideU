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

const categories = [
  {
    value: "SC",
    label: "SC",
  },
  {
    value: "ST(PwD)",
    label: "ST(PwD)",
  },
  {
    value: "SC(PwD)",
    label: "SC(PwD)",
  },
  {
    value: "ALL",
    label: "ALL",
  },
  {
    value: "OPEN",
    label: "OPEN",
  },
  {
    value: "OBC-NCL(PwD)",
    label: "OBC-NCL(PwD)",
  },
  {
    value: "EWS(PwD)",
    label: "EWS(PwD)",
  },
  {
    value: "OPEN(PwD)",
    label: "OPEN(PwD)",
  },
  {
    value: "ST",
    label: "ST",
  },
  {
    value: "EWS",
    label: "EWS",
  },
  {
    value: "OBC-NCL",
    label: "OBC-NCL",
  },
]

export function CategoryBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categories.find((framework) => framework.value === value)?.label
            : "Category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Category..." />
          <CommandList>
            <CommandEmpty>No Category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
