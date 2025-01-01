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
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800'>
        <h1 className="text-white text-center ">Password Generator</h1>
      </div>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black' placeholder='Password' readOnly />
    </>
  )
}

export default App
