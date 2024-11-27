import ModalImage from 'react-modal-image';
import recipeOne from '../../img/recipe-1.jpg';
import recipeTwo from '../../img/recipe-2.jpg';
import recipeThree from '../../img/recipe-3.jpg';
import recipeFour from '../../img/recipe-4.jpg';
import recipeFive from '../../img/recipe-5.jpg';
import recipeSix from '../../img/recipe-6.jpg';
import recipeSeven from '../../img/recipe-7.jpg';
import recipeEight from '../../img/recipe-8.jpg';
import recipeNine from '../../img/recipe-9.jpg';
import recipeTen from '../../img/recipe-10.jpg';

function AllRecipes() {
    return (
        <section className="py-12 border-b-2 border-gray-100 overflow-hidden md:py-15 font-serif">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-[#4C683F] flex items-center justify-center">
                    <h2 className="text-2xl md:text-3xl mr-2 mb-10">- view and download your favourite recipes -</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto px-10 pb-12">
                    <ModalImage
                        small={recipeThree}
                        large={recipeThree}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeOne}
                        large={recipeOne}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeFour}
                        large={recipeFour}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeFive}
                        large={recipeFive}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <div className="col-span-2">
                        <ModalImage
                            small={recipeSix}
                            large={recipeSix}
                            loading="lazy"
                            className="border-2 border-[#588157] border-opacity-60"
                        />
                    </div>
                    <ModalImage
                        small={recipeSeven}
                        large={recipeSeven}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeEight}
                        large={recipeEight}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeNine}
                        large={recipeNine}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeTen}
                        large={recipeTen}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                    <ModalImage
                        small={recipeTwo}
                        large={recipeTwo}
                        loading="lazy"
                        className="border-2 border-[#588157] border-opacity-60"
                    />
                </div>
            </div>
        </section>
    );
}

export default AllRecipes;
