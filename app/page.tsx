// import List from '@/ui/departures-list/list';
import TimelineComponent from '@/ui/departures-list/timeline';
import Typography from '@mui/material/Typography';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';

export default function Home() {
  return (
    <div className='items-center'>
      <div className='py-4'>
        <Typography variant='h5' component='div' className='text-center'>
          Route 73 to Bellevue Station
        </Typography>
        <div className='flex justify-center items-center'>
          <DirectionsBusFilledOutlinedIcon
            fontSize='large'
            color='primary'
            className='mr-4'
          />
          <Typography variant='h6' component='div' className='text-center'>
            from Quebec & 29th Ave
          </Typography>
        </div>
      </div>
      <hr className='solid mx-8 mb-4' />
      <TimelineComponent />
    </div>
  );
}
