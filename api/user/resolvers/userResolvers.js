const userResolvers = {
    Query: {
        users: (root, args,{ dataSources }) => dataSources.
        usersAPI.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.
        usersAPI.getUsersById(id)
    }

}

module.exports = userResolvers