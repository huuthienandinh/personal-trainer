import img from '../components/img/menopause.jpg';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrTwitter } from 'react-icons/gr';

function BlogMenopause() {
    return (
        <section className="py-12 border-t-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center text-[#4C683F] ">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- menopause etc... all those things we don’t want to talk about -</h2>
                </div>
                <div className="px-12 sm:px-24 md:px-36 sm:text-lg lg:px-48 md:text-xl text-[#97a97c] text-justify">
                    <img src={img} className="w-full" />
                    <p className="py-8">
                        Being a woman is great right! However as we get older, our body changes and we need to learn to adapt and go with
                        the &apos;season&apos;.
                    </p>
                    <p className="pb-8">
                        What does this mean? Well I hate to admit it, however we need to do exercise now to maintain our bodies rather than
                        doing it simply because we enjoy it. The trick therefore is to find exercise you do enjoy so it doesn’t become a
                        chore.
                    </p>
                    <p className="text-center italic font-bold text-[#4C683F] pb-8 font-sans">How can you do that?</p>
                    <p className="pb-4">1. Try a few different forms of exercise to find what you enjoy.</p>
                    <p className="pb-4">2. Find an event or goal to work towards.</p>
                    <p className="pb-4">3. Ask some friends who you like to spend time with to join you.</p>
                    <p className="pb-4">4. Add strength training to your week to help maintain your muscles as we age.</p>
                    <p className="pb-4">5. Stretch and make sure you listen to your body.</p>
                    <p className="pb-4">6. Think about whether you are a morning or evening exercise person and start there.</p>
                    <p className="pb-4">
                        7. Get up and get dressed. Walk out that door before you think about whether you want to exercise or not.
                    </p>
                    <p className="pb-8">
                        8. Try and be consistent with the exercise and write out a weekly plan of when you can put 30 minutes a day of
                        exercise in your life.
                    </p>
                    <p className="pb-12">
                        Often when I train my clients in Personal Training or Yoga sessions, I ask them &quot;Over the next 8 weeks what can
                        I work with you on to help you achieve?&quot; Maybe find a personal trainer to talk to or a friend to keep you
                        accountable to reach your goal.
                    </p>
                    <p className="text-center italic font-bold text-[#4C683F] pb-8 font-sans">Good luck !</p>
                    <p className="pb-12 text-right">/ by Nirvana Mcbeath</p>
                    <p className="pb-6">share this post</p>
                    <div className="flex">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://nirvanaptyoga.com.au/resources/blog-menopause"
                            rel="noreferrer"
                        >
                            <FaFacebook style={{ height: 25, width: 25 }} className="hover:text-[#4C683F] mr-4" />
                        </a>
                        <a href="mailto:?subject=Menopause%20etc...%20all%20those%20things%20we%20don’t%20want%20to%20talk%20about&amp;body=https://nirvanaptyoga.com.au/resources/blog-menopause">
                            <MdEmail style={{ height: 25, width: 25 }} className="hover:text-[#4C683F] mr-4" />
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/share?text=Menopause%20etc...%20all%20those%20things%20we%20don’t%20want%20to%20talk%20about&amp;url=https://nirvanaptyoga.com.au/resources/blog-menopause"
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

export default BlogMenopause;
