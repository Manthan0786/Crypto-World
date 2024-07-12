"use client";

import { useState, useEffect } from "react";

function ChatWithAI() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  useEffect(()=> {
    console.log('Rendering ChatAI')
  }, [])

  return (
    <>
      <div className="relative border-2 rounded-lg h-[80vh] w-full">
        <div className="absolute left-0 right-0 mx-4 bottom-2 h-[40px] w-auto border-2 rounded">
          <input
            placeholder="type here..."
            type="text"
            name="text"
            value={text}
            onChange={handleChange}
            className="h-full w-[80%] p-2 text-black"
          ></input>
          <button className="h-full px-6 bg-cyan-400 w-[20%]">Send</button>
        </div>
      </div>
    </>
  );
}

export default ChatWithAI;
