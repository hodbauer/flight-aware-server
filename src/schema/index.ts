import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from '../resolvers';
import {flightAwareTypeDefs} from './flight-aware.schema';
import {customTypeDefs} from './custom.schema';

const typeDefs =
    flightAwareTypeDefs + customTypeDefs+ `
type Query {
    AircraftType(type:String!):AircraftTypeStruct
    AirlineFlightSchedules(start_date:Int!, end_date:Int!, origin:String, destination:String, airline:String, flightno:String, exclude_codeshare:Boolean, howMany:Int, offset:Int):ArrayOfAirlineFlightScheduleStruct
    AirlineInfo(airline_code:String!):AirlineInfoStruct
    AirportBoards(airport_code:String!, include_ex_data:Boolean, filter:String, type:String, howMany:Int, offset:Int):AirportBoardsStruct
    AirportDelays(airport_code:String, howMany:Int, offset:Int):AirportDelayStruct
    AirportInfo(airport_code:String!):AirportStruct
    BlockIdentCheck(ident:String!):Int
    CountAirportOperations(airport_code:String!):CountAirportOperationsStruct
    CountAllEnrouteAirlineOperations:ArrayOfCountAirlineOperationsStruct
    DecodeFlightRoute(faFlightID:String!):ArrayOfFlightRouteStruct
    DecodeRoute(origin:String!, route:String!, destination:String!):ArrayOfFlightRouteStruct
    FindFlight(origin:String!, destination:String!, include_ex_data:Boolean, type:String, filter:String, howMany:Int, offset:Int):FindFlightStruct
    FlightCancellationStatistics(time_period:String!, type_matching:String!, ident_filter:String, howMany:Int, offset:Int):CancellationSummaryStruct
    FlightInfoStatus(ident:String!, include_ex_data:Boolean, filter:String, howMany:Int, offset:Int):ArrayOfFlightInfoStatusStruct
    GetFlightTrack(ident:String!, include_position_estimates:Boolean):ArrayOfTrackStruct
    LatLongsToDistance(lat1:Float!, lon1:Float!, lat2:Float!, lon2:Float!):Int
    LatLongsToHeading(lat1:Float!, lon1:Float!, lat2:Float!, lon2:Float!):Int
    NearbyAirports(latitude:Float, longitude:Float, airport_code:String, radius:Int!, only_iap:Boolean, howMany:Int, offset:Int):NearbyAirportsStruct
    RoutesBetweenAirports(origin:String!, destination:String!, max_file_age:String!, sort_by:String!, howMany:Int, offset:Int):ArrayOfRoutesBetweenAirportsStruct
    TailOwner(ident:String!):TailOwnerStruct
    WeatherConditions(airport_code:String!, weather_date:Int, temperature_units:String, return_nearby_weather:Boolean, howMany:Int, offset:Int):WeatherConditionsArrayStruct
    WeatherForecast(airport_code:String!, weather_date:Int, return_nearby_weather:Boolean):WeatherForecastStruct
    ZipcodeInfo(zipcode:String!):ZipcodeInfoStruct
    
    getDepartures(airportCode:String!):[Departure]
}

type Subscription {
  trackUpdated(faFlightID:String!):Departure
}
`;

export const schema = makeExecutableSchema({typeDefs, resolvers});
