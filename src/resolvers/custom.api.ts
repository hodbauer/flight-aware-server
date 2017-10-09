import {AirportBoards, GetFlightTrack} from './flight-aware.api';
import {updateFlightActivity} from '../db/index';

export async function getDepartures(root, qs:{ airportCode:string }):Promise<any> {
    let departures = await AirportBoards(root, {airport_code: qs.airportCode, type: 'departures', filter: 'airline'});
    let departuresIds = departures.departures.flights.map(flight => flight.faFlightID);
    let flights = [];
    for (let ident of departuresIds) {
        let flight = await GetFlightTrack(root, {ident});
        flights.push({ident, track: flight.tracks});
    }

    return flights;
}

export async function shootingDownAirplane(root, args:{ faFlightID:string }):Promise<boolean> {
    return new Promise<boolean>((resolve => {
        setTimeout(() => {
            let success = updateFlightActivity(args.faFlightID, false);
            resolve(success);
        }, 1000);
    }));
}
