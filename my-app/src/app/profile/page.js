import ProfilePageComp from "@/components/Profilepage/ProfilePage"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"



export default async function ProfilePage(){
/*     const cookieStore = await cookies()
if(!cookieStore.has('accessToken')) return redirect ("/login")
 */
    return(
        <>
        <main>
            <h1>this idea better work, bonk</h1>
           <ProfilePageComp />
        </main>
        </>
    )
}