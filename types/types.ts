export interface DisplayName {
  elements: string[];
  route_name_redundancy: null;
  boxed_text: string;
}

export interface Itinerary {
  direction_id: number;
  headsign: string;
  direction_headsign: string;
  merged_headsign: string;
  schedule_items: ScheduleItem[];
  branch_code: string;
  closest_stop: Stop;
}

export interface ScheduleItem {
  departure_time: number;
  is_cancelled: boolean;
  is_real_time: boolean;
  rt_trip_id: string;
  scheduled_departure_time: number;
  wheelchair_accessible: number;
  trip_search_key: string;
}

export interface Stop {
  distance: number;
  global_stop_id: string;
  location_type: number;
  parent_station_global_stop_id: string;
  route_type: number;
  stop_lat: number;
  stop_lon: number;
  stop_name: string;
  stop_code: string;
  rt_stop_id: string;
  wheelchair_boarding: number;
}

export interface RouteDeparture {
  global_route_id: string;
  itineraries: Itinerary[];
  route_long_name: string;
  route_short_name: string;
  route_display_short_name: DisplayName;
  compact_display_short_name: DisplayName;
  route_type: number;
  route_color: string;
  route_text_color: string;
  route_network_name: string;
  route_network_id: string;
  tts_long_name: string;
  tts_short_name: string;
  sorting_key: string;
  mode_name: string;
  real_time_route_id: string;
}