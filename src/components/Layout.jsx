import {Link} from 'react-router-dom';
import './Layout.css';
import logo from '../assets/logo.png';

function Layout() {
    return(
        <>
       <div className="navspace">
            <nav className="navbar">
                <div className="logo-div">
                    <Link to="/"><img src ={logo} alt="RT Logo" className="logo" /></Link>
                </div>

                
                <Link to="/">Home</Link> |  
                <Link to="/about">About</Link> | 
                <Link to="/projects">Projects</Link> |  
                <Link to="/education">Education</Link> | 
                <Link to="/services">Services</Link> |  
                <Link to="/contact">Contact</Link> |    
                

               
            </nav>
            

       </div>
        
        </>
    )
}
export default Layout;