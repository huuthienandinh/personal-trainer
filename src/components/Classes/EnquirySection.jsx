// eslint-disable-next-line react/prop-types
function EnquirySection({ form }) {
    return (
        <div className="grid md:grid-cols-2 text-center px-8 py-14 ">
            <div className="mb-8 md:mb-0 xl:mx-10 p-6 sm:p-8 lg:py-10 lg:px-16 bg-[#E9F5DB] bg-opacity-60 font-serif rounded-3xl border-2 border-[#64A063] text-[#4C683F]">
                <h1 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl">Any Questions ?</h1>
                <p className="pt-3 pb-6 text-sm xs:text-base sm:text-xl">Do not hesitate to leave us a message.</p>
                <button className="bg-[#C8DDAB] font-light text-sm lg:text-base rounded-full py-2 px-10">
                    <a href="/contact/contact-form" rel="noreferrer">
                        contact us
                    </a>
                </button>
            </div>
            <div className="p-6 md:ml-6 lg:ml-8 xl:mx-10 sm:p-8 lg:py-10 lg:px-16 bg-[#E9F5DB] bg-opacity-60 font-serif rounded-3xl border-2 border-[#64A063] text-[#4C683F]">
                <h1 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl">Interested ?</h1>
                <p className="pt-3 pb-6 text-sm xs:text-base sm:text-xl">We want to know more about you.</p>
                <button className="bg-[#C8DDAB] font-light text-sm lg:text-base rounded-full py-2 px-10">
                    <a href={form} target="_blank" rel="noreferrer">
                        click here
                    </a>
                </button>
            </div>
        </div>
    );
}

export default EnquirySection;
