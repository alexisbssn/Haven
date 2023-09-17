"use client"
import { Form } from "../ui/form"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import EmailFormField from "../FormComponents/EmailFormField/EmailFormField"
import PasswordFormField from "../FormComponents/PasswordFormField/PasswordFormField"
import FormBtn from "../FormComponents/FormBtn/FormBtn"
import { loginUser } from "@/types"
import { useToast } from "../ui/use-toast"

/**
 * This is the form that you see to login
 */
export default function LoginForm() {
  const router = useRouter()
  const { toast } = useToast()

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
      email: "rami.batnigi@gmail.com",
      password: "rami1995",
    },
  })

  const {
    formState: { errors },
  } = form

  async function onSubmit(data: z.infer<typeof userLoginSchema>) {
    console.log("the data was good")
    const { email, password } = data
    const user: loginUser = {
      email,
      password,
    }
    try {
      const res = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      if (!res.ok) {
        toast({
          title: "Something went wrong",
        })
        throw new Error("something went wrong sending the data from the front-end")
      }
      const data = await res.json()
      console.log(data)
      router.push("/dashboard")
    } catch (error) {
      console.log("something went wrong sending the data from the front-end", error)
    }
    toast({
      title: "welcome!",
    })
    router.push("/dashboard")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <EmailFormField control={form} error={errors.email} name="email" text="Email Address" />
        <PasswordFormField
          control={form}
          error={errors.password}
          name="password"
          signup={false}
          text="Password"
        />
        <FormBtn text="Log in" />
      </form>
    </Form>
  )
}
