import React, { Component , useState } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import { useEffect } from "react";

const Search = () => {
  
  const [searchState, setSearchState] = useState({
    search: "Wikipedia",
    title: "",
    url: "",
    error: ""
  });

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    if (!searchState) {
      return;
    }

    API.searchTerms(searchState.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchState({
          title: res.data[1][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setSearchState({ error: err.message }));
  }, [searchState]);

  const handleInputChange = event => {
    setSearchState({ search: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!searchState.search) {
      return;
    }
    API.searchTerms(searchState.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchState({
          title: res.data[1],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setSearchState({ error: err.message }));
  };
   
    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: setSearchState.error ? 1 : 0, marginBottom: 10 }}>
            {setSearchState.error}
          </Alert>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={setSearchState.search}
          />
          <SearchResults
            title={setSearchState.title}
            url={setSearchState.url}
          />
        </Container>
      </div>
    );
  
}

export default Search;
