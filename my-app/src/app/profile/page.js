import ProfilePageComp from "@/components/Profilepage/ProfilePage"

import { cookies } from "next/headers"



export default async function ProfilePage({ params }) {

    const cookieStore = await cookies()
if(!cookieStore.has('authToken')) return redirect ("/login")

    return(
        <>
        <main>
            <h1>this idea better work, bonk</h1>
           <ProfilePageComp/>
        </main>
        </>
    )
}