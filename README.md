# google-place-fields

TypeScript definitions for Google Places API v1 fields, providing strongly-typed interfaces for responses from the Google Places API.

## Installation

```bash
npm install google-place-fields
# or
pnpm install google-place-fields
# or
yarn add google-place-fields
```

## Usage

This package provides TypeScript interfaces for Google Places API v1 responses. You can use these interfaces to type-check your Google Places API responses.

```typescript
import {
  Place,
  PlaceDetailsResponse,
  SearchPlacesResponse,
  GooglePlaceConverter
} from 'google-place-fields';

// Example: Using with fetch API
async function getPlaceDetails(placeName: string): Promise<Place> {
  const response = await fetch(`https://places.googleapis.com/v1/${placeName}?key=YOUR_API_KEY`);
  const data = await response.json();

  // Convert the raw JSON to a typed PlaceDetailsResponse
  const typedResponse = GooglePlaceConverter.toPlaceDetailsResponse(data);
  return typedResponse.place;
}

// Example: Using with a search response
async function searchPlaces(query: string): Promise<Place[]> {
  const response = await fetch(`https://places.googleapis.com/v1/places:searchText`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({ textQuery: query })
  });
  const data = await response.json();

  // Convert the raw JSON to a typed SearchPlacesResponse
  const typedResponse = GooglePlaceConverter.toSearchPlacesResponse(data);
  return typedResponse.places;
}
```

## Available Types

This package includes comprehensive type definitions for Google Places API v1 responses, including:

- `Place`: The main interface representing a place with all its properties
- `LocalizedText`: Interface for localized text content with language code
- `AddressComponent`: Interface for structured address components
- `PlusCode`: Interface for Plus Code location reference
- `LatLng`: Interface for geographical coordinates
- `Viewport`: Interface for location viewport
- `AuthorAttribution`: Interface for author information
- `Review`: Interface for place reviews
- `Photo`: Interface for place photos
- `OpeningHours`: Interface for opening hours data
- `Period`: Interface for time periods when a place is open
- `Point`: Interface for opening/closing time points
- `TimePeriod`: Interface for time periods
- `BusinessStatus`: Enum for business operation status
- `PriceRange`: Interface for price level information
- `Money`: Interface for representing currency amounts
- `FuelOptions`: Interface for fuel station information
- `EVChargeOptions`: Interface for EV charging station data
- `AccessibilityOptions`: Interface for accessibility information
- `GoogleMapsLinks`: Interface for various Google Maps action links

All types are fully documented with JSDoc comments directly from the Google Places API documentation.

## Documentation

All interfaces are based on the [Google Places API v1 Reference](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places).

## Features

- Full TypeScript type definitions for Google Places API v1
- Detailed JSDoc comments on all interfaces and properties
- Utility converter class to easily transform API responses into typed objects
- Support for all field types in the Places API including specialized fields like EV charging, fuel options, etc.
- Enums for all enumerable values from the API

## License

MIT