import yogaRetreat from '../../img/yoga-retreat.jpg';

function RetreatDescription() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- yoga retreat description -</h2>
                </div>
                <div className="mx-auto px-10">
                    <div className="border-2 border-[#588157] border-opacity-60">
                        <div className="flex flex-col lg:flex-row">
                            <img
                                src={yogaRetreat}
                                alt=""
                                className="pointer-events-none w-full h-40 xs:h-60 lg:w-[35%] lg:h-auto object-cover"
                            />
                            <div>
                                <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">
                                    4 Days 3 Nights Retreat / 1 Day Retreat / Private Group Retreat
                                </h4>
                                <p className="px-8 font-sans font-light text-xs lg:text-base text-[#97a97c]">
                                    We are offering a 3 night/4 day retreat in Noosa and Stradbroke Island each year. Please contact us for
                                    further information regarding these retreats. These retreats involve a morning and afternoon yoga
                                    session. You will have fun and come home feeling refreshed.
                                </p>
                                <p className="pt-4 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c]">
                                    As we have beautiful bushland in Brisbane we are also offering hiking/yoga 1 day retreats at Mt Cootha.
                                    Look out for dates for these 1 day retreats during the year. These 1 day events are subject to weather
                                    conditions and are a lot of fun. A great way to get outdoors and maybe do a retreat with some friends or
                                    make some new friends. A general level of fitness is required.
                                </p>
                                <p className="pt-4 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] pb-12">
                                    We can also tailor a yoga retreat for your own private group upon request. Further information will be
                                    provided upon discussion
                                </p>
                                <div className="p-2 italic px-8 font-sans font-light text-xs lg:text-base text-[#97a97c]">
                                    ** Fill up the form below to register your interest
                                </div>
                                <div className="flex flex-col md:flex-row justify-between px-8 py-6">
                                    <button className="pointer-events-none rounded-full bg-[#c8ddab] opacity-70 mb-4 md:mb-0">
                                        <h2 className="font-light text-xs lg:text-sm text-[#4C683F] px-6 py-3">
                                            Noosa | April 2023 (3 Nights)
                                        </h2>
                                    </button>
                                    <button className="pointer-events-none rounded-full bg-[#c8ddab] opacity-70">
                                        <h2 className="font-light text-xs lg:text-sm text-[#4C683F] px-6 py-3">
                                            Stradbroke Island | September 2023 (3 Nights)
                                        </h2>
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

export default RetreatDescription;
