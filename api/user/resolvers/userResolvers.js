const arrayUsers = [
    {
        nome: "Pedro",
        ativo: true
    },
    {
        nome: "Tião",
        ativo: false
    }
]

const userResolvers = {
    Query: {
        users: () => arrayUsers,
        primeiroUser: () => arrayUsers[0]
    }

}

module.exports = userResolvers