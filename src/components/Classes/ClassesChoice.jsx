import { RiHome2Line, RiComputerLine } from 'react-icons/ri';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { BsFillCloudSunFill } from 'react-icons/bs';

function ClassesChoice() {
    return (
        <section className="text-[#4C683F] py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- pick your choice -</h2>
                </div>
                <div className="text-sm sm:text-base grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16">
                        <RiHome2Line className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">Indoor Venue</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16">
                        <BsFillCloudSunFill className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">Outdoor Venue</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16">
                        <MdOutlinePeopleAlt className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">In-Person Class</p>
                    </div>
                    <div className="flex items-center justify-start xs:pl-3 sm:pl-6 pl-16">
                        <RiComputerLine className="h-10 w-10 bg-[#b5c99a] bg-opacity-70 rounded-full p-2 text-center" />
                        <p className="ml-5">Online Class</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClassesChoice;
