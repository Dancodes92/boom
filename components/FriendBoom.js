import { useEffect, useState } from "react";
import Boom from "./Boom";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function FriendBoom() {
  // get it from firebase
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session)

  return (
    <div className="flex space-x-2 p-6 bg-white mt-6 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && <Boom img={session.user.image} />}
      {/* {session.map(profile => (
        <Boom
          key={profile.id}
          img={profile.profilePic}
          username={profile.username}
          onClick={() => router.push(`${profile.username}`)}
        />
      ))} */}
    </div>
  );
}

export default FriendBoom;
