function Newsletter() {
    return (
        <div className="bg-[#e9f5db] font-serif">
            <div className="text-center lg:text-left mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="py-10 px-6 bg-[#b5c99a] rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-2xl md:text-3xl tracking-tight text-white">Sign up for our newsletter</h2>
                        <p className="mt-4 max-w-3xl text-lg text-lime-100">
                            Do not miss out on our latest studio updates and weekly timetable.
                        </p>
                    </div>
                    <div className="mt-12 sm:w-full lg:mt-0 lg:ml-8 lg:flex-1">
                        <form
                            className="sm:flex"
                            action="https://bigpond.us11.list-manage.com/subscribe/post"
                            method="POST"
                            target="_blank"
                        >
                            <input type="hidden" name="u" value="2b78a180bf4b67e9dfd66e156" />
                            <input type="hidden" name="id" value="c116a73a87" />
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="MERGE0"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:ring-[#4C683F] focus:border-[#4C683F] rounded-md"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#97a97c] hover:bg-[#cfe1b9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#97a97c] focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
