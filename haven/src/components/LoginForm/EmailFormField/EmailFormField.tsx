"use client"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldError } from "react-hook-form"

type Props = {
	control: any
	error: FieldError | undefined
	name: LoginField
}

/**
 * This is the field to enter the email adress
 */
export default function EmailFormField({ name, error, control }: Props) {
	return (
		<FormField
			name={name}
			control={control.control}
			render={({ field }) => (
				<FormItem>
					<FormLabel className="text-base font-normal">Email adress</FormLabel>
					<FormControl>
						<Input {...field} />
					</FormControl>
				</FormItem>
			)}
		/>
	)
}
