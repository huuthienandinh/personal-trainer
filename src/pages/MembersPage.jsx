import FoodRecipes from '../components/Membership/FoodRecipes';
import MembershipTitle from '../components/Membership/MembershipTitle';
import WorkoutRoutines from '../components/Membership/WorkoutRoutines';
import MembershipBanner from './../components/Membership/MembershipBanner';

function MembersPage() {
    return (
        <>
            <MembershipBanner />
            <MembershipTitle />
            <FoodRecipes />
            <WorkoutRoutines />
        </>
    );
}

export default MembersPage;
