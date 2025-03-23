import List from '@/ui/departures-list/list';
import Icon from '@/ui/icon';

export default function Home() {
  return (
    <div className='items-center'>
      <h1 className={'text-center'}>Route 73 to Bellevue Station</h1>
      <div className='flex justify-around'>
        <Icon></Icon>
        <div>
          <h3 className={'text-center'}>from Quebec & 29th Ave</h3>
          <h3 className={'text-red-600 text-center'}>
            Real-time Departure Info
          </h3>
        </div>
      </div>

      <hr className='solid' />
      <List />
    </div>
  );
}
