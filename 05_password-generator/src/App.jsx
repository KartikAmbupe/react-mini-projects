import { useState, useCallback, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpChar, setincludeSpChar] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef(null);

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

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password).then(()=>{
      toast.success('Copied!');
    });
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, includeNumber, includeSpChar, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-red-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
                ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-green-700 text-white px-3 py-0.5 shrink-0 hover:bg-green-800 active:bg-green-900'
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
          <label htmlFor="numberInput">Numbers</label>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={includeSpChar}
              id='spCharInput'
              onChange={() => {setincludeSpChar((prev) => !prev)}}
             />
          </div>
          <label htmlFor="spCharInput">Characters</label>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
