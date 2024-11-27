import yogaCorporate from '../../img/yoga-corporate.jpeg';
import yogaGroup from '../../img/yoga-private.jpeg';

function YogaPrivateClasses() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- private and corporate yoga classes -</h2>
                </div>
                <div className="mx-auto px-10 pb-10">
                    <div className="border-2 border-[#588157] border-opacity-60">
                        <div className="flex flex-col lg:flex-row">
                            <img
                                src={yogaGroup}
                                alt=""
                                className="pointer-events-none w-full h-40 xs:h-60 lg:w-[35%] lg:h-auto object-cover"
                            />
                            <div>
                                <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">
                                    1:1 Yoga Classes / Small Yoga Group Classes
                                </h4>
                                <p className="px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] pb-12">
                                    1:1 and group yoga classes are available. All the classes can be designed and tailored to the strength
                                    and weaknesses of every individual. We take a holistic approach that is specific to different people. It
                                    can be a gentle flow that caters for all levels with lots of hands-on guidance provided to help achieve
                                    correct alignment through the flow. Any beginner can join a class and get involved in the joy and fun of
                                    doing yoga together.
                                </p>
                                <div className="pt-2 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] ">
                                    <p className="pb-1">Time and venue to be finalised upon discussion</p>
                                    <p className="pb-1">1:1 classes from $50 / half hour | small group classes from $20 / class</p>
                                    <p className="pb-2 italic">** Please contact me for further information.</p>
                                </div>
                                <div className="flex justify-end pr-8 py-6">
                                    <button className="pointer-events-none rounded-full bg-[#c8ddab] opacity-70 w-28 h-8">
                                        <h2 className="font-light text-xs lg:text-sm text-[#4C683F]">all levels</h2>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-10">
                    <div className="border-2 border-[#588157] border-opacity-60">
                        <div className="flex flex-col lg:flex-row">
                            <img
                                src={yogaCorporate}
                                alt=""
                                className="pointer-events-none w-full h-40 xs:h-60 lg:w-[35%] lg:h-auto object-cover"
                            />
                            <div>
                                <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">Corporate Yoga Classes</h4>
                                <p className="px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] pb-12">
                                    Corporate yoga sessions are available and can be tailored to your organisation. My commercial background
                                    and Degree in Commerce (Human Resources) equips me with the skills required to implement a corporate
                                    yoga training session. Yoga mats and equipment can be provided inclusive within the cost. This makes it
                                    easy on the employer to provide this corporate yoga classes opportunity to their staff.
                                </p>
                                <div className="pt-2 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] ">
                                    <p className="pb-1">Time, venue and price to be finalised upon discussion</p>
                                    <p className="pb-2 italic">** Please contact me for further information.</p>
                                </div>
                                <div className="flex justify-end pr-8 py-6">
                                    <button className="pointer-events-none rounded-full bg-[#c8ddab] opacity-70 w-28 h-8">
                                        <h2 className="font-light text-xs lg:text-sm text-[#4C683F]">all levels</h2>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default YogaPrivateClasses;
