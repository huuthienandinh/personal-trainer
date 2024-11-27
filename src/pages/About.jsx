import AboutBanner from '../components/About/AboutBanner';
import BusinessStory from '../components/About/BusinessStory';
import NirvanaStory from '../components/About/NirvanaStory';
import Faq from './../components/About/Faq';

function About() {
    return (
        <>
            <AboutBanner />
            <NirvanaStory />
            <BusinessStory />
            <Faq />
        </>
    );
}

export default About;
