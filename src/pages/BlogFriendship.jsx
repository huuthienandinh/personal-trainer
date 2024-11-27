import img from '../components/img/friendship.jpg';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrTwitter } from 'react-icons/gr';

function BlogFriendship() {
    return (
        <section className="py-12 border-t-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center text-[#4C683F] ">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- friendship and exercise -</h2>
                </div>
                <div className="px-12 sm:px-24 md:px-36 sm:text-lg lg:px-48 md:text-xl text-[#97a97c] text-justify">
                    <img src={img} className="w-full" />
                    <p className="py-8">6 am alarm goes off …..</p>
                    <p className="pb-8">
                        What motivates some people to burst out of bed and pop on their sports clothes and runners is friendship, banter and
                        laughs.
                    </p>
                    <p className="pb-8">
                        Over the years I have taken on numerous sporting events with friends and often the training in the lead up to the
                        event is what we enjoy the most. We discuss and debrief not only spoting issues but give each other advice on
                        family, work and so many other issues. We solve the problems of the world really ha ha.
                    </p>
                    <p className="pb-8">
                        The event itself is always lots of fun. We celebrate our early training mornings and enjoy those finish line feels.
                        Often we go out for breakfast at the end of the event and that breakfast food always tastes so good and well earnt
                        after our morning adventure.
                    </p>
                    <p className="pb-8">
                        Take photos in training and on event day. You don’t need to post them or put them anywhere if you don’t want to.
                        Keep them and look back at them and reflect upon what you achieved and how much fun you had in training and on race
                        day.
                    </p>
                    <p className="pb-12">
                        When I train and do a race these days I put times and expectations aside and I am just so so grateful to complete
                        the event and for the opportunity.
                    </p>
                    <p className="text-center italic font-bold text-[#4C683F] pb-8 font-sans">Find what motivates you and have fun!</p>
                    <p className="pb-12 text-right">/ by Nirvana Mcbeath</p>
                    <p className="pb-6">share this post</p>
                    <div className="flex">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://nirvanaptyoga.com.au/resources/blog-friendship"
                            rel="noreferrer"
                        >
                            <FaFacebook style={{ height: 25, width: 25 }} className="hover:text-[#4C683F] mr-4" />
                        </a>
                        <a href="mailto:?subject=Friendship%20and%20Exercise&amp;body=https://nirvanaptyoga.com.au/resources/blog-friendship">
                            <MdEmail style={{ height: 25, width: 25 }} className="hover:text-[#4C683F] mr-4" />
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/share?text=Friendship%20and%20Exercise&amp;url=https://nirvanaptyoga.com.au/resources/blog-friendship"
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

export default BlogFriendship;
