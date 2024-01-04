const { gql } = require('apollo-server-express')

module.exports = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        role: Role
        avatar: String
        createdAt: DateTIme!
        updatedAt: DateTIme!
    }

    enum Role {
        ADMIN
        USER
    }
`