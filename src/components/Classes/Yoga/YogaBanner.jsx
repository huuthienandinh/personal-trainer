import ReactPlayer from 'react-player';

function YogaBanner() {
    return (
        <div className="flex flex-col-reverse xs:flex-row items-center bg-[#B5C99A] bg-opacity-50">
            <div className="grid justify-items-center pt-6 pb-8 xs:py-8 sm:py-16 xs:h-[250px] xs:w-[400px] xs:pl-6 sm:h-[350px] sm:w-[450px] sm:pl-8 md:h-[400px] md:w-[600px] md:pl-12 lg:h-[450px] lg:w-[650px] lg:pl-16 xl:h-[550px] xl:w-[800px] xl:pl-20">
                <ReactPlayer controls url="https://youtu.be/JxxT3-WnWxY" width="100%" height="100%" />
            </div>
            <div className="bg-white m-[5%] text-[#4C683F] rounded-lg">
                <h1 className="border-double border-4 border-[#4C683F] rounded-lg font-serif text-3xl sm:text-5xl lg:text-7xl text-center py-4 px-16 xs:py-4 xs:px-6 sm:py-6 sm:px-12 md:px-16 md:py-8 lg:py-12 xl:py-16 xl:px-36">
                    Yoga
                </h1>
            </div>
        </div>
    );
}

export default YogaBanner;
