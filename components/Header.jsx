import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-6">
            {/* left */}
            <div className="relative flex items-center h-12 cursor-pointer my-auto">
                <Image
                    src="https://reorg.jp/images/reorg_logo2.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    type="text"
                    placeholder="Start your search"
                    className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-blue-900 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>
            {/* right */}
            <div className="flexx">
                <p>Become a host</p>
                <GlobeAltIcon className="h-6" />
            </div>
        </header>
    )
}

export default Header
