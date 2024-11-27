import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function ClassPromotion() {
    const [close, setClose] = useState(false);

    function handleClose() {
        setClose(true);
    }

    return (
        <div hidden={close} className="fixed inset-x-0 top-0 pt-2 sm:pt-5">
            <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-[#b5c99a] p-2 shadow-lg sm:p-3">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-[#97a97c] p-2">
                                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 font-medium text-white flex flex-col">
                                <span className="inline text-sm sm:text-base">
                                    Limited time offer !! 3 Personal Training sessions for $99.
                                </span>
                                <span className="inline italic text-xs sm:text-sm">** terms and conditions apply</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href="https://forms.gle/JQT8R957m3KjUZj26"
                                target="_blank"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#4f772d] shadow-sm"
                                rel="noreferrer"
                            >
                                Book Now
                            </a>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="-mr-1 flex rounded-md p-2 hover:bg-[#97a97c] focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
