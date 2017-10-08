import * as rp from 'request-promise';
import {
    AircraftTypeStruct,
    AirlineInfoStruct,
    AirportBoardsStruct,
    AirportDelayStruct,
    AirportStruct,
    ArrayOfAirlineFlightScheduleStruct,
    ArrayOfCountAirlineOperationsStruct,
    ArrayOfFlightInfoStatusStruct,
    ArrayOfFlightRouteStruct,
    ArrayOfRoutesBetweenAirportsStruct,
    ArrayOfTrackStruct,
    CancellationSummaryStruct,
    CountAirportOperationsStruct,
    FindFlightStruct,
    IAircraftType,
    IAirlineFlightSchedules,
    IAirlineInfo,
    IAirportBoards,
    IAirportDelays,
    IAirportInfo,
    IBlockIdentCheck,
    ICountAirportOperations,
    ICountAllEnrouteAirlineOperations,
    IDecodeFlightRoute,
    IDecodeRoute,
    IFindFlight,
    IFlightCancellationStatistics,
    IFlightInfoStatus,
    IGetFlightTrack,
    ILatLongsToDistance,
    ILatLongsToHeading,
    INearbyAirports,
    IRoutesBetweenAirports,
    ITailOwner,
    IWeatherConditions,
    IWeatherForecast,
    IZipcodeInfo,
    NearbyAirportsStruct,
    TailOwnerStruct,
    WeatherConditionsArrayStruct,
    WeatherForecastStruct,
    ZipcodeInfoStruct
} from './flight-aware.interface';
import {apiKey, username} from '../keys';

const fxmlUrl = `https://${username}:${apiKey}@flightxml.flightaware.com/json/FlightXML3/`;

let base = {
    uri: '',
    qs: {},
    json: true
};

export async function AircraftType(root, qs:IAircraftType):Promise<AircraftTypeStruct> {
    base.uri = fxmlUrl + 'AircraftType';
    base.qs = qs;
    return (await rp.get(base)).AircraftTypeResult;
}

export async function AirlineFlightSchedules(root, qs:IAirlineFlightSchedules):Promise<ArrayOfAirlineFlightScheduleStruct> {
    base.uri = fxmlUrl + 'AirlineFlightSchedules';
    base.qs = qs;
    return (await rp.get(base)).AirlineFlightSchedulesResult;
}

export async function AirlineInfo(root, qs:IAirlineInfo):Promise<AirlineInfoStruct> {
    base.uri = fxmlUrl + 'AirlineInfo';
    base.qs = qs;
    return (await rp.get(base)).AirlineInfoResult;
}

export async function AirportBoards(root, qs:IAirportBoards):Promise<AirportBoardsStruct> {
    base.uri = fxmlUrl + 'AirportBoards';
    base.qs = qs;
    return (await rp.get(base)).AirportBoardsResult;
}

export async function AirportDelays(root, qs:IAirportDelays):Promise<AirportDelayStruct> {
    base.uri = fxmlUrl + 'AirportDelays';
    base.qs = qs;
    return (await rp.get(base)).AirportDelaysResult;
}

export async function AirportInfo(root, qs:IAirportInfo):Promise<AirportStruct> {
    base.uri = fxmlUrl + 'AirportInfo';
    base.qs = qs;
    return (await rp.get(base)).AirportInfoResult;
}

export async function BlockIdentCheck(root, qs:IBlockIdentCheck):Promise<number> {
    base.uri = fxmlUrl + 'BlockIdentCheck';
    base.qs = qs;
    return (await rp.get(base)).BlockIdentCheckResult;
}

export async function CountAirportOperations(root, qs:ICountAirportOperations):Promise<CountAirportOperationsStruct> {
    base.uri = fxmlUrl + 'CountAirportOperations';
    base.qs = qs;
    return (await rp.get(base)).CountAirportOperationsResult;
}

export async function CountAllEnrouteAirlineOperations(root, qs:ICountAllEnrouteAirlineOperations):Promise<ArrayOfCountAirlineOperationsStruct> {
    base.uri = fxmlUrl + 'CountAllEnrouteAirlineOperations';
    base.qs = qs;
    return (await rp.get(base)).CountAllEnrouteAirlineOperationsResult;
}

export async function DecodeFlightRoute(root, qs:IDecodeFlightRoute):Promise<ArrayOfFlightRouteStruct> {
    base.uri = fxmlUrl + 'DecodeFlightRoute';
    base.qs = qs;
    return (await rp.get(base)).DecodeFlightRouteResult;
}

export async function DecodeRoute(root, qs:IDecodeRoute):Promise<ArrayOfFlightRouteStruct> {
    base.uri = fxmlUrl + 'DecodeRoute';
    base.qs = qs;
    return (await rp.get(base)).DecodeRouteResult;
}

export async function FindFlight(root, qs:IFindFlight):Promise<FindFlightStruct> {
    base.uri = fxmlUrl + 'FindFlight';
    base.qs = qs;
    return (await rp.get(base)).FindFlightResult;
}

export async function FlightCancellationStatistics(root, qs:IFlightCancellationStatistics):Promise<CancellationSummaryStruct> {
    base.uri = fxmlUrl + 'FlightCancellationStatistics';
    base.qs = qs;
    return (await rp.get(base)).FlightCancellationStatisticsResult;
}

export async function FlightInfoStatus(root, qs:IFlightInfoStatus):Promise<ArrayOfFlightInfoStatusStruct> {
    base.uri = fxmlUrl + 'FlightInfoStatus';
    base.qs = qs;
    return (await rp.get(base)).FlightInfoStatusResult;
}

export async function GetFlightTrack(root, qs:IGetFlightTrack):Promise<ArrayOfTrackStruct> {
    base.uri = fxmlUrl + 'GetFlightTrack';
    base.qs = qs;
    return (await rp.get(base)).GetFlightTrackResult;
}

export async function LatLongsToDistance(root, qs:ILatLongsToDistance):Promise<number> {
    base.uri = fxmlUrl + 'LatLongsToDistance';
    base.qs = qs;
    return (await rp.get(base)).LatLongsToDistanceResult;
}

export async function LatLongsToHeading(root, qs:ILatLongsToHeading):Promise<number> {
    base.uri = fxmlUrl + 'LatLongsToHeading';
    base.qs = qs;
    return (await rp.get(base)).LatLongsToHeadingResult;
}

export async function NearbyAirports(root, qs:INearbyAirports):Promise<NearbyAirportsStruct> {
    base.uri = fxmlUrl + 'NearbyAirports';
    base.qs = qs;
    return (await rp.get(base)).NearbyAirportsResult;
}

export async function RoutesBetweenAirports(root, qs:IRoutesBetweenAirports):Promise<ArrayOfRoutesBetweenAirportsStruct> {
    base.uri = fxmlUrl + 'RoutesBetweenAirports';
    base.qs = qs;
    return (await rp.get(base)).RoutesBetweenAirportsResult;
}

export async function TailOwner(root, qs:ITailOwner):Promise<TailOwnerStruct> {
    base.uri = fxmlUrl + 'TailOwner';
    base.qs = qs;
    return (await rp.get(base)).TailOwnerResult;
}

export async function WeatherConditions(root, qs:IWeatherConditions):Promise<WeatherConditionsArrayStruct> {
    base.uri = fxmlUrl + 'WeatherConditions';
    base.qs = qs;
    return (await rp.get(base)).WeatherConditionsResult;
}

export async function WeatherForecast(root, qs:IWeatherForecast):Promise<WeatherForecastStruct> {
    base.uri = fxmlUrl + 'WeatherForecast';
    base.qs = qs;
    return (await rp.get(base)).WeatherForecastResult;
}

export async function ZipcodeInfo(root, qs:IZipcodeInfo):Promise<ZipcodeInfoStruct> {
    base.uri = fxmlUrl + 'ZipcodeInfo';
    base.qs = qs;
    return (await rp.get(base)).ZipcodeInfoResult;
}
