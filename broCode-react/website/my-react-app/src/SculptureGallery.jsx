import { useState } from "react";
import { sculptureList } from "./assets/data.js";
import ReuseButton from "./ReuseButton.jsx" 

/*{
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
  } */

  const style = {
    margin : "10px 0px"
  }
  const style2 ={
    fontSize : "2rem",
    color : "#5d5d5d"
  }

function ScupltureGallery (){

    let [index, setIndex] = useState(0);
    let [showDes, setShowDes] = useState(false);

    const changeShowDes = () => {
        setShowDes(!showDes);
    }

    let hasNextIndex = index < sculptureList.length - 1;
    let hasPrevious = index > 0;

    const goNext = () => {
        if (hasNextIndex){
            setIndex(++index);
        }
        else{
            return;
        }
    }

    const goPrevious = () => {
        if (hasPrevious){
            setIndex(--index);
        }
    }

    let sculptureItem = sculptureList[index];

    return (
        <div className="scupture-gallery">
            <div className="btn-container">
                <ReuseButton func={goNext} text="Next"/>
                <ReuseButton func={goPrevious} text="Previous"/>
            </div>
            <h2 style={style2}>{index + 1}/{sculptureList.length}</h2>
            <div>
                <h2>{sculptureItem.name}</h2>
                <p>Artist: {sculptureItem.artist}</p>
            </div>
            <img src={sculptureItem.url} alt={sculptureItem.alt} />
            <div>
                <ReuseButton func={changeShowDes} text="Show Dscription"/>
                {showDes && <p style={style}>{sculptureItem.description}</p>}
            </div>
            
        </div>
    )
}

export default ScupltureGallery;