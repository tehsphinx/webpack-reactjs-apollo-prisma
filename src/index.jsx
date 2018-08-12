import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

import App from './app'
import './styles/app.scss'

const client = new ApolloClient({
    uri: "http://localhost:4466"
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app'),
)
