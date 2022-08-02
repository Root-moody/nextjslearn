import Head from "next/head";
import Link from "next/link";
export async function getStaticProps(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {users: data }
    }
}

const Listing = ({users}) => {
    return ( 
        <>
            <Head>
                <title>Moody | Listings</title>
            </Head>
            <div className="maindiv">
                <div className="innermain">
                    <h2 className="titles">Random Users From An API For Testing</h2>
                    <div>
                        {users.map(user =>(
                            <Link href={"/listing/" + user.id} key={user.id}>
                                <a>
                                    <h4 className="p-2 mb-2 text-base bg-slate-200 border-l-[5px] hover:border-stone-700">
                                        {user.name}
                                    </h4>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Listing;