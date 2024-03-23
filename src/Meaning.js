import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <h4>
        {" "}
        <strong>Definition: </strong>
        {props.meaning.definition}
      </h4>
      <h4>
        <em>Example: {props.meaning.example}</em>
      </h4>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
