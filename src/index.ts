/**
 * Type definitions for Google Places API
 * Based on: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
 */

/**
 * The main Place interface representing a place returned by Places API
 */
export interface Place {
  /**
   * The unique identifier of the place
   */
  id: string;

  /**
   * Human-readable name for the place
   */
  displayName?: DisplayName;

  /**
   * The primary type of the place
   */
  primaryType?: string;

  /**
   * Types of the place as a list of string values
   */
  types?: string[];

  /**
   * List of rating (or review) sources for this place
   */
  rating?: Rating[];

  /**
   * Photos of the place
   */
  photos?: Photo[];

  /**
   * URL to a service that generates an icon
   */
  iconMaskBaseUri?: string;

  /**
   * URL to the third-party website where the place information is taken from
   */
  nationalPhoneNumber?: string;

  /**
   * International phone number to the place
   */
  internationalPhoneNumber?: string;

  /**
   * Opening hours for the place
   */
  regularOpeningHours?: OpeningHours;

  /**
   * Address components for the place
   */
  addressComponents?: AddressComponent[];

  /**
   * Human-readable address for the place
   */
  formattedAddress?: string;

  /**
   * Structured postal address for the place
   */
  plusCode?: PlusCode;

  /**
   * Location information including lat/lng coordinates
   */
  location?: Location;

  /**
   * Viewport of the place (set of coordinates that define a box)
   */
  viewport?: Viewport;

  /**
   * Whether the place is operational
   */
  businessStatus?: BusinessStatus;

  /**
   * URL for the place on Google Maps
   */
  googleMapsUri?: string;

  /**
   * Information related to the editorial summary of the place
   */
  editorialSummary?: EditorialSummary;

  /**
   * Attributes that describe this place
   */
  adrFormatAddress?: string;

  /**
   * The price level of the place
   */
  priceLevel?: PriceLevel;

  /**
   * The permanently closed status for a place
   */
  permanentlyClosed?: boolean;

  /**
   * The UTCOffset in minutes from UTC
   */
  utcOffsetMinutes?: number;

  /**
   * Website URI for the place
   */
  websiteUri?: string;

  /**
   * Current opening hours for the place
   */
  currentOpeningHours?: OpeningHours;

  /**
   * Current secondary opening hours for the place
   */
  currentSecondaryOpeningHours?: OpeningHours[];

  /**
   * The reservation provider, for example: RESY, OPENTABLE
   */
  reservable?: boolean;

  /**
   * Indicates if the place allows reservations
   */
  reservationProvider?: string;

  /**
   * If the place serves food
   */
  servesFood?: boolean;

  /**
   * If the place serves beer
   */
  servesBeer?: boolean;

  /**
   * If the place serves breakfast
   */
  servesBreakfast?: boolean;

  /**
   * If the place serves brunch
   */
  servesBrunch?: boolean;

  /**
   * If the place serves dinner
   */
  servesDinner?: boolean;

  /**
   * If the place services lunch
   */
  servesLunch?: boolean;

  /**
   * If the place serves vegetarian food
   */
  servesVegetarianFood?: boolean;

  /**
   * If the place serves wine
   */
  servesWine?: boolean;

  /**
   * If the place takes out orders
   */
  takeout?: boolean;

  /**
   * If the place allows dine in
   */
  dineIn?: boolean;

  /**
   * If the place has curbside pickup
   */
  curbsidePickup?: boolean;

  /**
   * If the place offers delivery service
   */
  delivery?: boolean;

  /**
   * Special hours during holidays
   */
  specialOpeningHours?: SpecialOpeningHours[];

  /**
   * Secondary hours of operation
   */
  secondaryOpeningHours?: OpeningHours[];

  /**
   * Related places
   */
  relatedPlaces?: RelatedPlaces;
}

/**
 * Human-readable name for the returned place
 */
export interface DisplayName {
  /**
   * String containing the human-readable name
   */
  text: string;

  /**
   * Language code for the name
   */
  languageCode: string;
}

/**
 * Rating information for this place
 */
export interface Rating {
  /**
   * The numerical rating, expressed as a number between 1.0 to 5.0
   */
  rating?: number;

  /**
   * Total number of reviews
   */
  userRatingCount?: number;
}

/**
 * Photo of the place
 */
export interface Photo {
  /**
   * Photo reference identifier
   */
  id?: string;

  /**
   * Width of the photo in pixels
   */
  width?: number;

  /**
   * Height of the photo in pixels
   */
  height?: number;

  /**
   * Attribution text to be displayed for the photo
   */
  authorAttribution?: AuthorAttribution;
}

/**
 * Attribution information for a photo's author
 */
export interface AuthorAttribution {
  /**
   * URI to the author's profile photo
   */
  photoUri?: string;

  /**
   * Display name of the author
   */
  displayName?: string;

  /**
   * URI to the author's profile
   */
  uri?: string;
}

/**
 * Opening hours information
 */
export interface OpeningHours {
  /**
   * If the place is open now
   */
  openNow?: boolean;

  /**
   * Text showing the open hours
   */
  weekdayDescriptions?: string[];

  /**
   * The time periods that the place is open
   */
  periods?: TimePeriod[];
}

/**
 * Represents a time period that a place is open
 */
export interface TimePeriod {
  /**
   * Opening time
   */
  open: TimeOfDay;

  /**
   * Closing time
   */
  close?: TimeOfDay;
}

/**
 * Represents a time of day
 */
export interface TimeOfDay {
  /**
   * Day of the week (0 = Sunday, 6 = Saturday)
   */
  day: number;

  /**
   * Hour (0-23)
   */
  hour: number;

  /**
   * Minute (0-59)
   */
  minute: number;

  /**
   * Whether this time is truncated
   */
  truncated: boolean;

  /**
   * Date for special opening hours
   */
  date?: Date;
}

/**
 * Address component
 */
export interface AddressComponent {
  /**
   * The name of the address component
   */
  longText: string;

  /**
   * The abbreviated name of the address component
   */
  shortText: string;

  /**
   * Array of types for this address component
   */
  types: string[];

  /**
   * Language code for this component
   */
  languageCode?: string;
}

/**
 * Plus code (Open Location Code) for a place
 */
export interface PlusCode {
  /**
   * Global code
   */
  globalCode?: string;

  /**
   * Compound code
   */
  compoundCode?: string;
}

/**
 * Location coordinates
 */
export interface Location {
  /**
   * Latitude in degrees
   */
  latitude?: number;

  /**
   * Longitude in degrees
   */
  longitude?: number;
}

/**
 * Viewport for a location
 */
export interface Viewport {
  /**
   * Low position of the viewport
   */
  low: Location;

  /**
   * High position of the viewport
   */
  high: Location;
}

/**
 * Business status enum
 */
export enum BusinessStatus {
  /**
   * Business status is not known
   */
  BUSINESS_STATUS_UNSPECIFIED = 'BUSINESS_STATUS_UNSPECIFIED',

  /**
   * Business is operating normally
   */
  OPERATIONAL = 'OPERATIONAL',

  /**
   * Business is closed temporarily
   */
  CLOSED_TEMPORARILY = 'CLOSED_TEMPORARILY',

  /**
   * Business is closed permanently
   */
  CLOSED_PERMANENTLY = 'CLOSED_PERMANENTLY',
}

/**
 * Editorial summary
 */
export interface EditorialSummary {
  /**
   * Summary text
   */
  text?: string;

  /**
   * Language code for the summary
   */
  languageCode?: string;
}

/**
 * Price level enum
 */
export enum PriceLevel {
  /**
   * Price level is not known
   */
  PRICE_LEVEL_UNSPECIFIED = 'PRICE_LEVEL_UNSPECIFIED',

  /**
   * Free
   */
  FREE = 'FREE',

  /**
   * Inexpensive
   */
  INEXPENSIVE = 'INEXPENSIVE',

  /**
   * Moderate
   */
  MODERATE = 'MODERATE',

  /**
   * Expensive
   */
  EXPENSIVE = 'EXPENSIVE',

  /**
   * Very expensive
   */
  VERY_EXPENSIVE = 'VERY_EXPENSIVE',
}

/**
 * Special opening hours during holidays or special events
 */
export interface SpecialOpeningHours {
  /**
   * Special hours applied to a specific date
   */
  date?: Date;

  /**
   * Human-readable description of the special hours
   */
  specialHoursText?: string;

  /**
   * Whether the business is closed during the special hours
   */
  isClosed?: boolean;
}

/**
 * Related places information
 */
export interface RelatedPlaces {
  /**
   * Large place that this place is part of, like mall for store
   */
  largerPlace?: string;
}

/**
 * Response structure when requesting place details
 */
export interface PlaceDetailsResponse {
  /**
   * The place in the response
   */
  place: Place;
}

/**
 * Response structure when searching for places
 */
export interface SearchPlacesResponse {
  /**
   * Places found in the search
   */
  places: Place[];

  /**
   * Next page token for pagination
   */
  nextPageToken?: string;
}

/**
 * Utility to convert a Google Places API JSON response into typed objects
 */
export class GooglePlaceConverter {
  /**
   * Convert a raw JSON response to a typed Place object
   * @param jsonData The raw JSON response from the Google Places API
   * @returns A strongly typed Place object
   */
  public static toPlace(jsonData: any): Place {
    return jsonData as Place;
  }

  /**
   * Convert a raw JSON response to a typed PlaceDetailsResponse object
   * @param jsonData The raw JSON response from the Google Places API
   * @returns A strongly typed PlaceDetailsResponse object
   */
  public static toPlaceDetailsResponse(jsonData: any): PlaceDetailsResponse {
    return jsonData as PlaceDetailsResponse;
  }

  /**
   * Convert a raw JSON response to a typed SearchPlacesResponse object
   * @param jsonData The raw JSON response from the Google Places API
   * @returns A strongly typed SearchPlacesResponse object
   */
  public static toSearchPlacesResponse(jsonData: any): SearchPlacesResponse {
    return jsonData as SearchPlacesResponse;
  }
}