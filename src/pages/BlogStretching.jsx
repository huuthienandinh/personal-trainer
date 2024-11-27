import img from '../components/img/stretching.jpg';
import { FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrTwitter } from 'react-icons/gr';

function BlogStretching() {
    return (
        <section className="py-12 border-t-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center text-[#4C683F] ">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- stretching, how boring !!! -</h2>
                </div>
                <div className="px-12 sm:px-24 md:px-36 sm:text-lg lg:px-48 md:text-xl text-[#97a97c] text-justify">
                    <img src={img} className="w-full" />
                    <p className="py-8">
                        Okay I was so guilty of thinking this over the years and have been known to stretch and roll out only when injured.
                        Which we all know is not what you should do, daily maintenance is the key for keeping the body free from niggles.
                    </p>
                    <p className="text-center italic font-bold text-[#4C683F] pb-8 font-sans">What tips do I have?</p>
                    <p className="pb-4">1. Set a timer, roll and/or stretch 10 minutes a day. Don’t hop up until the timer stops.</p>
                    <p className="pb-4">2. Do a yoga routine opening the hips and/or shoulder</p>
                    <p className="pb-4">
                        3. Do your core work and strength work regularly. Stretching and strengthening is the key to maintain your body. Two
                        strength sessions a week is the minimum you should aim for.
                    </p>
                    <p className="pb-4">4. Sleep, eat well and listen to your body. Know what your body needs and can do.</p>
                    <p className="pb-8">
                        5. I use Fisiocrem and salt baths. Everyone loves a bath right? Use the bath as a chance to do some breathing
                        exercises too and just allow yourself time for stillness. Yes I even like sitting still.
                    </p>
                    <p className="pb-12">What stretching tips do you have? I would love to hear about them too.</p>
                    <p className="text-center italic font-bold text-[#4C683F] pb-8 font-sans">Enjoy your training!</p>
                    <p className="pb-12 text-right">/ by Nirvana Mcbeath</p>
                    <p className="pb-6">share this post</p>
                    <div className="flex">
                        <a
                            target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://nirvanaptyoga.com.au/resources/blog-stretching"
                            rel="noreferrer"
                        >
                            <FaFacebook style={{ height: 25, width: 25 }} className="hover:text-[#4C683F] mr-4" />
                        </a>
                        <a href="mailto:?subject=Stretching,%20how%20boring!!!&amp;body=https://nirvanaptyoga.com.au/resources/blog-stretching">
                            <MdEmail style={{ height: 25, width: 25 }} className="hover:text-[#4C683F] mr-4" />
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/share?text=Stretching,%20how%20boring!!!&amp;url=https://nirvanaptyoga.com.au/resources/blog-stretching"
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

export default BlogStretching;
