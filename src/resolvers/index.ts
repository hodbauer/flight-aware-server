import * as  FlightAware from './flight-aware.api';
import {getDepartures} from './custom.api';
import {pubsub} from '../pubsub-manager/index';

export const resolvers = {
    Query: {
        ...FlightAware,
        getDepartures
    },
    Subscription: {
        mock: {
            subscribe: () => pubsub.asyncIterator('mock')
        }
    }
};
