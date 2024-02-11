import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import withListLoading from "./components/withListLoading";

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/cloudbound2/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
        <h3>
          With Fetch API, a browser in-built web API. 
        </h3>
          The Fetch API uses Request and Response objects (and other things involved with network requests), 
          <br></br>as well as related concepts such as <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a> and 
          the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers">HTTP Origin header</a> semantics.
      </div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        {/* //notice the brace and the /* does the tick to comment out a multiline JSX code
        <div className="footer">
          Demo built with{" "}
          <span role="img" aria-label="love">
           ❤
          </span>{" "}
          by cloudbound2
        </div>
        */}
      </footer>
    </div>
  );
}

export default App;
