"use client"
import Image from "next/image"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import {
    z
} from "zod"
import {
    Field,
    FieldLabel,
    FieldDescription,
    FieldError
} from "@/components/ui/field"
import {
    Button
} from "@/components/ui/button"
import {
    Input
} from "@/components/ui/input"
import { ChangeEvent, useState } from "react"
import { createArticle } from "./actions"
import { useSession } from "next-auth/react"

const formSchema = z.object({
    title: z.string().min(1),
    body: z.string().min(1)
});

export default function MyForm() {
    const [ image, setImage ] = useState<File>();
    const session = useSession()
    const handleUpload = (e : ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setImage(e.target.files![0])
    }
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        //validate image
        
        try {
           const form  = new FormData()
            form.append("authorId", session.data?.user.id! )
            form.append("title", values.title)
            form.append("body", values.body)
            form.append("image", image!)
            const message = await createArticle(form)
            console.log(message)
        } catch (error) {
            console.error("Form submission error", error);

        }
    }

    return (
        // <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
            <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                    id="title"
                    placeholder="Article Title"

                    {...form.register("title")}
                />

                <FieldError>{form.formState.errors.title?.message}</FieldError>
            </Field>
            <Field>
                <FieldLabel htmlFor="body">Body</FieldLabel>
                <Input
                    id="body"
                    placeholder="Article Body"

                    {...form.register("body")}
                />

                <FieldError>{form.formState.errors.body?.message}</FieldError>
            </Field>
            <Field>
                {
                    image &&  <Image alt="preview" src={URL.createObjectURL(image)} width={50} height={50}/>
                }
                <FieldLabel htmlFor="image">Image</FieldLabel>
                <Input
                    id="image"
                    placeholder=""
                    type="file"
                    onChange={(e) => handleUpload(e)}
                />

                {/* <FieldError>{form.formState.errors.image?.message}</FieldError> */}
            </Field>
            <Button type="submit">Submit</Button>
        </form>
        // </Form>
    )
}