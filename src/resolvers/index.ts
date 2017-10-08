import * as  FlightAware from './flight-aware.api';
import {getDepartures} from './custom.api';

export const resolvers = {
    Query: {
        ...FlightAware,
        getDepartures
    }
};
