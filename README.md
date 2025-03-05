# google-place-fields

TypeScript definitions for Google Places API fields, providing strongly-typed interfaces for responses from the Google Places API.

## Installation

```bash
npm install google-place-fields
```

## Usage

This package provides TypeScript interfaces for Google Places API responses. You can use these interfaces to type-check your Google Places API responses.

```typescript
import {
  Place,
  PlaceDetailsResponse,
  SearchPlacesResponse,
  GooglePlaceConverter
} from 'google-place-fields';

// Example: Using with fetch API
async function getPlaceDetails(placeId: string): Promise<Place> {
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=YOUR_API_KEY`);
  const data = await response.json();

  // Convert the raw JSON to a typed PlaceDetailsResponse
  const typedResponse = GooglePlaceConverter.toPlaceDetailsResponse(data);
  return typedResponse.place;
}

// Example: Using with a search response
async function searchPlaces(query: string): Promise<Place[]> {
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=YOUR_API_KEY`);
  const data = await response.json();

  // Convert the raw JSON to a typed SearchPlacesResponse
  const typedResponse = GooglePlaceConverter.toSearchPlacesResponse(data);
  return typedResponse.places;
}
```

## Available Types

This package includes comprehensive type definitions for Google Places API responses, including:

- `Place`: The main interface representing a place
- `DisplayName`: Interface for place name information
- `Rating`: Interface for rating information
- `Photo`: Interface for place photos
- `OpeningHours`: Interface for opening hours data
- `Location`: Interface for geographical coordinates
- `BusinessStatus`: Enum for business operation status
- `PriceLevel`: Enum for price levels
- And many more...

All types are fully documented with JSDoc comments.

## Documentation

All interfaces are based on the [Google Places API Reference](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places).

## License

MIT