import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard'; // Upcoming departure
import RedoIcon from '@mui/icons-material/Redo'; // Next departure
import AirlineStopsIcon from '@mui/icons-material/AirlineStops'; // 3rd departure
// import NoTransferIcon from '@mui/icons-material/NoTransfer';  // Cancelled
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';

export default function TimelineComponent() {
  return (
    <div>
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
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant='body2'
            align='center'>
            in 8 minutes
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='success'>
              <DepartureBoardIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography variant='h6' component='span'>
              9:30 am
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2'>
            in 38 minutes
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary' variant='outlined'>
              <RedoIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography variant='h6' component='span'>
              10:00 am
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2'>
            in 68 minutes
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color='primary' variant='outlined'>
              <AirlineStopsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography variant='h6' component='span'>
              10:30 am
            </Typography>
          </TimelineContent>
        </TimelineItem>

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

      <Typography variant='body2' component='div' className='text-center italic'>
        Data up to date as of 01/01/01 9:22:27 am
      </Typography>
    </div>
  );
}
