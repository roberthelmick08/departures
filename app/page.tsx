// import List from '@/ui/departures-list/list';
import TimelineComponent from '@/ui/departures-list/timeline';
import Typography from '@mui/material/Typography';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Home() {
  return (
    <div className='items-center'>
      <AppBar position='static' className='py-2'>
        <Toolbar className='flex flex-col'>
          <Typography variant='h5' component='div' className='text-center'>
            Route 73 to Bellevue Station
          </Typography>
          <div className='flex justify-center items-center'>
            <DirectionsBusFilledOutlinedIcon
              fontSize='large'
              className='mr-4'
            />
            <Typography variant='h6' component='div' className='text-center'>
              from Quebec & 29th Ave
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <TimelineComponent />
    </div>
  );
}
