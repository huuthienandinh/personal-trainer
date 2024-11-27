import { FaBookReader, FaCoffee } from 'react-icons/fa';
import { MdSurfing } from 'react-icons/md';
import { BiRun, BiWalk } from 'react-icons/bi';
import { GiForkKnifeSpoon, GiWineGlass } from 'react-icons/gi';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';

function RetreatChoice() {
    return (
        <section className="text-[#4C683F] py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- planned activities -</h2>
                </div>
                <div className="text-sm sm:text-base grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16 md:pb-8">
                        <BiWalk className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">walking</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16 md:pb-8">
                        <BiRun className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">running</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16 md:pb-8">
                        <MdSurfing className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">surfing</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16 md:pb-8">
                        <FaBookReader className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">reading books</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16">
                        <BsFillEmojiSunglassesFill className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">relaxing</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16">
                        <GiForkKnifeSpoon className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">yummy food</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16">
                        <FaCoffee className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">coffee</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16">
                        <GiWineGlass className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">wine</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RetreatChoice;
