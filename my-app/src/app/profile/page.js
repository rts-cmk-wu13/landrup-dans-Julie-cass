import { cookies } from "next/headers";
import { getUsersById, getActivities } from "@/dal";

export default async function Profilepage() {
    const cookieStore = await cookies()
    const userId = cookieStore.get('username')
    const user = await getUsersById(userId.value)
    const ACTIVITY = await getActivities()

    console.log(user);
    
    return (
        <>
            <main>
                <section>
                    <figure>
<img src="" alt="" />                   
 </figure>
                    <h1>Velkommen</h1>
                    <p>{user.firstname} {user.lastname}</p>
                    <p>{user.role}</p>
                </section>
            </main>
        </>
    )
}