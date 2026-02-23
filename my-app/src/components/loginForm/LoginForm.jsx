"use client"
import { useActionState } from "react"
import { loginUser } from "./action"

import "./loginForm.css"

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



            <form className="loginForm" action={formAction} noValidate>
                <div className="LoginErrorBox">
                    <p className="error">{state.errors?.username?.[0]}</p>
                    <p className="error">{state.errors?.password?.[0]}</p>
                </div>
                {/* username */}
                <div className="loginInputBox">

                    <input className="loginInput" placeholder="Brugernavn" type="username" name="username" defaultValue={state.values.username} />
                </div>

                {/* password */}
                <div className="loginInputBox">

                    <input className="loginInput" placeholder="Adgangskode" type="password" name="password" defaultValue={state.values.password} />

                </div>

                {/* submit button */}
                <button className="loginSubmitBtn" type="submit" disabled={isPending}>{isPending ? "logging ind" : "Log ind"}</button>


                {state.errors?.form && <p>{state.errors.form}</p>}
            </form>


        </>
    )
}