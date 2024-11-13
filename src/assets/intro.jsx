import { useState } from "react";

function Intro() {
  const [text, setText] = useState("");  // Initialize with an empty string
  const [words, setWords] = useState(0); // Initialize with 0 since it's a word count
  const [vowels, setVowels] = useState(0); // Initialize vowels count

  function toUpperCase() {
    setText((prevText) => prevText.toUpperCase());
  }

  function toLowerCase() {
    setText((prevText) => prevText.toLowerCase());
  }

  function countWords() {
    // Split text by spaces and count the number of words
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    setWords(wordCount);
  }

  function countVowels() {
    // Convert the text to lowercase to handle both uppercase and lowercase vowels
    const textLower = text.toLowerCase();
    let vowelsCount = 0;

    // Iterate through the text and count vowels
    for (let char of textLower) {
      if (["a", "e", "i", "o", "u"].includes(char)) {
        vowelsCount++;
      }
    }

    // Update the state with the number of vowels
    setVowels(vowelsCount);
  }

  return (
    <>
      <div className="w-screen h-screen bg-slate-200 flex flex-col items-center">
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-3 mt-[80px] ">TEXUTILS</h1>
        <textarea
          id="textarea"
          placeholder="ENTER YOUR TEXT HERE"
          value={text}
          onChange={(e) => setText(e.target.value)} // Make the textarea value controlled
          className="w-[80vw] h-[50vh] border rounded-md placeholder:text-center placeholder:text-[13px]  md:placeholder:text-xl "
        />
        <div className="mt-2 text-lg font-semibold">
          Word Count: {words} | Vowels: {vowels}
        </div>
        <div id="buttons" className="flex justify-evenly gap-x-3 gap-y-3 mt-3 flex-wrap">
          <button
            onClick={toUpperCase}
            className="bg-blue-400 rounded-sm text-white w-[120px] h-[30px] tracking-wide hover:bg-white hover:text-blue-400"
          >
            To Uppercase
          </button>
          <button
            onClick={toLowerCase}
            className="bg-blue-400 rounded-sm text-white w-[120px] h-[30px] tracking-wide hover:bg-white hover:text-blue-400"
          >
            To Lowercase
          </button>
          <button
            onClick={countWords}
            className="bg-blue-400 rounded-sm text-white w-[120px] h-[30px] tracking-wide hover:bg-white hover:text-blue-400"
          >
            Count Words
          </button>
          <button
            onClick={countVowels}
            className="bg-blue-400 rounded-sm text-white w-[120px] h-[30px] tracking-wide hover:bg-white hover:text-blue-400"
          >
            Count Vowels
          </button>
        </div>
      </div>
    </>
  );
}

export default Intro;
