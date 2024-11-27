const currentMonth = new Date().toLocaleString('default', { month: 'long' });
const currentYear = new Date().getFullYear();

function MonthTitle() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex flex-col items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-4">
                        - {currentMonth.toLocaleLowerCase()} {currentYear} -
                    </h2>
                    <p className="text-[#97a97c] text-sm md:text-base">
                        We welcome you to join us at any of the events below. Do register via the respective website links. Hope to see you
                        there.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MonthTitle;
