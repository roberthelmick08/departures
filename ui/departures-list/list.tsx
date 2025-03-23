import { fetchDepartures } from '@/lib/data';
import ListItem from './list-item';
import { ScheduleItem } from "@/types/types";

export default async function List() {
  const departures: ScheduleItem[] = await fetchDepartures();

  return (
    <ul>
      <div>
        <p>Next departure:</p>
        <ListItem listItem={departures[0]} />
      </div>
      <div>
        <p>Upcoming Departures:</p>
        {departures.map((departure: ScheduleItem, index: number) => {
          if (index) {
            return (
              <div key={departure.rt_trip_id}>
                <ListItem listItem={departure} />
              </div>
            );
          }
        })}
      </div>
    </ul>
  );
}
