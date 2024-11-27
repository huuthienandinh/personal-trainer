import PopoularClasses from '../components/Home/PopularClasses';
import HomeBanner from '../components/Home/HomeBanner';
import WelcomeMessage from '../components/Home/WelcomeMessage';
import Sponsors from '../components/Home/Sponsors';
import Testimonials from '../components/Home/Testimonials';
import PhotoSlideshow from '../components/Home/PhotoSlideshow';

function Home() {
    return (
        <>
            <HomeBanner />
            <WelcomeMessage />
            <PopoularClasses />
            <Testimonials />
            <Sponsors />
            <PhotoSlideshow />
            {/* <ClassPromotion /> */}
        </>
    );
}
export default Home;
