import React, { useEffect, useState } from "react";
import axios from "axios";
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
    const apiUrl = "https://api.github.com/users/cloudbound2/repos";
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);
  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
        <h3>With Axios (a promise-based HTTP client for the browser and node.js)</h3>
        Since Axios is promise-based, we can take advantage of async and await
        for more readable and asynchronous code.
        <br></br>
        With Axios, we get the ability
        to intercept and cancel request, it also has a built-in feature that
        provides client-side protection against cross-site request forgery.
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
