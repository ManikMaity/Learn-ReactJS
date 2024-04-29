import profilePic from "./assets/manik-maity.jpeg"
import Button from "./Button/button.jsx";
import SecondaryBtn from "./SecondaryButton.jsx";

function Card (){
     // for card used gloabl styling 
     // for button one used module styling
     // for button two used inline styling
    return (
       
        <div className="card">
            <img alt="Profile Picture" src={profilePic}></img>
            <h2 className="card-title">Manik Maity</h2>
            <p className="card-text">B.com (H) | I like development</p>
            <div>
            <Button/>
            <SecondaryBtn/>
            </div>

        </div>
    )
}

export default Card;