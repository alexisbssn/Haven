"use client"
import { Button } from "../ui/button"
import { Form } from "../ui/form"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import EmailFormField from "../FormComponents/EmailFormField/EmailFormField"
import PasswordFormField from "../FormComponents/PasswordFormField/PasswordFormField"
import FormBtn from "../FormComponents/FormBtn/FormBtn"

/**
 * This is the form that you see to login
 */
export default function LoginForm() {
	const router = useRouter()

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

	function onSubmit(data: z.infer<typeof userLoginSchema>) {
		router.push("/dashboard")
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col"
			>
				<EmailFormField
					control={form}
					error={errors.email}
					name="email"
					text="Email Address"
				/>
				<PasswordFormField
					control={form}
					error={errors.password}
					name="password"
					signup={false}
					text="Password"
				/>
				<FormBtn text="Log in"/>
			</form>
		</Form>
	)
}
