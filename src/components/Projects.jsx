import './Projects.css';
import cafe from '../assets/cafe.png'
import gameoflife from '../assets/gameoflife.png';
import groceryapp from '../assets/groceryapp.png';
export default function Projects(){
    return(
        <>
        <h1>Projects</h1>
        
        <div class = "projects">

            <div><b>In Development:</b> Grocery app for customers to pickup at the closest store. <b>Role:</b> App Designer. <br /> <img src={groceryapp} alt="app" /></div>

            <div><b>Completed:</b> A game called Conway's Game of Life created in C#. <b>Role:</b> Main Developer.  <br /> <img src={gameoflife} alt="gameoflife image" /></div>

            <div><b>Completed:</b> Created a website for a restaurant called Cloud Cafe <b>Role:</b> Main/Only Developer. <br /> <img src={cafe} alt="cafe" /></div>



        </div>

        {/* In a div to a css flexbox to order the items in a row */}




        </>
    )
}