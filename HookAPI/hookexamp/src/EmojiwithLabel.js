import React, { useState } from "react";
import HappyEmoji from "./happy.png"; // Importing image files
import LikeEmoji from "./like.png";
import SadEmoji from "./sad.png";


function EmojiLabel() {
  const [emoji, setEmoji] = useState("");

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    if (value === "happy") setEmoji(HappyEmoji);
    else if (value === "like") setEmoji(LikeEmoji);
    else if (value === "sad") setEmoji(SadEmoji);
    else setEmoji(""); // Clear image if input doesn't match
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type emoji name"
        onChange={handleChange}
      />
      <div>
        <label>
          {emoji ? <img src={emoji} alt="Emoji" /> : "No emoji"}
        </label>
      </div>
    </div>
  );
}

export default EmojiLabel;
