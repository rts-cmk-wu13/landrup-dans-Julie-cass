import LoginForm from "@/components/frontPage/loginForm/LoginForm";
import LogoComp from "@/components/Logo";
import Link from "next/link";


export default function LoginPage() {
    return (
        <>
        <LogoComp />

        
        <section className="LoginPageSec">
            <h1 className="loginTitle">Log ind</h1>

            <LoginForm />

            <p>Er du endnu ikke bruger? <Link className="LinkToMakeUser" href="">Opret dig her.</Link></p>
            </section>
        </>
    )
}