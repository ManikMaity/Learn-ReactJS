import propTypes from "prop-types";
import ProfileImg from "./ProfileImg.jsx";

function student(props) {
    return (
        <div className="studentCard">
            <ProfileImg url={props.url} size={50}/>
            <p>Name: {props.name}</p>
            <p>Age : {props.age}</p>
            <p>{props.isStudent? "He is a student" : "He is not a student"}</p>
        </div>
    );
}

student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool
}

student.defaultProps = {
    name : "Student",
    age : "Null"
}

export default student;