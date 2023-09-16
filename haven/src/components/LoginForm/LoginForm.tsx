"use client"
import { Form } from "../ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import EmailFormField from "./EmailFormField/EmailFormField"
import PasswordFormField from "./PasswordFormField/PasswordFormField"
import { useEffect, useState } from "react"

/**
 * This is the form that you see to login
 */
export default function LoginForm() {
	const [client, setIsClient] = useState(false)

	const userLoginSchema = z.object({
		email: z.string().min(2).email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long" })
			.max(100, { message: "Password must be less than 100 characters" }),
	})

	const form = useForm<z.infer<typeof userLoginSchema>>({
		resolver: zodResolver(userLoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const {
		formState: { errors },
	} = form

	function onSubmit() {}

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		client && (
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<EmailFormField
						error={errors.email}
						control={form}
						name="email"
					/>
					<PasswordFormField
						error={errors.password}
						control={form}
						name="password"
					/>
				</form>
			</Form>
		)
	)
}
