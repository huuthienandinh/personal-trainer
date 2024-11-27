import ReactPlayer from 'react-player';

function PtBanner() {
    return (
        <div className="flex flex-col-reverse xs:flex-row items-center bg-[#B5C99A] bg-opacity-50">
            <div className="grid justify-items-center pt-6 pb-8 xs:py-8 sm:py-16 xs:h-[250px] xs:w-[400px] xs:pl-6 sm:h-[350px] sm:w-[450px] sm:pl-8 md:h-[400px] md:w-[600px] md:pl-12 lg:h-[450px] lg:w-[650px] lg:pl-16 xl:h-[550px] xl:w-[800px] xl:pl-20">
                <ReactPlayer controls url="https://youtu.be/W1EFas2Hr08" width="100%" height="100%" />
            </div>
            <div className="bg-white m-[5%] text-[#4C683F] rounded-lg">
                <h1 className="border-double border-4 border-[#4C683F] rounded-lg font-serif text-lg sm:text-3xl lg:text-5xl text-center py-4 px-16 xs:py-2 xs:px-6 sm:py-6 sm:px-12 md:px-16 md:py-8 lg:py-12 xl:py-16 xl:px-28">
                    Personal Training
                </h1>
            </div>
        </div>
    );
}

export default PtBanner;
