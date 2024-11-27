import Classes from '../components/Classes/ClassSchedule/Classes';
import ScheduleBanner from '../components/Classes/ClassSchedule/ScheduleBanner';
import MonthTitle from './../components/Classes/ClassSchedule/MonthTitle';

function ClassSchedule() {
    return (
        <>
            <ScheduleBanner />
            <MonthTitle />
            <Classes />
        </>
    );
}

export default ClassSchedule;
