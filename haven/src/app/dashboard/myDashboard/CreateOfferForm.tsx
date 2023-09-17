"use client"

import BooleanFormField from "@/components/FormComponents/BooleanFormField/BooleanFormField"
import DateFormField from "@/components/FormComponents/DateFormField/DateFormField"
import FormBtn from "@/components/FormComponents/FormBtn/FormBtn"
import TextFormField from "@/components/FormComponents/TextFormField/TextFormField"
import { Form } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { coerce, z } from "zod"

export default function OfferTypeForm() {
  const { toast } = useToast()

  const createOfferSchema = z.object({
    description: z.string(),
    type: z.string(),
    creator: z.string(),
    availabilityDate: z.date(),
    pictureUrl: z.string(),
  })

  const form = useForm<z.infer<typeof createOfferSchema>>({
    resolver: zodResolver(createOfferSchema),
    defaultValues: {
      description: "",
      type: "",
      creator: "",
      availabilityDate: new Date(),
      pictureUrl: "",
    },
  })

  async function handleCreateOffer(data: z.infer<typeof createOfferSchema>) {
    try {
      const res = await fetch("/api/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error("something went wrong")
      }
      const responseData = await res.json()
      toast({
        title: "Offer created",
        description: "You successfully posted an offer",
      })
    } catch (error) {
      console.error(error)
    }
  }

  const {
    formState: { errors },
  } = form

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateOffer)} className="flex flex-col">
        <div className="flex flex-col gap-5">
          <TextFormField
            control={form}
            error={errors.description}
            name="description"
            text="Description"
          />
          <TextFormField control={form} error={errors.type} name="type" text="Type" />
          <TextFormField control={form} error={errors.creator} name="creator" text="Creator" />
          <DateFormField
            control={form}
            error={errors.availabilityDate}
            name="availabilityDate"
            text="Availability Date"
          />
          <TextFormField
            control={form}
            error={errors.pictureUrl}
            name="pictureUrl"
            text="Picture URL"
          />
        </div>
        <FormBtn text="create" />
      </form>
    </Form>
  )
}
