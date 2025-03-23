import List from '@/ui/departures-list/list';

export default function Home() {
  return (
    <div className='items-center'>
      <h1 className={'text-center'}>Real-time Departure Info</h1>
      <h3 className={'text-red text-center'}>
        Route 73 Southbound to Bellevue Station <br />
        from Quebec & 29th Ave
      </h3>

      <hr className='solid' />
      <List />
    </div>
  );
}
