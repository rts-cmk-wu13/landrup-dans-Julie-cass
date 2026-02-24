import Link from "next/link"


export default function noAccess() {
    return (
        <>
            <main>
                <h1 className="text-red-400 uppercase">you got no access here</h1>
                <p>log ind for at få adgang</p>
                <Link href="/login" className="my-8">login</Link>
            </main>
        </>
    )
}