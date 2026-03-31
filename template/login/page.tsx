"use client"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import { Bounce, toast } from 'react-toastify';
import {
  Field,
  FieldLabel,
  FieldError
} from "@/components/ui/field"
import {
  Button
} from "@/components/ui/button"
import {
  Input
} from "@/components/ui/input"

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/providers/auth-context-provider";
import { useLoginStore } from "./store";
const formSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required").max(8)
});

export default function Login() {
  const router = useRouter();
  const { setEmail } = useLoginStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      setEmail(values.email)
      router.replace("/products")
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          placeholder="Please enter your email"

          {...form.register("email")}
        />

        <FieldError>{form.formState.errors.email?.message}</FieldError>
      </Field>
      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Input
          id="password"
          placeholder="Please enter your password"

          {...form.register("password")}
        />

        <FieldError>{form.formState.errors.password?.message}</FieldError>
      </Field>
      <Button type="submit">Submit</Button>
    </form>
  )
}