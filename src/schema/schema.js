// import {buildSchema} from 'graphql';
import resolvers from './resolvers'
const {makeExecutableSchema} = require('graphql-tools');
const typeDefs = `
    type Link {
        id: ID!
        url: String!
        description: String!
    }
    
    type Query {
        allLinks: [Link!]!
        getLink(id: Int): Link!
    }
    
    type Mutation {
        createLink(url: String!, description: String!): Link
    }
`;
// const schema = buildSchema(`
const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;