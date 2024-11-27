import ReactPlayer from 'react-player';

function PhotoSlideshow() {
    return (
        <>
            <div className="player-wrapper pt-24 pb-10">
                <div className="flex justify-center">
                    <div className="xs:w-[360px] xs:h-[250px] sm:w-[600px] sm:h-[250px] md:w-[750px] md:h-[300px] lg:w-[950px] lg:h-[400px] xl:w-[1200px] xl:h-[500px]">
                        <ReactPlayer controls url="https://youtu.be/8HoI6CXzedA" width="100%" height="100%" />
                    </div>
                </div>
                <h2 className="font-serif pt-16 text-right text-[#4C683F] text-xl sm:text-2xl md:text-3xl pr-4 sm:pr-20">
                    watch a short video introduction ...
                </h2>
            </div>
        </>
    );
}
export default PhotoSlideshow;
