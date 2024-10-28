import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./_db.js";
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    reviews: () => db.reviews,
    games: () => db.games,
    authors: () => db.authors,
    review: (_, { id }) => db.reviews.find((review) => review.id === id),
    game: (_, { id }) => db.games.find((game) => game.id === id),
    author: (_, { id }) => db.authors.find((author) => author.id === id),
  },
  Game: {
    reviews: (parent) =>
      db.reviews.filter((review) => review.game_id === parent.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);
