import "./TicTacToe.css";

// assets
import circleImg from "../Assets/circle-regular.svg";
import crossImg from "../Assets/xmark-solid.svg";
import { useRef, useState } from "react";


let data = ["", "", "", "", "", "", "", "", ""];

//rafc -> shorthand to create the fuction inside JSX
function TicTacToe() {

    const [count, setCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const titleRef = useRef(null);

    const toggle = (e, num) => {
        if (gameOver){
            return;
        }
        
        if (e.target.dataset.clicked == "o" || e.target.dataset.clicked == "x"){
            return;
        }

        if (count%2 == 0){
            e.target.dataset.clicked = "x";
            e.target.innerHTML = `<img src="${crossImg}" data-clicked="x"></img>`;
            data[num] = "x";
            setCount(c => c +1);
            checkWin();
        }
        else{
            e.target.innerHTML = `<img class="circle-img" data-clicked="o" src="${circleImg}"></img>`;
            data[num] = "o";
            setCount(c => c +1);
            e.target.dataset.clicked = "o";
            checkWin();
        }
    }



    const checkWin = () => {
        if (data[0] == data[1] && data[1] == data[2] && data[2] != ""){
            won(data[2]);
        }
        else if (data[3] == data[4] && data[4] == data[5] && data[5] != ""){
            won(data[5]);
        }
        else if (data[6] == data[7] && data[7] == data[8] && data[8] != ""){
            won(data[8]);
        }
        else if (data[0] == data[4] && data[4] == data[8] && data[8] != ""){
            won(data[8]);
        }
        else if (data[2] == data[4] && data[4] == data[6] && data[6] != ""){
            won(data[6]);
        }
        else if (data[0] == data[3] && data[3] == data[6] && data[6] != ""){
            won(data[6]);
        }
        else if (data[1] == data[4] && data[4] == data[7] && data[7] != ""){
            won(data[7]);
        }
        else if (data[2] == data[5] && data[5] == data[8] && data[8] != ""){
            won(data[8]);
        }

    }

    const won = (winner) => {
        setGameOver(true);
        if (winner == "o"){
            titleRef.current.innerHTML = `Yay! <img class="circle-img" src="${circleImg}"></img> won.`
        }
        if (winner == "x"){
            titleRef.current.innerHTML = `Yay! <img class="circle-img" src="${crossImg}"></img> won.`
        }

    }

    const reset = () => {
        titleRef.current.innerHTML = `Tic Tac Toe <span>Game🕹️</span>`;
        setGameOver(false);
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach(box => {
            box.innerHTML = "";
            box.dataset.clicked = "";
        })
    }
    
  return (
    <div className="game-container">
      <h1 ref={titleRef}>Tic Tac Toe <span>Game🕹️</span></h1>

      <div className="board">
        <div className="row row1">
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 0)}></div>
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 1)}></div>
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row row2">
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 3)}></div>
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 4)}></div>
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row row3">
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 6)}></div>
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 7)}></div>
            <div className="boxes" data-clicked="" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <button onClick={reset} className="reset">Reset</button>
    </div>
  );
}

export default TicTacToe;
