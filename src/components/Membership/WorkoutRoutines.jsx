import workoutOne from '../img/workout-1.jpg';
import workoutTwo from '../img/workout-2.jpg';
import workoutThree from '../img/workout-3.jpg';
import workoutFour from '../img/workout-4.jpg';
import ModalImage from 'react-modal-image';

function WorkoutRoutines() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- workout routines -</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mx-auto px-10 pb-12">
                    <ModalImage
                        small={workoutOne}
                        large={workoutOne}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={workoutThree}
                        large={workoutThree}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={workoutTwo}
                        large={workoutTwo}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={workoutFour}
                        large={workoutFour}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                </div>
            </div>
        </section>
    );
}

export default WorkoutRoutines;
