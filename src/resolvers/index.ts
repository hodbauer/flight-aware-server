import * as  FlightAware from './flight-aware.api';
import {getDepartures} from './custom.api';
import {pubsub, TRACK_UPDATED} from '../pubsub-manager/index';
import {withFilter} from 'graphql-subscriptions';

export const resolvers = {
    Query: {
        ...FlightAware,
        getDepartures
    },
    Subscription: {
        trackUpdated: {
            subscribe: withFilter(() => pubsub.asyncIterator(TRACK_UPDATED),
                (payload, variables) => payload.trackUpdated.ident === variables.faFlightID
            )
        }
    }
};
