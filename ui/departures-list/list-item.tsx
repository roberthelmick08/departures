import { ScheduleItem } from '@/types/types';
import moment from 'moment';

export default function ListItem({ listItem }: { listItem: ScheduleItem }) {
  const time = new Date(listItem.departure_time * 1000);
  const now = moment(new Date());
  const end = moment(time);
  const duration = moment.duration(end.diff(now));
  const minuteDiff = Math.floor(duration.asMinutes());
  const formattedTime = moment(time).format('hh:mm A');

  if (listItem.is_cancelled) {
    return <li className='text-red-600 font-bold'>CANCELLED</li>;
  } else {
    return (
      <li>
        in {minuteDiff >= 0 ? minuteDiff : 0} minutes at {formattedTime}
      </li>
    );
  }
}
