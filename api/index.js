const { ApolloServer } = require('apollo-server')

const userSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/userResolvers')

const usersAPI = require('./user/datasource/user')

const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer( { 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return{
      usersAPI: new usersAPI()
    }
  }

} )

server.listen().then(({url}) => {
  console.log("Servidor rodando")
})