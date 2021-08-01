require('dotenv').config();
const express = require('express');
const db = require('./config/connection');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

// const PORT = process.env.PORT || 3001;

// async function startApolloServer(typeDefs, resolvers, context)
// {
//     const server = new ApolloServer({ typeDefs, resolvers, context});
//     await server.start();
//     const app = express();

//     app.use(express.urlencoded({extended: true}));
//     app.use(express.json());
//     app.use('/images', express.static(path.join(__dirname, '../client/src/assets/images')));

//     if (process.env.NODE_ENV === 'production') {
//         app.use(express.static(path.join(__dirname, '../client/build')));
//         //app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));
//     }

//     server.applyMiddleware({app});

//     await new Promise(() => { 
//         app.listen(PORT, ()=> console.log(`Use 🚀 GraphQL at http://localhost:${PORT}${server.graphqlPath}`));
//     })
// }

// db.once('open', () => startApolloServer(typeDefs, resolvers, authMiddleware));


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.start().then(()=>{
    server.applyMiddleware({ app });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});