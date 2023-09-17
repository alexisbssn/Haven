"use client"

import { FieldError } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginField, SignupField } from "@/types"
import { Button } from "@/components/ui/button"

type Props = {
  control: any
  error: FieldError | undefined
  name: LoginField | SignupField
  text: string
  signup: boolean
}

/**
 * This is the field to enter the password
 */
export default function PasswordFormField({ control, error, name, text, signup }: Props) {
  return (
    <FormField
      name={name}
      control={control.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base font-normal">
            {text}
            {signup ? (
              <div>
                <span>Please make sure your password</span>
                <div className="flex">
                  <span className="ml-4 font-bold">&bull;</span>
                  <span className="ml-2">is at least eight (8) characters long</span>
                </div>
                <div>
                  <span className="ml-4 font-bold">&bull;</span>
                  <span className="ml-2">has at least one number</span>
                </div>
              </div>
            ) : null}
          </FormLabel>

          <FormControl>
            <Input {...field} type="password" />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
