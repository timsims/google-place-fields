/**
 * Type definitions for Google Places API
 * Based on: https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places
 */

// Represents a whole or partial calendar date, such as a birthday.
export interface Date {
  // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  year: number;
  // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  month: number;
  // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  day: number;
}

// Localized variant of a text in a particular language.
export interface LocalizedText {
  // Localized string in the language corresponding to languageCode below.
  text: string;
  // The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  languageCode: string;
}

// The structured components that form the formatted address, if this information is available.
export interface AddressComponent {
  // The full text description or name of the address component. For example, an address component for the country Australia may have a long_name of "Australia".
  longText: string;
  // An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short_name of "AU".
  shortText: string;
  // An array indicating the type(s) of the address component.
  types: string[];
  // The language used to format this components, in CLDR notation.
  languageCode: string;
}

// Plus code (http://plus.codes) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location.
export interface PlusCode {
  // Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters).
  globalCode: string;
  // Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity.
  compoundCode: string;
}

// An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
export interface LatLng {
  // The latitude in degrees. It must be in the range [-90.0, +90.0].
  latitude: number;
  // The longitude in degrees. It must be in the range [-180.0, +180.0].
  longitude: number;
}

// A latitude-longitude viewport, represented as two diagonally opposite low and high points.
export interface Viewport {
  // Required. The low point of the viewport.
  low: LatLng;
  // Required. The high point of the viewport.
  high: LatLng;
}

// Information about the author of the UGC data. Used in Photo, and Review.
export interface AuthorAttribution {
  // Name of the author of the Photo or Review.
  displayName: string;
  // URI of the author of the Photo or Review.
  uri: string;
  // Profile photo URI of the author of the Photo or Review.
  photoUri: string;
}

// Information about a review of a place.
export interface Review {
  // A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: places/{placeId}/reviews/{review}).
  name: string;
  // A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country.
  relativePublishTimeDescription: string;
  // The localized text of the review.
  text: LocalizedText;
  // The review text in its original language.
  originalText: LocalizedText;
  // A number between 1.0 and 5.0, also called the number of stars.
  rating: number;
  // This review's author.
  authorAttribution: AuthorAttribution;
  // Timestamp for the review. Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted.
  publishTime: string;
  // A link where users can flag a problem with the review.
  flagContentUri: string;
  // A link to show the review on Google Maps.
  googleMapsUri: string;
}

// Status changing points.
export interface Point {
  // Date in the local timezone for the place.
  date: Date;
  // Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 * 7 hours from midnight of the day of the request are returned.
  truncated: boolean;
  // A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc.
  day: number;
  // The hour in 24 hour format. Ranges from 0 to 23.
  hour: number;
  // The minute. Ranges from 0 to 59.
  minute: number;
}

// A period the place remains in openNow status.
export interface Period {
  // The time that the place starts to be open.
  open: Point;
  // The time that the place starts to be closed.
  close: Point;
}

// Structured information for special days that fall within the period that the returned opening hours cover.
export interface SpecialDay {
  // The date of this special day.
  date: Date;
}

// Information about business hour of the place.
export interface OpeningHours {
  // The periods that this place is open during the week. The periods are in chronological order, starting with Sunday in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations.
  periods: Period[];
  // Localized strings describing the opening hours of this place, one string for each day of the week. Will be empty if the hours are unknown or could not be converted to localized text. Example: "Sun: 18:00–06:00"
  weekdayDescriptions: string[];
  // A type string used to identify the type of secondary hours.
  secondaryHoursType: 'SECONDARY_HOURS_TYPE_UNSPECIFIED' | 'DRIVE_THROUGH' | 'HAPPY_HOUR' | 'DELIVERY' | 'TAKEOUT' | 'KITCHEN' | 'BREAKFAST' | 'LUNCH' | 'DINNER' | 'BRUNCH' | 'PICKUP' | 'ACCESS' | 'SENIOR_HOURS' | 'ONLINE_SERVICE_HOURS';
  // Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. Set for currentOpeningHours and currentSecondaryOpeningHours if there are exceptional hours.
  specialDays: SpecialDay[];
  // The next time the current opening hours period starts up to 7 days in the future. This field is only populated if the opening hours period is not active at the time of serving the request. Uses RFC 3339.
  nextOpenTime?: string;
  // The next time the current opening hours period ends up to 7 days in the future. This field is only populated if the opening hours period is active at the time of serving the request. Uses RFC 3339.
  nextCloseTime?: string;
  // Whether the opening hours period is currently active. For regular opening hours and current opening hours, this field means whether the place is open. For secondary opening hours and current secondary opening hours, this field means whether the secondary hours of this place is active.
  openNow: boolean;
}

// Represents a time zone from the IANA Time Zone Database.
export interface TimeZone {
  // IANA Time Zone Database time zone. For example "America/New_York".
  id: string;
  // Optional. IANA Time Zone Database version number. For example "2019a".
  version?: string;
}

// Information about a photo of a place.
export interface Photo {
  // Identifier. A reference representing this place photo which may be used to look up this place photo again (also called the API "resource" name: places/{placeId}/photos/{photo}).
  name: string;
  // The maximum available width, in pixels.
  widthPx: number;
  // The maximum available height, in pixels.
  heightPx: number;
  // This photo's authors.
  authorAttributions: AuthorAttribution[];
  // A link where users can flag a problem with the photo.
  flagContentUri: string;
  // A link to show the photo on Google Maps.
  googleMapsUri: string;
}

// Information about data providers of this place.
export interface Attribution {
  // Name of the Place's data provider.
  provider: string;
  // URI to the Place's data provider.
  providerUri: string;
}

// Payment options the place accepts.
export interface PaymentOptions {
  // Place accepts credit cards as payment.
  acceptsCreditCards?: boolean;
  // Place accepts debit cards as payment.
  acceptsDebitCards?: boolean;
  // Place accepts cash only as payment. Places with this attribute may still accept other payment methods.
  acceptsCashOnly?: boolean;
  // Place accepts NFC payments.
  acceptsNfc?: boolean;
}

// Information about parking options for the place. A parking lot could support more than one option at the same time.
export interface ParkingOptions {
  // Place offers free parking lots.
  freeParkingLot?: boolean;
  // Place offers paid parking lots.
  paidParkingLot?: boolean;
  // Place offers free street parking.
  freeStreetParking?: boolean;
  // Place offers paid street parking.
  paidStreetParking?: boolean;
  // Place offers valet parking.
  valetParking?: boolean;
  // Place offers free garage parking.
  freeGarageParking?: boolean;
  // Place offers paid garage parking.
  paidGarageParking?: boolean;
}

// Place resource name and id of sub destinations that relate to the place.
export interface SubDestination {
  // The resource name of the sub destination.
  name: string;
  // The place id of the sub destination.
  id: string;
}

// Represents an amount of money with its currency type.
export interface Money {
  // The three-letter currency code defined in ISO 4217.
  currencyCode: string;
  // The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.
  units: string;
  // Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive.
  nanos: number;
}

// Fuel price information for a given type.
export interface FuelPrice {
  // The type of fuel.
  type: 'FUEL_TYPE_UNSPECIFIED' | 'DIESEL' | 'DIESEL_PLUS' | 'REGULAR_UNLEADED' | 'MIDGRADE' | 'PREMIUM' | 'SP91' | 'SP91_E10' | 'SP92' | 'SP95' | 'SP95_E10' | 'SP98' | 'SP99' | 'SP100' | 'LPG' | 'E80' | 'E85' | 'E100' | 'METHANE' | 'BIO_DIESEL' | 'TRUCK_DIESEL';
  // The price of the fuel.
  price: Money;
  // The time the fuel price was last updated. Uses RFC 3339.
  updateTime: string;
}

// The most recent information about fuel options in a gas station.
export interface FuelOptions {
  // The last known fuel price for each type of fuel this station has. There is one entry per fuel type this station has. Order is not important.
  fuelPrices: FuelPrice[];
}

// EV charging information grouped by [type, maxChargeRateKw].
export interface ConnectorAggregation {
  // The connector type of this aggregation.
  type: 'EV_CONNECTOR_TYPE_UNSPECIFIED' | 'EV_CONNECTOR_TYPE_OTHER' | 'EV_CONNECTOR_TYPE_J1772' | 'EV_CONNECTOR_TYPE_TYPE_2' | 'EV_CONNECTOR_TYPE_CHADEMO' | 'EV_CONNECTOR_TYPE_CCS_COMBO_1' | 'EV_CONNECTOR_TYPE_CCS_COMBO_2' | 'EV_CONNECTOR_TYPE_TESLA' | 'EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T' | 'EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET' | 'EV_CONNECTOR_TYPE_NACS';
  // The static max charging rate in kw of each connector in the aggregation.
  maxChargeRateKw: number;
  // Number of connectors in this aggregation.
  count: number;
  // The timestamp when the connector availability information in this aggregation was last updated. Uses RFC 3339.
  availabilityLastUpdateTime: string;
  // Number of connectors in this aggregation that are currently available.
  availableCount?: number;
  // Number of connectors in this aggregation that are currently out of service.
  outOfServiceCount?: number;
}

// Information about the EV Charge Station hosted in Place.
export interface EVChargeOptions {
  // Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously.
  connectorCount: number;
  // A list of EV charging connector aggregations that contain connectors of the same type and same charge rate.
  connectorAggregation: ConnectorAggregation[];
}

// Experimental: AI-generated summary of the place.
export interface GenerativeSummary {
  // The overview of the place.
  overview: LocalizedText;
  // A link where users can flag a problem with the overview summary.
  overviewFlagContentUri: string;
  // The detailed description of the place.
  description: LocalizedText;
  // A link where users can flag a problem with the description summary.
  descriptionFlagContentUri: string;
  // References that are used to generate the summary description.
  references: References;
}

// Experimental: Reference that the generative content is related to.
export interface References {
  // Reviews that serve as references.
  reviews: Review[];
  // The list of resource names of the referenced places. This name can be used in other APIs that accept Place resource names.
  places: string[];
}

// Experimental: AI-generated summary of the area that the place is in.
export interface AreaSummary {
  // Content blocks that compose the area summary. Each block has a separate topic about the area.
  contentBlocks: ContentBlock[];
  // A link where users can flag a problem with the summary.
  flagContentUri: string;
}

// A block of content that can be served individually.
export interface ContentBlock {
  // The topic of the content, for example "overview" or "restaurant".
  topic: string;
  // Content related to the topic.
  content: LocalizedText;
  // Experimental: References that are related to this block of content.
  references: References;
}

// Info about the place in which this place is located.
export interface ContainingPlace {
  // The resource name of the place in which this place is located.
  name: string;
  // The place id of the place in which this place is located.
  id: string;
}

// Basic landmark information and the landmark's relationship with the target location.
export interface Landmark {
  // The landmark's resource name.
  name: string;
  // The landmark's place id.
  placeId: string;
  // The landmark's display name.
  displayName: LocalizedText;
  // A set of type tags for this landmark. For a complete list of possible values, see https://developers.google.com/maps/documentation/places/web-service/place-types.
  types: string[];
  // Defines the spatial relationship between the target location and the landmark.
  spatialRelationship: 'NEAR' | 'WITHIN' | 'BESIDE' | 'ACROSS_THE_ROAD' | 'DOWN_THE_ROAD' | 'AROUND_THE_CORNER' | 'BEHIND';
  // The straight line distance, in meters, between the center point of the target and the center point of the landmark. In some situations, this value can be longer than travelDistanceMeters.
  straightLineDistanceMeters: number;
  // The travel distance, in meters, along the road network from the target to the landmark, if known. This value does not take into account the mode of transportation, such as walking, driving, or biking.
  travelDistanceMeters?: number;
}

// Area information and the area's relationship with the target location.
export interface Area {
  // The area's resource name.
  name: string;
  // The area's place id.
  placeId: string;
  // The area's display name.
  displayName: LocalizedText;
  // Defines the spatial relationship between the target location and the area.
  containment: 'CONTAINMENT_UNSPECIFIED' | 'WITHIN' | 'OUTSKIRTS' | 'NEAR';
}

// A relational description of a location.
export interface AddressDescriptor {
  // A ranked list of nearby landmarks. The most recognizable and nearby landmarks are ranked first.
  landmarks: Landmark[];
  // A ranked list of containing or adjacent areas. The most recognizable and precise areas are ranked first.
  areas: Area[];
}

// Links to trigger different Google Maps actions.
export interface GoogleMapsLinks {
  // A link to show the directions to the place. The link only populates the destination location and uses the default travel mode DRIVE.
  directionsUri: string;
  // A link to show this place.
  placeUri: string;
  // A link to write a review for this place. This link is currently not supported on Google Maps Mobile and only works on the web version of Google Maps.
  writeAReviewUri: string;
  // A link to show reviews of this place. This link is currently not supported on Google Maps Mobile and only works on the web version of Google Maps.
  reviewsUri: string;
  // A link to show photos of this place. This link is currently not supported on Google Maps Mobile and only works on the web version of Google Maps.
  photosUri: string;
}

// The price range associated with a Place.
export interface PriceRange {
  // The low end of the price range (inclusive). Price should be at or above this amount.
  startPrice: Money;
  // The high end of the price range (exclusive). Price should be lower than this amount.
  endPrice?: Money;
}

// Information about the accessibility options a place offers.
export interface AccessibilityOptions {
  // Place offers wheelchair accessible parking.
  wheelchairAccessibleParking?: boolean;
  // Places has wheelchair accessible entrance.
  wheelchairAccessibleEntrance?: boolean;
  // Place has wheelchair accessible restroom.
  wheelchairAccessibleRestroom?: boolean;
  // Place has wheelchair accessible seating.
  wheelchairAccessibleSeating?: boolean;
}

export interface Place {
  // This Place's resource name, in places/{placeId} format. Can be used to look up the Place.
  name: string;
  // The unique identifier of a place.
  id: string;
  // The localized name of the place, suitable as a short human-readable description. For example, "Google Sydney", "Starbucks", "Pyrmont", etc.
  displayName: LocalizedText;
  // A set of type tags for this result. For example, "political" and "locality". For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types
  types: string[];
  // The primary type of the given result. This type must one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types
  primaryType: string;
  // The display name of the primary type, localized to the request language if applicable. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types
  primaryTypeDisplayName: LocalizedText;
  // A human-readable phone number for the place, in national format.
  nationalPhoneNumber: string;
  // A human-readable phone number for the place, in international format.
  internationalPhoneNumber: string;
  // A full, human-readable address for this place.
  formattedAddress: string;
  // A short, human-readable address for this place.
  shortFormattedAddress: string;
  // Repeated components for each locality level.
  addressComponents: AddressComponent[];
  // Plus code of the place location lat/long.
  plusCode: PlusCode;
  // The position of this place.
  location: LatLng;
  // A viewport suitable for displaying the place on an average-sized map. This viewport should not be used as the physical boundary or the service area of the business.
  viewport: Viewport;
  // A rating between 1.0 and 5.0, based on user reviews of this place.
  rating: number;
  // A URL providing more information about this place.
  googleMapsUri: string;
  // The authoritative website for this place, e.g. a business' homepage.
  websiteUri: string;
  // List of reviews about this place, sorted by relevance. A maximum of 5 reviews can be returned.
  reviews: Review[];
  // The regular hours of operation. Note that if a place is always open (24 hours), the close field will not be set.
  regularOpeningHours: OpeningHours;
  // Information (including references) about photos of this place. A maximum of 10 photos can be returned.
  photos: Photo[];
  // The place's address in adr microformat: http://microformats.org/wiki/adr.
  adrFormatAddress: string;
  // The business status for the place.
  businessStatus: 'BUSINESS_STATUS_UNSPECIFIED' | 'OPERATIONAL' | 'CLOSED_TEMPORARILY' | 'CLOSED_PERMANENTLY';
  // Price level of the place.
  priceLevel: 'PRICE_LEVEL_UNSPECIFIED' | 'PRICE_LEVEL_FREE' | 'PRICE_LEVEL_INEXPENSIVE' | 'PRICE_LEVEL_MODERATE' | 'PRICE_LEVEL_EXPENSIVE' | 'PRICE_LEVEL_VERY_EXPENSIVE';
  // A set of data provider that must be shown with this result.
  attributions: Attribution[];
  // A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png").
  iconMaskBaseUri: string;
  // Background color for icon_mask in hex format, e.g. #909CE1.
  iconBackgroundColor: string;
  // The hours of operation for the next seven days (including today).
  currentOpeningHours: OpeningHours;
  // Contains an array of entries for the next seven days including information about secondary hours of a business.
  currentSecondaryOpeningHours: OpeningHours[];
  // Contains an array of entries for information about regular secondary hours of a business.
  regularSecondaryOpeningHours: OpeningHours[];
  // Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable.
  editorialSummary: LocalizedText;
  // Payment options the place accepts. If a payment option data is not available, the payment option field will be unset.
  paymentOptions: PaymentOptions;
  // Options of parking provided by the place.
  parkingOptions: ParkingOptions;
  // A list of sub destinations related to the place.
  subDestinations: SubDestination[];
  // The most recent information about fuel options in a gas station. This information is updated regularly.
  fuelOptions: FuelOptions;
  // Information of ev charging options.
  evChargeOptions: EVChargeOptions;
  // Experimental: AI-generated summary of the place.
  generativeSummary: GenerativeSummary;
  // Experimental: AI-generated summary of the area that the place is in.
  areaSummary: AreaSummary;
  // List of places in which the current place is located.
  containingPlaces: ContainingPlace[];
  // The address descriptor of the place.
  addressDescriptor: AddressDescriptor;
  // Links to trigger different Google Maps actions.
  googleMapsLinks: GoogleMapsLinks;
  // The price range associated with a Place.
  priceRange: PriceRange;
  // Number of minutes this place's timezone is currently offset from UTC.
  utcOffsetMinutes: number;
  // IANA Time Zone Database time zone.
  timeZone: TimeZone;
  // The total number of reviews (with or without text) for this place.
  userRatingCount: number;
  // Specifies if the business supports takeout.
  takeout: boolean;
  // Specifies if the business supports delivery.
  delivery: boolean;
  // Specifies if the business supports indoor or outdoor seating options.
  dineIn: boolean;
  // Specifies if the business supports curbside pickup.
  curbsidePickup: boolean;
  // Specifies if the place supports reservations.
  reservable: boolean;
  // Specifies if the place serves breakfast.
  servesBreakfast: boolean;
  // Specifies if the place serves lunch.
  servesLunch: boolean;
  // Specifies if the place serves dinner.
  servesDinner: boolean;
  // Specifies if the place serves beer.
  servesBeer: boolean;
  // Specifies if the place serves wine.
  servesWine: boolean;
  // Specifies if the place serves brunch.
  servesBrunch: boolean;
  // Specifies if the place serves vegetarian food.
  servesVegetarianFood: boolean;
  // Place provides outdoor seating.
  outdoorSeating: boolean;
  // Place provides live music.
  liveMusic: boolean;
  // Place has a children's menu.
  menuForChildren: boolean;
  // Place serves cocktails.
  servesCocktails: boolean;
  // Place serves dessert.
  servesDessert: boolean;
  // Place serves coffee.
  servesCoffee: boolean;
  // Place is good for children.
  goodForChildren: boolean;
  // Place allows dogs.
  allowsDogs: boolean;
  // Place has restroom.
  restroom: boolean;
  // Place accommodates groups.
  goodForGroups: boolean;
  // Place is suitable for watching sports.
  goodForWatchingSports: boolean;
  // Information about the accessibility options a place offers.
  accessibilityOptions: AccessibilityOptions;
  // Indicates whether the place is a pure service area business.
  pureServiceAreaBusiness: boolean;
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
