import profilePic from "./assets/manik-maity.jpeg"
import Button from "./Button/button.jsx";
import SecondaryBtn from "./SecondaryButton.jsx";



function Card (){

    const lightMode = () => {
        document.querySelector(".card").classList.toggle("darkCard");
    }


    return (
       
        <div className="card">
            <img alt="Profile Picture" src={profilePic}></img>
            <h2 className="card-title">Manik Maity</h2>
            <p className="card-text">B.com (H) | I like development</p>
            <div>
            <Button func={lightMode}/>
            </div>

        </div>
    )
}

export default Card;