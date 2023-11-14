import React, { createContext, useState, useEffect } from 'react';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was just not ok');
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error('No articles for you:', error);
      });
  }, []);

  return (
    <NewsContext.Provider value={articles}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
