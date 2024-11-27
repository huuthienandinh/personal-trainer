import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import InstaImg1 from '../img/insta-1.jpg';
import InstaImg2 from '../img/insta-2.jpg';
import InstaImg3 from '../img/insta-3.jpg';
import InstaImg4 from '../img/insta-4.jpg';
import InstaImg5 from '../img/insta-5.jpg';
import InstaImg6 from '../img/insta-6.jpg';

export default function InstagramImages() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- from instagram -</h2>
                </div>
                <ImageList className="mx-4 sm:mx-8" sx={{ width: 'full', height: 'auto' }} cols={3} rowHeight="auto">
                    <ImageListItem>
                        <a href="https://www.instagram.com/p/CgLp6zuvAGr/" target="_blank" rel="noreferrer">
                            <img src={InstaImg1} loading="lazy" />
                        </a>
                    </ImageListItem>
                    <ImageListItem>
                        <a href="https://www.instagram.com/p/CgFvrytBJWS/" target="_blank" rel="noreferrer">
                            <img src={InstaImg2} loading="lazy" />
                        </a>
                    </ImageListItem>
                    <ImageListItem>
                        <a href="https://www.instagram.com/p/CZDZH7IPhX1/" target="_blank" rel="noreferrer">
                            <img src={InstaImg3} loading="lazy" />
                        </a>
                    </ImageListItem>
                    <ImageListItem>
                        <a href="https://www.instagram.com/p/CXnad9rPS6t/" target="_blank" rel="noreferrer">
                            <img src={InstaImg4} loading="lazy" />
                        </a>
                    </ImageListItem>
                    <ImageListItem>
                        <a href="https://www.instagram.com/p/CVW7pLgPoRh/" target="_blank" rel="noreferrer">
                            <img src={InstaImg5} loading="lazy" />
                        </a>
                    </ImageListItem>
                    <ImageListItem>
                        <a href="https://www.instagram.com/p/CSS7UBcB34x/" target="_blank" rel="noreferrer">
                            <img src={InstaImg6} loading="lazy" />
                        </a>
                    </ImageListItem>
                </ImageList>
            </div>
        </section>
    );
}
