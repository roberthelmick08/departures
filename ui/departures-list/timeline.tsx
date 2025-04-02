'use client';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';
import { fetchDepartures } from '@/lib/data';
import { ScheduleItem } from '@/types/types';
import ListItem from './list-item';
import LinearProgress from '@mui/material/LinearProgress';
import moment from 'moment';

export default function TimelineComponent() {
  const [departures, setDepartures] = React.useState<ScheduleItem[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [refreshTimestamp, setRefreshTimestamp] = React.useState<string>(
    moment(new Date()).format('MM/DD/YYYY [at] hh:mm:ss a')
  );

  const getDepartures = async () => {
    return await fetchDepartures()
      .then((res: ScheduleItem[]) => {
        setIsLoading(false);
        setDepartures(res);
        setRefreshTimestamp(
          moment(new Date()).format('MM/DD/YYYY [at] hh:mm:ss a')
        );
      })
      .catch((err: Error) => {
        setIsLoading(false);
        throw err;
      });
  };

  React.useEffect(() => {
    getDepartures();

    const interval = setInterval(async () => {
      getDepartures().catch((err: Error) => {
        console.error(err);
        clearInterval(interval);
      });
    }, 30 * 1000);
  }, []);

  if (!departures.length && !isLoading) {
    return (
      <Typography
        variant='h5'
        component='div'
        color='error'
        className='text-center'>
        Unable to retrieve departure data
      </Typography>
    );
  } else if (!departures.length && isLoading) {
    return <LinearProgress />;
  }

  return (
    <div className='mt-4'>
      <Typography
        variant='h5'
        component='div'
        color='primary'
        className='text-center'>
        Upcoming Departures
      </Typography>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}>
        {departures.map((departure: ScheduleItem, index: number) => {
          return (
            <div key={departure.rt_trip_id}>
              <ListItem listItem={departure} index={index} />
            </div>
          );
        })}

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant='body2'></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary' variant='outlined'>
              <MoreHorizIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}></TimelineContent>
        </TimelineItem>
      </Timeline>

      <Typography
        variant='body2'
        component='div'
        className='text-center italic'>
        Data refreshed {refreshTimestamp}
      </Typography>
    </div>
  );
}
