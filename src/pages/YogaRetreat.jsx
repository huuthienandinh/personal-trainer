import EnquirySection from '../components/Classes/EnquirySection';
import RetreatChoice from '../components/Classes/YogaRetreat/RetreatChoice';
import RetreatDescription from '../components/Classes/YogaRetreat/RetreatDescription';
import RetreatBanner from './../components/Classes/YogaRetreat/RetreatBanner';

function YogaRetreat() {
    return (
        <>
            <RetreatBanner />
            <RetreatChoice />
            <RetreatDescription />
            <EnquirySection form="https://forms.gle/3jHQxiJ1j1ndyBEr8" />
        </>
    );
}

export default YogaRetreat;
