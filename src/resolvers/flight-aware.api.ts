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

async function flightAwareGateway<T>(qs:T, urlSuffix:string):Promise<any> {
    base.uri = fxmlUrl + urlSuffix;
    base.qs = qs;
    let result = await rp.get(base);
    return result;
}

export async function AircraftType(root, qs:IAircraftType):Promise<AircraftTypeStruct> {
    return (await flightAwareGateway(qs, 'AircraftType')).AircraftTypeResult;
}

export async function AirlineFlightSchedules(root, qs:IAirlineFlightSchedules):Promise<ArrayOfAirlineFlightScheduleStruct> {
    return (await flightAwareGateway(qs, 'AirlineFlightSchedules')).AirlineFlightSchedulesResult;
}

export async function AirlineInfo(root, qs:IAirlineInfo):Promise<AirlineInfoStruct> {
    return (await flightAwareGateway(qs, 'AirlineInfo')).AirlineInfoResult;
}

export async function AirportBoards(root, qs:IAirportBoards):Promise<AirportBoardsStruct> {
    return (await flightAwareGateway(qs, 'AirportBoards')).AirportBoardsResult;
}

export async function AirportDelays(root, qs:IAirportDelays):Promise<AirportDelayStruct> {
    return (await flightAwareGateway(qs, 'AirportDelays')).AirportDelaysResult;
}

export async function AirportInfo(root, qs:IAirportInfo):Promise<AirportStruct> {
    return (await flightAwareGateway(qs, 'AirportInfo')).AirportInfoResult;
}

export async function BlockIdentCheck(root, qs:IBlockIdentCheck):Promise<number> {
    return (await flightAwareGateway(qs, 'BlockIdentCheck')).BlockIdentCheckResult;
}

export async function CountAirportOperations(root, qs:ICountAirportOperations):Promise<CountAirportOperationsStruct> {
    return (await flightAwareGateway(qs, 'CountAirportOperations')).CountAirportOperationsResult;
}

export async function CountAllEnrouteAirlineOperations(root, qs:ICountAllEnrouteAirlineOperations):Promise<ArrayOfCountAirlineOperationsStruct> {
    return (await flightAwareGateway(qs, 'CountAllEnrouteAirlineOperations')).CountAllEnrouteAirlineOperationsResult;
}

export async function DecodeFlightRoute(root, qs:IDecodeFlightRoute):Promise<ArrayOfFlightRouteStruct> {
    return (await flightAwareGateway(qs, 'DecodeFlightRoute')).DecodeFlightRouteResult;
}

export async function DecodeRoute(root, qs:IDecodeRoute):Promise<ArrayOfFlightRouteStruct> {
    return (await flightAwareGateway(qs, 'DecodeRoute')).DecodeRouteResult;
}

export async function FindFlight(root, qs:IFindFlight):Promise<FindFlightStruct> {
    return (await flightAwareGateway(qs, 'FindFlight')).FindFlightResult;
}

export async function FlightCancellationStatistics(root, qs:IFlightCancellationStatistics):Promise<CancellationSummaryStruct> {
    return (await flightAwareGateway(qs, 'FlightCancellationStatistics')).FlightCancellationStatisticsResult;
}

export async function FlightInfoStatus(root, qs:IFlightInfoStatus):Promise<ArrayOfFlightInfoStatusStruct> {
    return (await flightAwareGateway(qs, 'FlightInfoStatus')).FlightInfoStatusResult;
}

export async function GetFlightTrack(root, qs:IGetFlightTrack):Promise<ArrayOfTrackStruct> {
    return (await flightAwareGateway(qs, 'GetFlightTrack')).GetFlightTrackResult;
}

export async function LatLongsToDistance(root, qs:ILatLongsToDistance):Promise<number> {
    return (await flightAwareGateway(qs, 'LatLongsToDistance')).LatLongsToDistanceResult;
}

export async function LatLongsToHeading(root, qs:ILatLongsToHeading):Promise<number> {
    return (await flightAwareGateway(qs, 'LatLongsToHeading')).LatLongsToHeadingResult;
}

export async function NearbyAirports(root, qs:INearbyAirports):Promise<NearbyAirportsStruct> {
    return (await flightAwareGateway(qs, 'NearbyAirports')).NearbyAirportsResult;
}

export async function RoutesBetweenAirports(root, qs:IRoutesBetweenAirports):Promise<ArrayOfRoutesBetweenAirportsStruct> {
    return (await flightAwareGateway(qs, 'RoutesBetweenAirports')).RoutesBetweenAirportsResult;
}

export async function TailOwner(root, qs:ITailOwner):Promise<TailOwnerStruct> {
    return (await flightAwareGateway(qs, 'TailOwner')).TailOwnerResult;
}

export async function WeatherConditions(root, qs:IWeatherConditions):Promise<WeatherConditionsArrayStruct> {
    return (await flightAwareGateway(qs, 'WeatherConditions')).WeatherConditionsResult;
}

export async function WeatherForecast(root, qs:IWeatherForecast):Promise<WeatherForecastStruct> {
    return (await flightAwareGateway(qs, 'WeatherForecast')).WeatherForecastResult;
}

export async function ZipcodeInfo(root, qs:IZipcodeInfo):Promise<ZipcodeInfoStruct> {
    return (await flightAwareGateway(qs, 'ZipcodeInfo')).ZipcodeInfoResult;
}
