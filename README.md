# google-place-fields

TypeScript definitions for Google Places API v1 fields, providing strongly-typed interfaces for responses from the Google Places API.

## Installation

```bash
pnpm install google-place-fields
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

- `Place`: The main interface representing a place
- `DisplayName`: Interface for place name information
- `Photo`: Interface for place photos
- `OpeningHours`: Interface for opening hours data
- `Location`: Interface for geographical coordinates
- `BusinessStatus`: Enum for business operation status
- `PriceLevel`: Enum for price levels
- `AtmosphereData`: Interface for place atmosphere information
- `AccessibilityData`: Interface for accessibility information
- `NoiseLevel`: Enum for place noise levels
- And many more...

All types are fully documented with JSDoc comments.

## Breaking Changes in v2.0.0

- Updated to match Google Places API v1 data structures
- Changed `id` field to `name` in Place interface
- Removed `Rating` interface and moved rating fields directly to Place interface
- Added new `AtmosphereData` and `AccessibilityData` interfaces
- Added `NoiseLevel` enum
- Changed `reservationProvider` to `reservationsSupported`
- Removed `permanentlyClosed` and `adrFormatAddress` fields
- Made `displayName`, `primaryTypeId`, and `types` required fields
- Updated converter class to properly handle all fields

## Documentation

All interfaces are based on the [Google Places API v1 Reference](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places).

## License

MIT