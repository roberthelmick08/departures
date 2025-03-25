'use client';

import { fetchDepartures } from '@/lib/data';
import ListItem from './list-item';
import { ScheduleItem } from '@/types/types';
import { useState } from 'react';

export default function List() {
  const [departures, setDepartures] = useState<ScheduleItem[]>([]);

  // TODO: use strong typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDepartures: any = async () => {
    return await fetchDepartures().then((res: ScheduleItem[]) => {
      console.log('SET TIMEOUT', res);
      setDepartures(res);
    });
  };
  const pollDepartures = async () => {
    getDepartures();
    const interval = setInterval(async () => {
      getDepartures().catch((err: Error) => {
        console.error(err);
        clearInterval(interval);
      });
    }, 30 * 1000);
  };

  pollDepartures();
  if (!departures.length) {
    return;
  }

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
