const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const { PubSub } = require('graphql-yoga')

const pubsub = new PubSub()

// 1
const resolvers = {
  Query,
  Mutation,
  User,
  Link
}

// 3: the allowed APIs and their handlers
const prisma = new PrismaClient()
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
      pubsub,
    }
  },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))