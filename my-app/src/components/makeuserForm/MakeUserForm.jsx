"use client"


import { useActionState } from "react"
import { MakeUser } from "./action"

import "./MakeUserForm.css";

const initialState = {
    values: {
        name: "",
        surname: "",
        username: "",
        age: "",
        password: "",
        confirmPassword: "",
    },
    errors: undefined
}

export default function MakeUserForm() {

    const [state, formAction, isPending] = useActionState(MakeUser, initialState)
    console.log(state);


    return (
        <>



            <form className="MakeUserForm" action={formAction} noValidate>


                <div className="MakeUserErrorBox">
                    <p className="error">{state.errors?.name?.[0]}</p>
                    <p className="error">{state.errors?.surname?.[0]}</p>
                    <p className="error">{state.errors?.username?.[0]}</p>
                    <p className="error">{state.errors?.age?.[0]}</p>
                    <p className="error">{state.errors?.password?.[0]}</p>
                    <p className="error">{state.errors?.confirmPassword?.[0]}</p>
                </div>


                {/* name */}
                <div className="MakeUserInputBox">
                    <input className="MakeUserInput" placeholder="Fornavn" type="text" name="name" />
                </div>

                {/* surname */}
                <div className="MakeUserInputBox">
                    <input className="MakeUserInput" placeholder="Efternavn" type="text" name="surname" />
                </div>

                {/* username */}
                <div className="MakeUserInputBox">
                    <input className="MakeUserInput" placeholder="Brugernavn" type="username" name="username" />
                </div>

                {/* age */}
                <div className="MakeUserInputBox">
                    <input className="MakeUserInput" placeholder="Alder" type="text" name="age" />
                </div>

                {/* password */}
                <div className="MakeUserInputBox">
                    <input className="MakeUserInput" placeholder="Adgangskode" type="password" name="password" />
                </div>

                {/* password again */}
                <div className="MakeUserInputBox">
                    <input className="MakeUserInput" placeholder="Adgangskode" type="password" name="confirmPassword" />
                </div>

                {/* submit button */}
                <button className="MakeUserSubmitBtn" type="submit" disabled={isPending}>
                    {isPending ? "logging ind" : "Log ind"}</button>


            </form>


        </>
    )
}