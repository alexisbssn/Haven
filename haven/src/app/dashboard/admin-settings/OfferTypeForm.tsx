"use client"

import BooleanFormField from "@/components/FormComponents/BooleanFormField/BooleanFormField"
import FormBtn from "@/components/FormComponents/FormBtn/FormBtn"
import TextFormField from "@/components/FormComponents/TextFormField/TextFormField"
import { Form } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function OfferTypeForm() {
  const { toast } = useToast()

  const createOfferTypeSchema = z.object({
    needsAdvancedVerification: z.boolean(),
    category: z.string(),
    iconUrl: z.string(),
    iconWithLabelUrl: z.string(),
    description: z.string(),
  })

  const form = useForm<z.infer<typeof createOfferTypeSchema>>({
    resolver: zodResolver(createOfferTypeSchema),
    defaultValues: {
      needsAdvancedVerification: false,
      category: "",
      iconUrl: "",
      iconWithLabelUrl: "",
      description: "",
    },
  })

  async function handleCreateOfferType(data: z.infer<typeof createOfferTypeSchema>) {
    // const { needsAdvancedVerification, category, iconUrl, iconWithLabelUrl, description } = data
    // const offerType: OfferType = {
    //   needsAdvancedVerification,
    //   category,
    //   iconUrl,
    //   iconWithLabelUrl,
    //   description,
    // }
    try {
      const res = await fetch("/api/offerTypes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error("something went wrong sending the data from the front-end")
      }
      const responseData = await res.json()
      toast({
        title: "Offer Type created",
        description: "You successfully created an offer type",
      })
    } catch (error) {
      console.log("something went wrong sending the data from the front-end", error)
    }
  }

  const {
    formState: { errors },
  } = form

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateOfferType)} className="flex flex-col">
        <div className="flex flex-col gap-5">
          <BooleanFormField
            control={form}
            error={errors.needsAdvancedVerification}
            name="needsAdvancedVerification"
            text="Needs Advanced Verification (doesn't work)"
          />
          <TextFormField control={form} error={errors.category} name="category" text="Category" />
          <TextFormField control={form} error={errors.iconUrl} name="iconUrl" text="Icon URL" />
          <TextFormField
            control={form}
            error={errors.iconWithLabelUrl}
            name="iconWithLabelUrl"
            text="Icon With Label URL"
          />
          <TextFormField
            control={form}
            error={errors.description}
            name="description"
            text="Description"
          />
        </div>
        <FormBtn text="create" />
      </form>
    </Form>
  )
}
