"use client"

import { FieldError } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DatePicker } from "@/components/ui/date-picker"

type Props = {
  control: any
  error: FieldError | undefined
  name: string
  text: string
}

export default function DateFormField({ control, error, name, text }: Props) {
  return (
    <FormField
      name={name}
      control={control.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-normal">{text}</FormLabel>
          <FormControl>
            <DatePicker {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
