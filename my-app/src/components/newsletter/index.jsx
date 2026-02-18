"use client"
import { useActionState } from "react"
import SignUpNewsAction from "./action"

export default function Newsletter() {
const [formState, formAction, isPending] = useActionState(SignUpNewsAction,{})
 
    return (
        <section>
            <h2>Nyhedsbrev</h2>
            <p>Få direkte besked når vi har sæsonstart
                eller afholder arrangementer.</p>
            <form action={formAction}>
                <div>
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <button type="submit">Tilmeld</button>
            </form>
        </section>
    )
}

