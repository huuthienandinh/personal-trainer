import rawPower from '../../img/raw-power.jpg';
import qRoasters from '../../img/q-roasters.jpg';
import { unplugged } from '../../Home/PopularClasses';

function YogaGroupClasses() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- yoga group classes -</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 mx-auto px-10">
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <img src={rawPower} alt="" className="pointer-events-none w-full h-40 xs:h-60 xl:h-80  object-cover" />
                            <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">Raw Power / Raw Flow Yoga</h4>
                            <p className="px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] pb-12">
                                Focusing on building strength, balance and flexibility, Power Yoga is a dynamic flow of poses that keeps
                                your practice varied and super fun! Power Yoga is much more than just a physical workout: it creates energy,
                                vitality and freedom for the body and mind.
                                <br />
                                <br />
                                Basic, breath work and technique are central to our Flow class. Sequenced to take you into a deeper
                                understanding of the poses, Raw Flow breaks down key postures to demonstrate the physical and mental
                                benefits of a yoga practice.
                            </p>
                            <div className="pt-2 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] ">
                                <p className="pb-1">Wednesday 6.00PM | Raw Power Yoga Studio, Albion</p>
                                <p className="pb-1">Saturday 1.30PM | Raw Power Yoga Studio, Albion</p>
                                <p className="pb-2 italic" rel="noreferrer">
                                    ** Please register via
                                    <a
                                        href="https://www.rawpoweryoga.com.au/raw-power-yoga-timetable/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pl-1 underline"
                                    >
                                        this link
                                    </a>
                                </p>
                            </div>
                            <div className="flex justify-end pt-12 pb-8 pr-8">
                                <button className="pointer-events-none rounded-full bg-[#c8ddab] opacity-70 w-28 h-8">
                                    <h2 className="font-light text-xs lg:text-sm text-[#4C683F]">all levels</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <img
                                src={`data:image/jpeg;base64,${unplugged}`}
                                alt=""
                                className="pointer-events-none w-full h-40 xs:h-60 xl:h-80 object-cover"
                            />
                            <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">Restorative / Flow Yoga</h4>
                            <p className="px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] pb-12">
                                Restorative Yoga - A nurturing, peaceful and grounding practice promoting deep relaxation. This class
                                restores your natural ability to relax, putting your mind and body at rest. Be expertly guided throughout
                                the practice to calm the body and switch off the “monkey” mind.
                                <br />
                                <br />
                                Flow & Restore - A slower-paced Vinyasa class focusing on strength, balance and flexibility. Concludes with
                                restorative yoga to relax and renew.
                            </p>
                            <div className="pt-2 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] ">
                                <p className="pb-1">Saturday 5.00PM | Unplugged Yoga Studio, Ashgrove</p>
                                <p className="pb-2 italic" rel="noreferrer">
                                    ** Please register via
                                    <a
                                        href="https://unpluggedyoga.com.au/timetable"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pl-1 underline"
                                    >
                                        this link
                                    </a>
                                </p>
                            </div>
                            <div className="flex justify-end pt-12 pb-8 pr-8">
                                <button className="pointer-events-none rounded-full bg-[#c8ddab] opacity-70 w-28 h-8">
                                    <h2 className="font-light text-xs lg:text-sm text-[#4C683F]">all levels</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <img src={qRoasters} alt="" className="pointer-events-none w-full h-40 xs:h-60 xl:h-80 object-cover" />
                            <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">Yoga At Q Roasters</h4>
                            <p className="px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] pb-12">
                                Flow & Stretch - A lovely way to start off a beautiful morning. In this class, you will synchronize breath
                                with movement as you flow through a series of dynamic sequences designed to build strength, flexibility, and
                                balance.
                                <br />
                                <br />
                                Vin & Yin - Experience the best of both worlds in our Vin/Yin Yoga class, blending dynamic movement with
                                deep relaxation. Begin with gentle Vinyasa flow to awaken your body, synchronize breath, and build strength
                                and flexibility.
                            </p>
                            <div className="pt-2 px-8 font-sans font-light text-xs lg:text-base text-[#97a97c] ">
                                <p className="pb-1">Tuesday 9.30AM | Q Roasters, Stafford</p>
                                <p className="pb-1">Thursday 6.00M | Q Roasters, Stafford</p>
                                <p className="pb-1 italic">** $20 with mats and props provided on request</p>
                                <p className="pb-2 italic">** Booking essential by texting 0411540696</p>
                            </div>
                            <div className="flex justify-end pt-12 pb-8 pr-8">
                                <button className="pointer-events-none rounded-full bg-[#c8ddab] opacity-70 w-28 h-8">
                                    <h2 className="font-light text-xs lg:text-sm text-[#4C683F]">all levels</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YogaGroupClasses;
