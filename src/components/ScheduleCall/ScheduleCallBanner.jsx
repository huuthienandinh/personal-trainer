function ScheduleCallBanner() {
    return (
        <div className="relative text-center text-[#315e26]">
            <div className="bg-[#B5C99A] h-[250px] lg:h-[400px] w-full bg-opacity-50" alt="">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <h1 className=" font-serif text-4xl md:text-5xl lg:text-7xl xl:text-8xl pb-4 md:pb-10">Schedule a Call</h1>
                    <p className="font-sans text-lg md:text-xl lg:text-2xl">
                        Pick a time that is suitable for us to have a small discussion.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ScheduleCallBanner;
