// import {graphql} from 'graphql';
//
// graphql(schema, '{ item { id , url } }', resolvers)
//     .then((response) => {
//         console.log(response);
//     });
import schema from './schema/schema'

import express from 'express'
import bodyParser from 'body-parser'
// This package will handle GraphQL server requests and responses
// for you, based on your schema.
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express'



const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Hackernews GraphQL server running on port ${PORT}.`)
});