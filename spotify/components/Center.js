import React from "react";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Center = () => {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className="flex flex-grow text-white">
      <header>
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex item-end space-x-7 bg-gradient-to-b
         to-black from-red-500 h-80 text-white p-8`}
      >
        <h1>hello</h1>
      </section>
    </div>
  );
};

export default Center;
