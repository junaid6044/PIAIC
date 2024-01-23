"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Home() {
  const [isBearerToken, setISBearerToken] = useState<string | null>(null);
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

        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })
    const data = await apiResp.json();
    console.log("data", data);
    localStorage.setItem('bearer_token', data.token);
    setISBearerToken(data.token)
    router.push('/products');
  }

  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        {!isBearerToken ? <button onClick={onLoginHandler} type='button' className='bg-gray-200 px-5 py-1.5'>Login</button> : <span>You are already LoggedIn</span>}
        {/* {isBearerToken ? "token is present" : "token is not present"} */}
      </div>
    </>
  )
}
