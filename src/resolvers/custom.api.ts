import {AirportBoards, GetFlightTrack} from './flight-aware.api';

export async function getDepartures(root, qs:{ airportCode:string }):Promise<any> {
    let departures = await AirportBoards(root, {airport_code: qs.airportCode, type: 'departures'});
    let departuresIds = departures.departures.flights.map(flight => flight.faFlightID);
    let flights = [];
    let countHook = 1;
    for (let ident of departuresIds) {
        if (countHook < 5) {
            let flight = await GetFlightTrack(root, {ident});
            countHook++;
            flights.push({ident, track: flight.tracks});
        }
    }

    return flights;
}
