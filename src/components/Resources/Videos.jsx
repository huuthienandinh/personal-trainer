import ReactPlayer from 'react-player';

function Videos() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- our videos -</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 mx-auto px-10 pb-12">
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <div className="w-full h-40 xs:h-60 xl:h-72 ">
                                <ReactPlayer controls url="https://youtu.be/rIanjOcR7_I" width="100%" height="100%" />
                            </div>
                            <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">Meditation 🧘‍♀️😇</h4>
                            <p className="opacity-50 px-8 font-sans font-light text-xs lg:text-base text-[#588157] pb-12">
                                Meditation, a practice that is really good for the body to achieve a mentally clear, emotionally calm and
                                stable state. Sit comfortably, press play and enjoy a 6 minutes meditation with me.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <div className="w-full h-40 xs:h-60 xl:h-72 ">
                                <ReactPlayer controls url="https://youtu.be/d5RplhuD21M" width="100%" height="100%" />
                            </div>
                            <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">Morning Yoga Flow 🧘‍♀️🌞</h4>
                            <p className="opacity-50 px-8 font-sans font-light text-xs lg:text-base text-[#588157] pb-12">
                                Join me for a 16 minutes morning yoga flow. Wear comfortable clothes, your pjs will do. It is about being
                                comfortable, not what you wear or how you look. Roll out your mat and flow with me.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 mx-auto px-10">
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <div className="w-full h-40 xs:h-60 xl:h-72 ">
                                <ReactPlayer controls url="https://youtube.com/shorts/eNCmepzoF48" width="100%" height="100%" />
                            </div>
                            <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">Corporate Yoga 🧘‍♀️🥰</h4>
                            <p className="opacity-50 px-8 font-sans font-light text-xs lg:text-base text-[#588157] pb-12">
                                A great opportunity for staff to move, relax and recharge. All levels welcome. Experience is not necessary.
                                Mats can be supplied for corporate clients so employees can just show up, sit and flow with me on the mat.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="border-2 border-[#588157] border-opacity-60">
                            <div className="w-full h-40 xs:h-60 xl:h-72 ">
                                <ReactPlayer controls url="https://youtu.be/d5RplhuD21M" width="100%" height="100%" />
                            </div>
                            <h4 className="p-8 font-serif text-md lg:text-2xl font-light text-[#4C683F]">Asana Yoga Flow 🧘‍♀️🍃</h4>
                            <p className="opacity-50 px-8 font-sans font-light text-xs lg:text-base text-[#588157] pb-12">
                                Asana practice is only a small part of yoga. Here is an example of me practising yoga. Sometimes, I flow
                                fast and powerfully, sometimes I sit and breathe, sometimes I lay and stretch, sometimes I roll out my mat
                                and just sit and breathe. Yoga is a diagnostic tool and a solution. Come and flow with me. I offer slow
                                flows, meditative flows, strong flows, meditation and breathe work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Videos;
