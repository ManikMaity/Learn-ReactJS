import { useState } from "react";
import ReuseButton from "./ReuseButton.jsx";


function UpdateArrOfObjExample () {

    const [phones, setPhones] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");


const handleAddPhone = () => {
    if (year != "" && brand != "" && model != ""){
        const newPhone = {
            brand : brand,
            model : model,
            year : year
        }
        setBrand("");
        setYear(new Date().getFullYear());
        setModel("");
        setPhones(p => [...phones, newPhone]);

    }
}

const handleDeletePhone = (i) => {
    const sure = confirm(`Are you realy wanna delete ${phones[i].brand} ${phones[i].model}?`)
    if (sure){
        setPhones(phones.filter((_, index) => index != i));
    }
    else{
        return;
    }
}


const handleChangeYear = (e) => {
    setYear(e.target.value);
}    
const handleChangeBrand = (e) => {
    setBrand(e.target.value);
}
const handleChangeModel = (e) => {
    setModel(e.target.value);
}

const listHTML = phones.map((phone, index) => <div className="phoneCard-item" onDoubleClick={() => handleDeletePhone(index)} key={index}>
                                                <p>Name: {phone?.brand} {phone?.model}</p>
                                                <p>Year: {phone?.year}</p>
                                            </div>)

    return (
        <div className="card">
            <input type="number" min="1700" max={new Date().getFullYear()} value={year} onChange={handleChangeYear} name="" id="" />
            <input type="text" value={brand} onChange={handleChangeBrand} placeholder="Enter phone brand name.." name="" id="" />
            <input type="text" value={model} onChange={handleChangeModel} placeholder="Enter phone model name.." name="" id="" />
            <ReuseButton text="Add Phone" func={handleAddPhone} style={{width : "100%"}}/>
            <br />
            <h2>List Of Phone Objects</h2>


            <div className="phoneCards-container">
                {phones.length > 0 && listHTML}
            </div>
        </div>
    )
}

export default UpdateArrOfObjExample;