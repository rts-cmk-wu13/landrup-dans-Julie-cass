"use server"
import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const loginScema = z.object({
    email: z.email("Intast en gyldig email adresse."),
    password: z.string().min(6, "password skal være mindst 6 karakterer.")
})

export async function loginUser(prevState, formData) {

    const email = formData.get("email")
    const password = formData.get("password")
    const cookieStore = await cookies()
    console.log(email, password);


    if (email === prevState.values.email && password === prevState.values.password) {
        return prevState
    }
    const result = loginScema.safeParse({ email, password })

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors)

        return {
            values: { email, password },
            errors: z.flattenError(result.error).fieldErrors
        }
    }

    const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    if (!response.ok) {
        return {
            values: { email, password },
            errors: { form: ["suck my weiner"] }
        }
    }

const data = await response.json()
cookieStore.set("authToken", data.accessToken)
cookieStore.set("username", data.name)

return redirect("/")
}