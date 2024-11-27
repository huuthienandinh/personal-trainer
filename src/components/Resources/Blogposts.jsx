import blogOne from '../img/blog-1.jpg';
import blogTwo from '../img/blog-2.jpg';
import blogThree from '../img/blog-3.jpg';
import blogFour from '../img/blog-4.jpg';

function Blogposts() {
    return (
        <section className="py-12 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- our blogposts -</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mx-auto px-10">
                    <a href="/resources/blog-friendship" title="Read more">
                        <img src={blogOne} alt="" className="border-2 border-[#588157] border-opacity-60 hover:opacity-50" />
                    </a>
                    <a href="/resources/blog-stretching" title="Read more">
                        <img src={blogTwo} alt="" className="border-2 border-[#588157] border-opacity-60 hover:opacity-50" />
                    </a>
                    <a href="/resources/blog-menopause" title="Read more">
                        <img src={blogThree} alt="" className="border-2 border-[#588157] border-opacity-60 hover:opacity-50" />
                    </a>
                    <a href="/resources/blog-noosa" title="Read more">
                        <img src={blogFour} alt="" className="border-2 border-[#588157] border-opacity-60 hover:opacity-50" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Blogposts;
