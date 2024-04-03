import React from "react";

const genres = ["Comedy", "EDM", "Workshop", "Sufi", "Business", "Education", "Poetry", "Jazz", "Bollywood", "Indian Classical", "Technology"];
const languages = ["Hindi", "English", "Punjabi"];

export default function FilterEventList({ searchObj, setSearchObj }) {
  return (
    <div>
      <div>
        {genres.map((genre, index) => (
          <button
            key={index}
            onClick={() => 
              {
                if(searchObj.genre === genre){
                  setSearchObj({...searchObj, genre: null})
              }else{
                setSearchObj({...searchObj, genre});
              }
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        {languages.map((language, index) => (
          <button
            key={index}
            onClick={() => {
              if(searchObj.language === language){
                setSearchObj({...searchObj, language: null})
            }else{
              setSearchObj({...searchObj, language});
            }
            }}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
}
