import {Link} from 'react-router-dom';

import resume from '../assets/resume.pdf';
export default function About(){
    return(
        <>

        <h1>About Me</h1>


        
        <div>
            <p>My name is Rohan Tenn.</p>
            <p>
                 I am currently a student at Cenntennial College in the software engineering technicaian program. I am from Canada and have been learning how to program since highschool. Started with C+ all the way up to C#. Ready to learn more to complete more projects in the future.
            </p>

            <a href={resume} target="_blank"> <button>View My Resume</button></a>
            {/* the _blank tag causes the pdf to be opened on a new tab */}
           
        </div>




        </>
    )
}