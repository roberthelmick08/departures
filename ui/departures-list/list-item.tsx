import { ScheduleItem } from '@/types/types';
import moment from 'moment';

export default function ListItem({ listItem }: { listItem: ScheduleItem }) {
  const time = new Date(listItem.departure_time * 1000);
  const formattedTime = moment(time).format('hh:mm A');

  const now = moment(new Date()); //todays date
  const end = moment(time); // another date
  const duration = moment.duration(end.diff(now));
  console.log('DURATION', duration);
  const minuteDiff = Math.floor(duration.asMinutes());

  if (listItem.is_cancelled) {
    return <li className='text-red-600 font-bold'>CANCELLED</li>;
  } else {
    return (
      <li>
        in {minuteDiff} minutes at {formattedTime}
      </li>
    );
  }
}
