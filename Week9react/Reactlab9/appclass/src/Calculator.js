import React, { useState } from "react";
import "./Calculator.css";
import Button from "./Button";

function KeyPadComponent() {
  const [text1, setText] = useState("");
  const [showImage, setShowImage] = useState(false); // For Task 2

  const ClickHandle = (e) => {
    const value = e.target.value;

    if (value === "C") {
      setText("");
    } else if (value === "=") {
      try {
        setText(eval(text1)); // Evaluate expression
        alert(eval(text1));
      } catch {
        alert("Invalid input");
        setText("");
      }
    } else if (value === "square") {
      setText((prev) => String(prev ** 2)); // Calculate square
    } else if (value === "show me") {
      setShowImage((prev) => !prev); // Toggle image visibility
    } else {
      setText(text1 + value);
    }
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>

      <div>
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="show me" ClickHandle={ClickHandle} />
        <Button label="square" ClickHandle={ClickHandle} />
      </div>
      {showImage && (
        <div>
          <img src="/path-to-your-image.jpg" alt="Displayed" style={{ width: "100px" }} />
        </div>
      )}
    </div>
  );
}

export default KeyPadComponent;
