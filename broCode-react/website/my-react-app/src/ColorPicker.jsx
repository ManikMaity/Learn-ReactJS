import { useState } from "react";
import ReuseButton from "./ReuseButton.jsx";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const style = {
    backgroundColor: color,
    border: "1px solid #fff",
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const randomHexCode = () => {
    let hexCode = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${hexCode}`);
  };

  return (
    <div className="card">
      <h2>Color Picker</h2>
      <div className="color" style={style}>
        <p>{color}</p>
      </div>

      <div className="picker-control">
        <input
          type="color"
          onChange={handleColorChange}
          value={color}
          id="colorSelect"
        />
        <ReuseButton func={randomHexCode} text="Random?" style={style} />
      </div>
    </div>
  );
}

export default ColorPicker;
