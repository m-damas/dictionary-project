import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=td6b219f3d3oca374173c4ae55621b00`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let photosApiKey = "td6b219f3d3oca374173c4ae55621b00";
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;
    axios.get(photosApiUrl).then(handlePhotosResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <h1 style={{ marginBottom: "40px" }}>Dictionary</h1>
          <section>
            <h2>Type a word to find it's definition 📖</h2>
            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="search"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
                style={{ marginRight: "20px" }}
              />
              <input
                type="submit"
                value="Search"
                className="submit-search"
                style={{ padding: "6px 6px", fontSize: "14px" }}
              />
            </form>
          </section>
        </header>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
