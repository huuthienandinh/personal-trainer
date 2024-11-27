import weightsToning from '../img/weights-toning.jpg';
import rawPower from '../img/raw-power.jpg';

export const unplugged =

function PopoularClasses() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- our popular classes -</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12 mx-auto px-10">
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <img
                                src={`data:image/jpeg;base64,${unplugged}`}
                                alt=""
                                className="pointer-events-none w-full h-40 sm:h-60 md:h-40 lg:h-52 object-cover"
                            />
                            <div className="pt-7">
                                <h4 className="px-8 font-serif text-md lg:text-xl font-light text-[#4C683F]">Restorative / Flow Yoga</h4>
                            </div>
                            <div className="pt-2">
                                <p className="px-8 font-sans font-light text-xs lg:text-sm text-[#97a97c] pb-12">
                                    A nurturing, peaceful and grounding practice promoting deep relaxation. This class restores your natural
                                    ability to relax, putting your mind and body at rest. Be expertly guided throughout the practice to calm
                                    the body and switch off the “monkey” mind.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <img
                                src={weightsToning}
                                alt=""
                                className="pointer-events-none w-full h-40 sm:h-60 md:h-40 lg:h-52 object-cover"
                            />
                            <div className="pt-7">
                                <h4 className="px-8 font-serif text-md lg:text-xl font-light text-[#4C683F]">Weights / Toning Circuit</h4>
                            </div>
                            <div className="pt-2">
                                <p className="px-8 font-sans font-light text-xs lg:text-sm text-[#97a97c] pb-12">
                                    High-energy class combining strength training and toning exercises in a circuit format, targeting every
                                    major muscle group for a full-body workout. Programs can be tailored to your lifestyle, training
                                    availability, coordinate and assess holistically the training regime.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <img src={rawPower} alt="" className="pointer-events-none w-full h-40 sm:h-60 md:h-40 lg:h-52 object-cover" />
                            <div className="pt-7">
                                <h4 className="px-8 font-serif text-md lg:text-xl font-light text-[#4C683F]">Raw Power / Raw Flow Yoga</h4>
                            </div>
                            <div className="pt-2">
                                <p className="px-8 font-sans font-light text-xs lg:text-sm text-[#97a97c] pb-12">
                                    Focusing on building strength, balance and flexibility, Power Yoga is a dynamic flow of poses that keeps
                                    your practice varied and super fun! Power Yoga is much more than just a physical workout: it creates
                                    energy, vitality and freedom for the body and mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-12">
                    <button className="rounded-full bg-[#c8ddab] hover:opacity-90 opacity-70">
                        <h2 className="text-lg font-serif text-[#4C683F] py-4 px-8 sm:px-16">
                            <a href="/classes/yoga" rel="noreferrer">
                                find out more
                            </a>
                        </h2>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default PopoularClasses;