import { UsersIcon } from '@heroicons/react/24/solid';
import React from 'react'

interface FreetimeContent {
  content : string;
}
const Freetime = (props:FreetimeContent) => {
  return (
    <>
      <div className="flex space-x-2">
        <UsersIcon className="h-[35px] w-[35px] text-white" />
        <p className="my-auto font-Lato font-bold text-white">Freetime</p>
      </div>
      <p className="font-Dosis leading-6 mix-blend-normal">{props.content}</p>
    </>
  );
}

export default Freetime