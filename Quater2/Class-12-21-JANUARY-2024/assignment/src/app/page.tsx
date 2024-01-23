"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Home() {
  const [isBearerToken, setISBearerToken] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const func = async () => {
      setISBearerToken(localStorage.getItem('bearer_token'));
      if (!isBearerToken) return;
      const apiResp = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': isBearerToken,
        },
      })
      const data = await apiResp.json();
      console.log("data from use Effect", data);
    };
    func();
  }, [isBearerToken]);

  const onLoginHandler = async () => {
    const apiResp = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: username,       // 'kminchelle',
        password: password,       //'0lelplR',
        // expiresInMins: 60,     // optional
      })
    })
    const data = await apiResp.json();
    console.log("data", data);
    localStorage.setItem('bearer_token', data.token);
    setISBearerToken(data.token)
    router.push('/products');
  }
  return (
    <div className="flex justify-center items-center lg:h-screen">
      <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] h-[670px] md:h-[460px] m-2">
        <div className="h-[100%] w-full md:w-3/4 bg-center bg-cover rounded-lg" style={{ backgroundImage: 'url(/img/bg-5.jpg)', }}>
        </div>
        <div className="h-[90%] w-full md:w-3/4">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Logo Amplify</title><path d="M112.31 268l40.36-68.69 34.65 59-67.54 115h135L289.31 432H16zm58.57-99.76l33.27-56.67L392.44 432h-66.68zM222.67 80h66.59L496 432h-66.68z" fillRule="evenodd"></path></svg>
            <h1 className="font-semibold text-gray-600">Login</h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 md:mt-14 space-y-6 md:space-y-8">
            <div className="">
              <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="flex space-x-2 -ml-28 md:-ml-40 lg:-ml-52">
              <input className="" type="checkbox" id="checkbox" name="checkbox" />
              <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">
                Remember Me
              </h3>
            </div>
          </div>
          <div className="text-center mt-7">
            <button onClick={onLoginHandler} className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 font-medium">
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
