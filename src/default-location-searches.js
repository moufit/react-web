import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-dubai',
    predictionPlace: {
      address: 'Dubai, United Arab Emirates',
      bounds: new LatLngBounds(new LatLng(25.23437, 55.56958), new LatLng(24.90590, 54.90092)),
    },
  },
  {
    id: 'default-abu-dhabi',
    predictionPlace: {
      address: 'Abu Dhabi, United Arab Emirates',
      bounds: new LatLngBounds(new LatLng(24.55201, 54.84937), new LatLng(24.19019, 54.28942)),
    },
  },
  {
    id: 'default-doha',
    predictionPlace: {
      address: 'Doha, Qatar',
      bounds: new LatLngBounds(new LatLng(25.41292, 51.61600), new LatLng(25.17092, 51.42267)),
    },
  },
  {
    id: 'default-riyadh',
    predictionPlace: {
      address: 'Riyadh, Saudi Arabia',
      bounds: new LatLngBounds(new LatLng(24.88274, 46.89277), new LatLng(24.50154, 46.56126)),
    },
  },
];
