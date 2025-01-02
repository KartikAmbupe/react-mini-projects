import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpChar, setincludeSpChar] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(includeNumber)
      str += '0123456789';
    if(includeSpChar)
      str += '!@#$%^&*()_+~`|}{[]:;?><,./';

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }

    setPassword(password);

  }, [length, includeNumber, includeSpChar, setPassword]) 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                // ref={passwordRef}
            />
            <button
            // onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >Copy</button>
        </div>
        <div className='flex test-sm gap-x-2 px-3 mb-3'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={includeNumber}
              id='numberInput'
              onChange={() => {setIncludeNumber((prev) => !prev)}}
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
