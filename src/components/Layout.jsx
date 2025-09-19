import {Link} from 'react-router-dom'

function Layout() {
    return(
        <>
        <h1>My Ports</h1>
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/contact">Contact</Link> | 
            <Link to="/education">Education</Link> | 
            <Link to="/projects">Projects</Link> | 
        </nav>
        </>
    )
}
export default Layout;