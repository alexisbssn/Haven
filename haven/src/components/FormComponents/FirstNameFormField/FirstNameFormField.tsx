import { FieldError } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupField } from "@/types"

type Props = {
  control: any
  error: FieldError | undefined
  name: SignupField
  text: string
}

/**
 * This is the form field for the first name
 */
export default function FirstNameFormField({ control, error, name, text }: Props) {
  return (
    <FormField
      name={name}
      control={control.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-normal">{text}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
