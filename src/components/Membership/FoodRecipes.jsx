import recipeOne from '../img/recipe-7.jpg';
import recipeTwo from '../img/recipe-8.jpg';
import recipeThree from '../img/recipe-10.jpg';
import ModalImage from 'react-modal-image';

function FoodRecipes() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- food recipes -</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-10 pb-6">
                    <ModalImage
                        small={recipeOne}
                        large={recipeOne}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeTwo}
                        large={recipeTwo}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeThree}
                        large={recipeThree}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                </div>
                <div className="flex justify-center pt-12">
                    <button className="rounded-full bg-[#c8ddab] hover:opacity-90 opacity-70">
                        <h2 className="text-lg font-serif text-[#4C683F] py-4 px-8 sm:px-16">
                            <a href="/resources/members-only/recipes" rel="noreferrer">
                                view all recipes
                            </a>
                        </h2>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FoodRecipes;
