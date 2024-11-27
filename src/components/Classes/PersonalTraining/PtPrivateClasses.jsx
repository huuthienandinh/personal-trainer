import ptPrivate from '../../img/pt-private.jpg';
import ptGroup from '../../img/pt-group.jpg';

function PtPrivateClasses() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- private and corporate personal training classes -</h2>
                </div>
                <div className="mx-auto px-10 pb-10">
                    <div className="border-2 border-[#588157] border-opacity-60">
                        <div className="flex flex-col lg:flex-row">
                            <img
                                src={ptPrivate}
                                alt=""
                                className="pointer-events-none w-full h-40 xs:h-60 lg:w-[35%] lg:h-auto object-cover"
                            />
                            <div>
                                <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">
                                    1:1 Personal Training Classes
                                </h4>
                                <p className="px-8 font-sans font-light text-xs lg:text-base text-[#97a97c]">
                                    1:1 Personal Training sessions are available both outdoors and within a local gym. Personal training
                                    sessions are designed and tailored to the individual&apos;s goals, time availability and muscular
                                    strength and weaknesses. We take a holistic approach and design programs specific to you.
                                </p>
                                <p className="pt-4 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] pb-12">
                                    A testing session is undertaken on the first session to set a benchmark and to design your program. If
                                    you want to become fitter, stronger, improve your core strength, tone up or train for a specific event
                                    or goal PT sessions will be a good choice for you.
                                </p>
                                <div className="pt-2 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] ">
                                    <p className="pb-1">Time and venue to be finalised upon discussion | from $50 / half hour</p>
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
                                src={ptGroup}
                                alt=""
                                className="pointer-events-none w-full h-40 xs:h-60 lg:w-[35%] lg:h-auto object-cover"
                            />
                            <div>
                                <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">
                                    Small Group Classes / Boxing Classes
                                </h4>
                                <p className="px-8 font-sans font-light text-xs lg:text-base text-[#97a97c]">
                                    Form your own small group or join in on one of our indoor or outdoor classes. Group sizes are limited to
                                    8 people for safety reasons. If you want to join a group class but have injuries or concerns please come
                                    and do a 1:1 private personal training session first and you can have your own program to complete in
                                    the group session. This is a great option if you want to train with your friends but want a program
                                    designed for you.
                                </p>
                                <p className="pt-4 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] pb-12">
                                    We take pride in providing a holistic approach to training.
                                </p>
                                <div className="pt-2 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] ">
                                    <p className="pb-1">Time and venue to be finalised upon discussion | from $20 / class</p>
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

export default PtPrivateClasses;
