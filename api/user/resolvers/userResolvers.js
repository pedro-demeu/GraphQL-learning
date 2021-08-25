const userResolvers = {
    Query: {
        users: (root, args,{ dataSources }) => dataSources.
        usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.
        usersAPI.getUsersById(id)
    },
    Mutation: {
        adicionarUser: (root, user, { dataSources }) => {
            dataSources.usersAPI.adicionarUser(user)
        }
    }

}

module.exports = userResolvers