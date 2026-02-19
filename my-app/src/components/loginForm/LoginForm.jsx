"use client"
import { useActionState } from "react"
import { loginUser } from "./action"
import LogoComp from "../Logo"


const initialState = {
    values: {
        username: "",
        password: "",
    },
    errors: undefined
}

export default function LoginForm() {

    const [state, formAction, isPending] = useActionState(loginUser, initialState)
    console.log(state);


    return (
        <>
        <LogoComp />

        
            <form action={formAction} noValidate>

                {/* username */}
                <div>
                   
                    <input placeholder="Brugernavn" type="username" name="username" defaultValue={state.values.username} />
                    {state.errors?.username && <p>{state.errors.username}</p>}
                </div>

                {/* password */}
                <div>
                  
                    <input placeholder="Adgangskode" type="password" name="password" defaultValue={state.values.password} />
                    {state.errors?.password && <p>{state.errors.password}</p>}

                </div>

                {/* submit button */}
                <button type="submit" disabled={isPending}>{isPending ? "logging ind" : "Log ind"}</button>


                {state.errors?.form && <p>{state.errors.form}</p>}
            </form>


        </>
    )
}