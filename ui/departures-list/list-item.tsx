import { ScheduleItem } from '@/types/types';
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from '@mui/lab';
import { Typography } from '@mui/material';
import moment from 'moment';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import RedoIcon from '@mui/icons-material/Redo';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import NoTransferIcon from '@mui/icons-material/NoTransfer'; // Cancelled

export default function ListItem({
  listItem,
  index,
}: {
  readonly listItem: ScheduleItem;
  readonly index: number;
}) {
  const time = new Date(listItem.departure_time * 1000);
  const now = moment(new Date());
  const end = moment(time);
  const duration = moment.duration(end.diff(now));
  const minuteDiff = Math.round(duration.asMinutes());
  const formattedTime = moment(time).format('h:mma');

  if (listItem.is_cancelled) {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant='body2'></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='error'>
            <NoTransferIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }}>
          <Typography variant='h6' component='span' color='error'>
            CANCELLED
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  } else {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant='body2'
          align='center'>
          in {minuteDiff >= 0 ? minuteDiff : 0} minutes
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            color={index ? 'primary' : 'success'}
            variant={index ? 'outlined' : 'filled'}>
            {index === 0 && <DepartureBoardIcon />}
            {index === 1 && <RedoIcon />}
            {index === 2 && <AirlineStopsIcon />}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ m: 'auto 0' }}>
          <Typography variant='h6' component='span' color='success'>
            {formattedTime}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  }
}
