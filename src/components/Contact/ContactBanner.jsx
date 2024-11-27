function ContactBanner() {
    return (
        <div className="relative text-center text-[#315e26]">
            <div className="bg-[#B5C99A] h-[250px] lg:h-[400px] w-full bg-opacity-50" alt="">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <h1 className=" font-serif text-4xl md:text-5xl lg:text-7xl xl:text-8xl pb-4 md:pb-10">Get In Touch</h1>
                    <p className="font-sans text-lg md:text-xl lg:text-2xl">
                        Just drop us a line. We will be glad to answer your enquiries.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactBanner;
