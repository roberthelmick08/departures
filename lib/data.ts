import { RouteDeparture } from '@/types/types';
import axios from 'axios';

const config = {
  headers: {
    apiKey: process.env.API_KEY,
  },
};

export async function fetchDepartures() {
  const response = await axios.get<{ route_departures: RouteDeparture[] }>(
    `https://external.transitapp.com/v3/public/stop_departures?global_stop_id=RTD:64255`,
    config
  );

  return response.data.route_departures[0].itineraries[0].schedule_items;
}
