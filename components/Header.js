import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image src="/boom.png" layout="fill" alt="boom" objectFit="contain" />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex shrink-0 cursor-pointer">
          <Image
            src="/boomIcon.png"
            alt="boom"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}
        <div>
          <div>
            <SearchIcon className="h-5 w-5 text-boom" />
          </div>
          <input type="text" placeholder="search" />
        </div>
        {/* right */}
      </div>
    </div>
  );
}

export default Header;
