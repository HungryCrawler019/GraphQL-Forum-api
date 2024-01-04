const { gql } = require('apollo-server-express')

module.exports = gql`
    type Favourite {
        user: User!
        reply: Reply!
    }
`