import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#212121");

  return (
    <>
      <div className='w-full min-h-screen' style={{ backgroundColor: color }}>
        <div className='container fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-5 shadow-black bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('red')} className='outline-none w-10 h-10 rounded-full' style={{ backgroundColor: 'red' }}></button>
            <button onClick={() => setColor('green')} className='outline-none w-10 h-10 rounded-full' style={{ backgroundColor: 'green' }}></button>
            <button onClick={() => setColor('blue')} className='outline-none w-10 h-10 rounded-full' style={{ backgroundColor: 'blue' }}></button>
            <button onClick={() => setColor('gray')} className='outline-none w-10 h-10 rounded-full' style={{ backgroundColor: 'gray' }}></button>
            <button onClick={() => setColor('olive')} className='outline-none w-10 h-10 rounded-full' style={{ backgroundColor: 'olive' }}></button>
            <button onClick={() => setColor('cyan')} className='outline-none w-10 h-10 rounded-full' style={{ backgroundColor: 'cyan' }}></button>
            <button onClick={() => setColor('black')} className='outline-none w-10 h-10 rounded-full' style={{ backgroundColor: 'black' }}></button>
            <button onClick={() => setColor('yellow')} className='outline-none w-10 h-10 rounded-full' style={{ backgroundColor: 'yellow' }}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
