import img from '../components/img/noosa.jpg';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrTwitter } from 'react-icons/gr';

function BlogNoosa() {
    return (
        <section className="py-12 border-t-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center text-[#4C683F] ">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- noosa classic -</h2>
                </div>
                <div className="px-12 sm:px-24 md:px-36 sm:text-lg lg:px-48 md:text-xl text-[#97a97c] text-justify">
                    <img src={img} className="w-full" />
                    <p className="py-8">
                        I love getting outdoors and exercising with friends makes me happy. The idea of doing an event is &quot;icing on the
                        cake&quot; for me as the training is just as much fun along the way. I know some people needs an event as a goal so
                        an event such as the Noosa classic might be something to add to your event calendar.
                    </p>
                    <p className="text-center italic font-bold text-[#4C683F] pb-8 font-sans">What do I love about the Noosa classic?</p>
                    <p className="pb-8">
                        It is well run, an easy event to get to from Brisbane and the weather is usually as you would expect from
                        Queensland. Brilliant!!! This ride is over hilly terrain, however the scenery is magic.
                    </p>
                    <p className="pb-8">
                        They put in fuel stations and toilet stops and there are so many friendly volunteers along the way supporting the
                        ride. This ride is top-notch. A wonderful event.
                    </p>
                    <p className="text-center italic font-bold text-[#4C683F] pb-8 font-sans">
                        What fuels your ride and gets you to that start line?
                    </p>
                    <p className="pb-8">
                        I am a big fan of Infinit Nutrition. You can tailor this to you body weight, the taste you like etc and have it
                        created just for you and your needs.
                    </p>
                    <p className="pb-8">
                        I opt to add caffeine to my mix , when you give them a call you can discuss different options and trial it in your
                        training before the event. Definitely try anything you are going to use before race day. Infinit is kind to your
                        tummy and sooooo easy to use. Definitely give it a go.
                    </p>
                    <p className="pb-12">
                        Of course on race day I won’t say no to a lolly or two at an aid station. How nice is sugar on a ride.
                    </p>
                    <p className="text-center italic font-bold text-[#4C683F] pb-8 font-sans">Enjoy your training and racing!</p>
                    <p className="pb-12 text-right">/ by Nirvana Mcbeath</p>
                    <p className="pb-6">share this post</p>
                    <div className="flex">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://nirvanaptyoga.com.au/resources/blog-noosa"
                            rel="noreferrer"
                        >
                            <FaFacebook style={{ height: 25, width: 25 }} className="hover:text-[#4C683F] mr-4" />
                        </a>
                        <a href="mailto:?subject=Noosa%20Classic&amp;body=https://nirvanaptyoga.com.au/resources/blog-noosa">
                            <MdEmail style={{ height: 25, width: 25 }} className="hover:text-[#4C683F] mr-4" />
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/share?text=Noosa%20Classic&amp;url=https://nirvanaptyoga.com.au/resources/blog-noosa"
                            rel="noreferrer"
                        >
                            <GrTwitter style={{ height: 25, width: 25 }} className="hover:text-[#4C683F]" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogNoosa;
