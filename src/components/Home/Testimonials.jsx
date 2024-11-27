import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

function Testimonials() {
    return (
        <>
            <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-[#4C683F] flex items-center justify-center">
                        <h2 className="text-2xl md:text-3xl mr-2">- our clients&#39; reviews -</h2>
                    </div>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; Nirvana came to our work group to do a wellness session. My brief was broad around yoga,
                                    stretching, or mindfulness and Nirvana was able to adapt the session on the day to what the staff wanted
                                    and needed. She even gave us some easy take away activities that we could do ourselves at our desk.
                                    Nirvana&#39;s gentle and calm voice put us all in a space to clear our mind and focus on our breathe. We
                                    all came out wanting to do it on a regular basis. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">N</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Nicole</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide className=" flex-col items-center">
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; Nirvana has been my PT for many years. She always shows such genuine care and concern for my
                                    health and well-being. Not only do I get greeted with a huge smile at 6.30 one morning a week, I leave
                                    with happily stretched and challenged body, a full heart and a clear mind, ready for the day. I would
                                    recommend Nirvana to anyone. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">KG</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Kate Gannon</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; I have been training with Nirvana for over 10 years, and she never fails to be happy and always
                                    smiling, even while pushing me to my limits! She is very motivational and a sensational yoga instructor
                                    too, tailoring each session to every person&#39;s needs. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">P</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Pat</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; I have worked with Nirvana for over 10 years. We have won awards in 2 of the 12 week challenges
                                    we have entered. She is always encouraging and full of energy. She has kept me moving and strong when I
                                    had injuries. She makes training fun. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">P</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Prue</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; I have been training with Nirvana PT for quite a number of years. I look forward to my training
                                    as we solve the problems of the world, laugh and chat and she takes my mind off the hard bits by
                                    distracting me! I come away from sessions feeling energised and happy. I love it so much. I now have my
                                    husband, daughter and mother training with Nirvana. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">MD</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Meredith Davis</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; Our team has been training with Nirvana PT for over 10 years. We like the variation in training
                                    to keep us interested. Nirvana is able to cater to each of us individually so we can meet our goals from
                                    anything such as preparing for a ski trip to overcoming injuries. If you want to have fun while
                                    achieving your goals, we recommend Nirvana. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">JB</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">
                                                Jamie Bartlett Hiltrue Investments
                                            </p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; Love the energy Nirvana brings to her yoga classes and the guidance leaves newcomers craving
                                    another class. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">BS</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Brendan Saunders</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; I&#39;ve been training with Nirvana for over 5 years. Each session is always different,
                                    challenging and fun with a great balance of outdoor training and gym. Nirvana is happy to collaborate
                                    with my physio to ensure my training complimented the treatment I had for a back issue. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">A</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Ann</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    &ldquo; I love Nirvana&#39;s yoga class. She is so warm and engaging and she makes you feel welcome
                                    straight away. I am a bit of a beginner at yoga but felt safe and confident following Nirvana&#39;s
                                    lead, with lots of options for those in the group who wanted to challenge themselves more. It was a
                                    great end to the day. I wish I could go more often. With a name like Nirvana she was born to teach yoga!
                                    Namaste. &rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">NL</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Nicole Langford</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                        <SwiperSlide>
                            <blockquote className="mt-10">
                                <div className="font-sans max-w-3xl mx-auto text-center text-sm md:text-lg leading-5 font-light text-[#97a97c]">
                                    I have been participating in Nirvana&#39;s corporate yoga sessions over the last 12 months. The sessions
                                    are fun, cater for all levels and have helped improve my flexibility. Each session is different and I
                                    have really liked the variety. The breath work during the session helps calm my mind after a busy
                                    day.&rdquo;
                                </div>
                                <footer className="mt-8 mb-16">
                                    <div className="flex-shrink-0 group block italic">
                                        <div className="flex items-center justify-center">
                                            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#d6ce93]">
                                                <span className="font-medium leading-none text-white">NK</span>
                                            </span>
                                            <p className="ml-3 text-sm md:text-lg font-medium text-[#d6ce93]">Nick Kirchner</p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
