import * as express from 'express';
import * as cors from 'cors';
import * as  bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import {createServer} from 'http';
import {execute, subscribe} from 'graphql';
import {SubscriptionServer} from 'subscriptions-transport-ws';
import {schema} from './src/schema';

const PORT = 4000;
const server = express();
const ws = createServer(server);

server.use('*', cors());

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
}));

ws.listen(PORT, async () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`);

    new SubscriptionServer({
        execute,
        subscribe,
        schema
    }, {
        server: ws,
        path: '/subscriptions',
    });
});