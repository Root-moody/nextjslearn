import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    return ( 
        <nav className="flex justify-between items-center bg-stone-400 h-[8vh] drop-shadow">
            <div className="font-medium ml-6">
                <Image src={"/MOODY'S.png"} height={30} width={80}>

                </Image>
            </div>
            <div className="mr-5">
                <Link href="/"><a className="mr-3">Home</a></Link>
                <Link href="/about"><a className="mr-3">About</a></Link>
                <Link href="/listing"><a className="mr-3">Listings</a></Link>
            </div>
        </nav>
    );
}
 
export default Navigation;