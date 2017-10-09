import {AirportBoards, GetFlightTrack} from '../resolvers/flight-aware.api';
import {pubsub} from '../pubsub-manager/index';

const INTERVAL = 20 * 1000;
const AIRPORT = 'LLBG';
let DB = {};
DB[AIRPORT] = {};

export async function initDB() {
    let airportBoards = await AirportBoards(null, {airport_code: AIRPORT, type: 'departures', filter: 'airline'});
    for (let flight of airportBoards.departures.flights) {
        initFlight(flight.faFlightID);
    }

    initPolling();
}

function initFlight(flightId:string):void {
    DB[AIRPORT][flightId] = {
        active: true,
        id: flightId,
        track: []
    }
}

function initPolling() {
    setInterval(async () => {
        let flightIds = Object.keys(DB[AIRPORT]);
        for (let id of flightIds) {
            let flight = DB[AIRPORT][id];
            if (flight.active) {
                let newFlight = await GetFlightTrack(null, {ident: id});
                if (newFlight.tracks.length !== flight.track.length) {
                    console.log(`flight '${flight.id}' updated from ${flight.track.length} to ${newFlight.tracks.length} points`);
                    flight.track = newFlight.tracks;
                    pubsub.publish('mock', {mock: flight.id});
                }
            }
        }
    }, INTERVAL);
}