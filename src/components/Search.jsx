import { useEffect, useState } from "react";
import { List } from "./List";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState("");

  const serachEmojis = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue == "") {
      getSmileys();
    }
    const fetchData = async () => {
      if (searchValue.length > 3) {
        const apiKey = "e15f9e60609f890dacb96cdf1569ab79f2e05ffa";
        const res = await fetch(
          `https://emoji-api.com/emojis?search=${searchValue}&access_key=${apiKey}`
        );
        const responseData = await res.json();
        setData(responseData);
      }
    };
    fetchData();
  }, [searchValue]);

  useEffect(() => {
    getSmileys();
  }, []);

  function getSmileys() {
    const fetchData = async () => {
      const apiKey = "e15f9e60609f890dacb96cdf1569ab79f2e05ffa";
      const res = await fetch(
        `https://emoji-api.com/categories/smileys-emotion?access_key=${apiKey}
          `
      );
      const responseData = await res.json();
      setData(responseData);
    };

    fetchData();
  }
  return (
    <div className="py-16">
      <h1 className="my-8 font-bold underline text-2xl text-center">
        Emotehunt
      </h1>
      <div className="w-1/3 mx-auto">
        <input
          className="w-full p-2 border-[#ffffd2] border rounded-lg"
          type="text"
          placeholder="Search for an emoji..."
          value={searchValue}
          onChange={(e) => serachEmojis(e.target.value)}
        />
      </div>
      <List data={data}></List>
    </div>
  );
};