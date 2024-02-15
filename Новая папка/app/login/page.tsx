"use client"
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {
    const router = useRouter()
    const addLogin =()=>{
         if(Username == 'Lazizbe1' && password == 'Lazizbe1' ){
            router.push('/cars')
        }
    }

  return (
    <div className='flex flex-col items-center mt-[10%]'>
      <h1 className='text-5xl mb-[3%] font'>Login page</h1>
      <div className='flex flex-col w-[400px] pl-[10px] bg-slate-400 h-[200px] rounded-xl'>
        <div className='mt-[3%]'>
            <h1 className='text-3xl flex flex-col pr-[15px] items-center w-[400px] mb-[2%]'>Login</h1>
        </div>
        <form className='flex flex-col gap-[10px]'>
            <input type="text" placeholder="Username"  className='rounded-xl w-[380px] text-black p-[10px]'/>
            <input type="text" placeholder='password' className='rounded-xl w-[380px] text-black p-[10px]' />
        </form>
      {/* <Link className='w-[100px] flex flex-col items-center ml-[37%] mt-[5%] p-[10px] rounded-xl bg-green-500 border-none border-[2px]' href="/cars">Sign up</Link> */}
       <button className='p-[10px] bg-green-500 w-[100px] flex flex-col items-center ml-[37%] mt-[3%] rounded-xl' type="button" onClick={(addLogin) => router.push('/cars')}>
      Click me
    </button>
      </div>
    </div>
  )
}
