import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Home from './pages/Home';
import About from './pages/About';
import Yoga from './pages/Yoga';
import PersonalTraining from './pages/PersonalTraining';
import YogaRetreat from './pages/YogaRetreat';
import Resources from './pages/Resources';
import ScheduleCall from './pages/ScheduleCall';
import ContactForm from './pages/ContactForm';
import ClassSchedule from './pages/ClassSchedule';
import BlogFriendship from './pages/BlogFriendship';
import BlogStretching from './pages/BlogStretching';
import BlogMenopause from './pages/BlogMenopause';
import BlogNoosa from './pages/BlogNoosa';
import MembersPage from './pages/MembersPage';
import RecipesPage from './pages/RecipesPage';

export default function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/classes">
                        <Route path="yoga" element={<Yoga />} />
                        <Route path="personal-training" element={<PersonalTraining />} />
                        <Route path="yoga-retreat" element={<YogaRetreat />} />
                        <Route path="class-schedule" element={<ClassSchedule />} />
                    </Route>

                    <Route path="/resources">
                        <Route path="" element={<Resources />} />
                        <Route path="blog-friendship" element={<BlogFriendship />} />
                        <Route path="blog-stretching" element={<BlogStretching />} />
                        <Route path="blog-menopause" element={<BlogMenopause />} />
                        <Route path="blog-noosa" element={<BlogNoosa />} />
                        <Route path="members-only" element={<MembersPage />} />
                        <Route path="members-only/recipes" element={<RecipesPage />} />
                    </Route>

                    <Route path="/contact">
                        <Route path="contact-form" element={<ContactForm />} />
                        <Route path="schedule-call" element={<ScheduleCall />} />
                    </Route>
                </Routes>
            </Router>
            <Newsletter />
            <Footer />
        </>
    );
}
