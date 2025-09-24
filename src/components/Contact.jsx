import './Contact.css';
export default function Contact(){
    return(
        <>
        <div>
        <h1>Contact Information</h1>
        <p class = "parabold">Rohan Tenn</p>
        <p class = "parabold">rtenn4@my.centennialcollege.ca</p>
        <p class = "parabold">647-524-4425</p>
        <p class = "parabold">Toronto, Canada</p></div>
        <hr />

        <div>


             <h2>Any Questions? - Enter your Contact Infomation</h2>
            <form action="/" method="get">
            <b>First name -</b> <input type="text" name="firstName" required />
            <br />

            <b>Last name -</b> <input type="text" name="lastName" required />
            <br />

            <b>Phone Number -</b> <input type="tel" name="phoneNum" required />
            <br />

            <b>E-Mail Address -</b> <input type='email' name="emailAddress" required />
            <br />

            <b>Message Here -</b> <textarea name="messageBox" required> </textarea> 
            <br />

            <button type="submit" name="submitButton">Submit Form </button>


            </form>

           


        </div>

        </>
    )
}