import { useState } from 'react';

export const List = ({ data }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const copyHandle = (emoji, index) => {
    navigator.clipboard
      .writeText(emoji)
      .then(() => {
        setClickedIndex(index);
        setTimeout(() => setClickedIndex(null), 2000); // hide the dialog after 2 seconds
      })
      .catch((err) => console.error('Could not copy text: ', err));
  };
  return (
    <div className='flex justify-center mt-4 flex-wrap'>
      {data &&
        data.length > 0 &&
        data.map((emoji, index) => (
          <div
            onClick={() => copyHandle(emoji.character, index)}
            key={index}
            className=' text-[50px]  relative w-44 h-44 bg-[#1d1d1d] m-4 p-5 rounded-3xl flex flex-col items-center justify-around cursor-pointer  hover:shadow-xl transition-all duration-200▌'
          >
            {emoji.character}
            {clickedIndex == index && (
              <div className='absolute right-0 bottom-0  p-2 text-sm '>
                Copied!
              </div>
            )}
          </div>
        ))}
    </div>
  );
};