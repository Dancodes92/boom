import { useEffect, useState } from "react";
import faker from "faker";
import Boom from "./Boom";

function FriendBoom() {
  const suggestions = [
    {
      username: faker.name.findName(),
      profilePic: faker.image.imageUrl(),
      id: 1,
    },
    {
      username: faker.name.findName(),
      profilePic: faker.image.nightlife(),
      id: 2,
    },
    {
      username: faker.name.findName(),
      profilePic: faker.image.nature(),
      id: 3,
    },
    {
      username: faker.name.findName(),
      profilePic: faker.image.people(),
      id: 4,
    },
    {
      username: faker.name.findName(),
      profilePic: faker.image.sports(),
      id: 5,
    },
    {
      username: faker.name.findName(),
      profilePic: faker.image.transport(),
      id: 6,
    },{
      username: faker.name.findName(),
      profilePic: faker.image.sports(),
      id: 7,
    },{
      username: faker.name.findName(),
      profilePic: faker.image.people(),
      id: 8,
    },{
      username: faker.name.findName(),
      profilePic: faker.image.nature(),
      id: 9,
    },
  ];

  return (
    <div className="flex space-x-2 p-6 bg-white mt-6 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map(profile => (
        <Boom
          key={profile.id}
          img={profile.profilePic}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default FriendBoom;
