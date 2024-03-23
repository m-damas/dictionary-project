import React from "react";
//import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <h4>Definition: {props.meaning.definition}</h4>
      <h4>
        <em>Example: {props.meaning.example}</em>
      </h4>
    </div>
  );
}
//<Synonyms synonyms={props.meaning.synonyms} />
