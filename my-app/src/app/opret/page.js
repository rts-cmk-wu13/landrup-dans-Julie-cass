import LogoComp from "@/components/Logo";
import MakeUserForm from "@/components/makeuserForm/MakeUserForm";

export default function MakeUserPage(){
    return(
        <>
<LogoComp />
        <section className="MakeUserPageSec">
        <h1 className="MakeUserTitle">Opret bruger</h1>
        <MakeUserForm />
        </section>
        </>
    )
}