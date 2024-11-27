import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ModalImage from 'react-modal-image';
import GalleryImg1 from '../img/gallery-1.jpg';
import GalleryImg2 from '../img/gallery-2.jpeg';
import GalleryImg3 from '../img/gallery-3.jpg';
import GalleryImg4 from '../img/gallery-4.jpeg';
import GalleryImg5 from '../img/gallery-5.jpg';
import GalleryImg6 from '../img/gallery-6.jpg';

export default function GalleryImages() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- our gallery -</h2>
                </div>
                <ImageList className="mx-4 sm:mx-8" sx={{ width: 'full', height: 'auto' }} cols={3} rowHeight="auto">
                    <ImageListItem>
                        <ModalImage small={GalleryImg1} large={GalleryImg1} loading="lazy" />;
                    </ImageListItem>
                    <ImageListItem>
                        <ModalImage small={GalleryImg2} large={GalleryImg2} loading="lazy" />;
                    </ImageListItem>
                    <ImageListItem>
                        <ModalImage small={GalleryImg3} large={GalleryImg3} loading="lazy" />;
                    </ImageListItem>
                    <ImageListItem>
                        <ModalImage small={GalleryImg4} large={GalleryImg4} loading="lazy" />;
                    </ImageListItem>
                    <ImageListItem>
                        <ModalImage small={GalleryImg5} large={GalleryImg5} loading="lazy" />;
                    </ImageListItem>
                    <ImageListItem>
                        <ModalImage small={GalleryImg6} large={GalleryImg6} loading="lazy" />;
                    </ImageListItem>
                </ImageList>
            </div>
        </section>
    );
}
