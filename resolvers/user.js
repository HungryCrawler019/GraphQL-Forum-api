const { ApolloError, AuthenticationError } = require("apollo-server-express")
const jwt = require('jsonwebtoken')
const models = require('../models')
const bcrypt = require('bcrypt')
const {generateToken} = require('../utils')

module.exports = {
    Mutation: {
        async signUp(parent, { username, email, password }, { models }) {
            const userExists = await models.User.findOne({ where: { email } })

            if (userExists) {
                throw new ApolloError('Email already in use.')
            }

            const user = await models.User.create({
                username, email, password
            })

            const token = generateToken(user)

            return {token};
        },

        async signIn(parent, { email, password }, { models }) {
            const user = await models.User.findOne({where:{email}})

            if(!user){
                throw new AuthenticationError('Invalid email/password')
            }

            const isPasswordvalid = await bcrypt.compare(password, user.password)
            
            if(!isPasswordvalid){
                throw new AuthenticationError('Password invalid')
            }

            return {token: generateToken(user)}
        }
    }
}