import Link from "next/link";

function about() {
    return (
        <>
            <div>
                <h1>
                    About Page
                </h1>
            </div>
            <Link href={"/"}>go to Home Page</Link>
        </>
    )
}

export default about;