const userResolvers = {
    Query: {
        users: (root, args,{ dataSources }) => dataSources.
        usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.
        usersAPI.getUsersById(id)
    },
    Mutation: {
        adicionarUser: async (root, user, { dataSources }) => 
        dataSources.usersAPI.adicionarUser(user),
        atualizaUser: async (root, novosDados, { dataSources }) =>
        dataSources.usersAPI.atualizaUser(novosDados),
        deletaUser: async (root, { id }, { dataSources }) =>
        dataSources.usersAPI.deletaUser(id)
    }

}

module.exports = userResolvers