"use server"
import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


//defines validation rules are followed like theses fields need to be filled out
const registerSchema = z.object({
    name: z.string().min(1, "Indtast fornavn"),
    surname: z.string().min(1, "Indtast efternavn"),
    username: z.string()
        .min(1, "Indtast et brugernavn."),
    age: z.string().min(1, "Indtast alder"),
    password: z.string().min(1, "Indtast et password"),
    confirmPassword: z.string()

    //if the two password inputs do not match you get an error
}).refine((data) => data.password === data.confirmPassword, {
    message: "password matcher ikke.",
    path: ["confirmPassword"]
})


export async function MakeUser(prevState, formData) {

    //makes are data into an object so it's easier to impliment in functions
    const formValues = {
        name: formData.get("name"),
        surname: formData.get("surname"),
        username: formData.get("username"),
        age: formData.get("age"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    }

    //make sure the submmission works
    console.log("Form values:", formValues)


    const result = registerSchema.safeParse(formValues)

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors)

        return {
            values:formValues,
            errors: z.flattenError(result.error).fieldErrors
        }
    }



    const response = await fetch("http://localhost:4000/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: formValues.name,
            surname: formValues.surname,
            username: formValues.username,
            age: formValues.age,
            password: formValues.password,
            role: "default"
        })
    })

    //if there's an error in the backend
    if (!response.ok) {
        return {
            values: formValues,
            errors: { form: ["Kunne ikke oprette bruger"] }
        }
    }


    const data = await response.json()


    const cookieStore = await cookies()

    cookieStore.set("authToken", data.accessToken)
    cookieStore.set("username", data.name)

    return redirect("/login")
}