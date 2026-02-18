import LoginForm from "@/components/loginForm/LoginForm";
import Link from "next/link";


export default function LoginPage(){
    return(
        <>
<p>logo goes here</p>

        <h1>Log ind</h1>

        <LoginForm />

        <p>Er du endnu ikke bruger? <Link href="">Opret dig her.</Link></p>
        </>
    )
}