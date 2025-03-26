'use client';

import { fetchDepartures } from '@/lib/data';
import ListItem from './list-item';
import { ScheduleItem } from '@/types/types';
import { useEffect, useState } from 'react';

export default function List() {
  const [departures, setDepartures] = useState<ScheduleItem[]>([]);
  const getDepartures = async () => {
    return await fetchDepartures()
      .then((res: ScheduleItem[]) => {
        setDepartures(res);
      })
      .catch((err: Error) => {
        throw err;
      });
  };

  useEffect(() => {
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
  }, []);

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
