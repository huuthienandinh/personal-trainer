import amanzi from '../img/amanzi.jpeg';
import aquaman from '../img/aquaman.jpg';
import fisiocrem from '../img/fisiocrem.jpeg';
import infinite from '../img/infinite.jpeg';
import lutwyche from '../img/lutwyche.jpg';

function Sponsors() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- our partners / sponsors -</h2>
                </div>
                <div className="bg-[#f0fdf4]">
                    <div className="max-w-7xl mx-auto py-10 px-4 sm:py-12 sm:px-6 lg:px-8">
                        <div className="flow-root">
                            <div className="-mt-4 -ml-8 flex flex-wrap lg:justify-between lg:-ml-4">
                                <div className="mt-4 ml-8 flex justify-center flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                    <a href="https://www.amanziswimwear.com/" target="_blank" rel="noreferrer">
                                        <img className="h-12 w-[10rem]" src={amanzi} alt="Amanzi Swimwear" />
                                    </a>
                                </div>
                                <div className="mt-4 ml-8 flex justify-center flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                    <a href="https://www.fisiocrem.com.au/" target="_blank" rel="noreferrer">
                                        <img className="h-12 w-[10rem]" src={fisiocrem} alt="Fisiocream" />
                                    </a>
                                </div>
                                <div className="mt-4 ml-8 flex justify-center flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                    <a href="https://www.infinitnutrition.com.au/" target="_blank" rel="noreferrer">
                                        <img className="h-12 w-[10rem]" src={infinite} alt="Infinit Nutrition" />
                                    </a>
                                </div>
                                <div className=" mt-4 ml-8 flex justify-center flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                    <a href="https://www.facebook.com/profile.php?id=100054615812172" target="_blank" rel="noreferrer">
                                        <img className="h-12 w-[15rem]" src={aquaman} alt="Aquaman Wetsuits" />
                                    </a>
                                </div>
                                <div className="mt-4 ml-8 flex justify-center flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                                    <a href="https://www.giantlutwyche.com.au/au" target="_blank" rel="noreferrer">
                                        <img className="h-12 w-[15rem]" src={lutwyche} alt="Giant Lutwyche" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
