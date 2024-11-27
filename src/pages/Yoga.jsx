import YogaGroupClasses from '../components/Classes/Yoga/YogaGroupClasses';
import ClassesChoice from './../components/Classes/ClassesChoice';
import YogaBanner from '../components/Classes/Yoga/YogaBanner';
import YogaPrivateClasses from '../components/Classes/Yoga/YogaPrivateClasses';
import EnquirySection from '../components/Classes/EnquirySection';

function Yoga() {
    return (
        <>
            <YogaBanner />
            <ClassesChoice />
            <YogaGroupClasses />
            <YogaPrivateClasses />
            <EnquirySection form="https://forms.gle/i2xrbNA4MNWy5mFS6" />
        </>
    );
}

export default Yoga;
