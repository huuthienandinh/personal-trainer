import EnquirySection from '../components/Classes/EnquirySection';
import PtBanner from '../components/Classes/PersonalTraining/PtBanner';
import PtPrivateClasses from '../components/Classes/PersonalTraining/PtPrivateClasses';
import ClassesChoice from './../components/Classes/ClassesChoice';
import PtGroupClasses from './../components/Classes/PersonalTraining/PtGroupClasses';

function PersonalTraining() {
    return (
        <>
            <PtBanner />
            <ClassesChoice />
            <PtGroupClasses />
            <PtPrivateClasses />
            <EnquirySection form="https://forms.gle/JQT8R957m3KjUZj26" />
        </>
    );
}

export default PersonalTraining;
