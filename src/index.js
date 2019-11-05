import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import token from "./config/githubToken";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  fetchOptions: { credentials: "same-origin" },
  request: operation => {
    const accessToken = token;
    operation.setContext({
      headers: { authorization: `bearer ${accessToken}` }
    });
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
