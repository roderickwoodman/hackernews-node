const { GraphQLServer } = require('graphql-yoga')

// 1: the GraphQL schema definition
const typeDefs = `
type Query {
  info: String!
}
`

// 2: the GraphQL schema implementation
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

// 3: the allowed APIs and their handlers
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))