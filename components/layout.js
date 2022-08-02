import Footer from "./footer";
import Navigation from "./navigation";

const Layout = ({ children }) => {
    return ( 
        <div className="h-screen relative">
            <Navigation/>
            { children }
            <Footer/>
        </div>
    );
}
 
export default Layout;