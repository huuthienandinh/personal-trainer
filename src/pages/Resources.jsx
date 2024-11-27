import ResourcesBanner from '../components/Resources/ResourcesBanner';
import GalleryImages from '../components/Resources/GalleryImages';
import InstagramImages from './../components/Resources/InstagramImages';
import Videos from '../components/Resources/Videos';
import PopupDialog from '../components/Resources/PopupDialog';
import Blogposts from '../components/Resources/Blogposts';

function Resources() {
    return (
        <>
            <ResourcesBanner />
            <GalleryImages />
            <InstagramImages />
            <Videos />
            <Blogposts />
            <PopupDialog />
        </>
    );
}

export default Resources;
