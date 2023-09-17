"use client"
import { Form } from "../ui/form"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import EmailFormField from "../FormComponents/EmailFormField/EmailFormField"
import FirstNameFormField from "../FormComponents/FirstNameFormField/FirstNameFormField"
import LastNameFormField from "../FormComponents/LastNameFormField/LastNameFormField"
import PasswordFormField from "../FormComponents/PasswordFormField/PasswordFormField"
import AccountTypeFormRadioGroup from "../FormComponents/AccountTypeFormRadioGroup/AccountTypeFormRadioGroup"
import FormBtn from "../FormComponents/FormBtn/FormBtn"
import { SignupUser } from "@/types"

export default function SignupForm() {
	const router = useRouter()
	const userSignupSchema = z
		.object({
			accountType: z.enum(["refugee", "supporter", "admin"]),
			confirmEmail: z.string().min(2).email(),
			email: z.string().min(2).email(),
			firstName: z.string().min(2),
			lastName: z.string().min(2),
			password: z.string().min(8),
		})
		.superRefine(({ email, confirmEmail }, ctx) => {
			if (email !== confirmEmail) {
				ctx.addIssue({
					code: "custom",
					message: "Emails do not match",
				})
			}
		})

	const form = useForm<z.infer<typeof userSignupSchema>>({
		resolver: zodResolver(userSignupSchema),
		defaultValues: {
			accountType: "supporter",
			confirmEmail: "rami.batnigi@gmail.com",
			email: "rami.batnigi@gmail.com",
			firstName: "Rami",
			lastName: "Elbatnigi",
			password: "rami1995",
		},
	})

	const {
		formState: { errors },
	} = form

	async function onSubmit(data: z.infer<typeof userSignupSchema>) {


		const { accountType, firstName, lastName, password, email } = data
		const user: SignupUser = {
			email,
			firstName,
			lastName,
			type: accountType,
			password,
		}
		try {
			const res = await fetch("/api/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			})
		} catch (error) {
			console.log('something went wrong sending the data from the front-end', error)
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col"
			>
				<div className="flex gap-5">
					<FirstNameFormField
						control={form}
						error={errors.firstName}
						name="firstName"
						text="First Name"
					/>
					<LastNameFormField
						control={form}
						error={errors.lastName}
						name="lastName"
						text="Last Name"
					/>
				</div>
				<EmailFormField
					control={form}
					error={errors.email}
					name="email"
					text="Email Address"
				/>
				<EmailFormField
					control={form}
					error={errors.email}
					name="confirmEmail"
					text="Confirm Email Address"
				/>
				<PasswordFormField
					control={form}
					error={errors.password}
					name="password"
					signup={true}
					text="Password"
				/>
				<AccountTypeFormRadioGroup defaultValue="supporter" />
				<FormBtn text="Sign up" />
			</form>
		</Form>
	)
}
