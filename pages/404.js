import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);
    return ( 
        <div className="maindiv">
            <div className="innermain">
                <h1 className="titles text-6xl">404</h1>
                <h5 className="text-sm text-center">page not found</h5>
                <h6><Link href={"/"}><a className="text-center text-sm text-red-500 font-semibold">Go to the homepage </a></Link></h6>
            </div>
        </div>
    );
}
 
export default ErrorPage;