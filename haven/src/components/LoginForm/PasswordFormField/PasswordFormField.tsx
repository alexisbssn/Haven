"use client"
import { FieldError } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
	control: any
	error: FieldError | undefined
	name: LoginField
}

/**
 * This is the field to enter the password
 */
export default function PasswordFormField({ name, error, control }: Props) {
  return (
    <FormField
			name={name}
			control={control.control}
			render={({ field }) => (
				<FormItem>
					<FormLabel className="text-base font-normal">Password</FormLabel>
					<FormControl>
						<Input {...field} type="password"/>
					</FormControl>
				</FormItem>
			)}
		/>
  )
}
