/* eslint-disable @next/next/no-img-element */
function Boom({ img, username }) {
  return (
    <div>
      <img
        className="w-16 h-16 rounded-full p-[1.5px] border-boom border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={img}
        priority="true"
        alt="profile pic"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Boom;
