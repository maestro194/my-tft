import React from 'react'

import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    <div className='w-full xl:w-[1080px] lg:p-5 min-h-[100vh-360px] mx-auto mt-24'>
      <form
        className="flex w-auto max-w-1/2 justify-center items-center flex-col"    
      >
        <h1>Testing</h1>

        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 text-black rounded-md p-2 m-2 w-full"
        />

        <Button>Submit</Button>
      </form>
    </div>
  )
}
