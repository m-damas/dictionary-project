import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          <small>
            Coded by <em className="coder">Melissa Damas</em> and is open
            sourced on{" "}
            <a
              href="https://github.com/m-damas/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://md-dictionary-project.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
