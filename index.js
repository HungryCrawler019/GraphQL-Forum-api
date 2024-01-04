const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const models = require('./models');

const app = express()
const port = 4000

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.listen({ port }, () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`))