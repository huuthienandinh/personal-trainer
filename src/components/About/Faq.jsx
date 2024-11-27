import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const faqs = [
    {
        question: 'Where are you located?',
        answer: 'My outdoor studio is on the Kedron Brook at Windsor. For the indoor venue, it is at the Powerhouse 4053 gym at Stafford. For the location address, you may refer to the Contact page. You don’t need to be a member to access the gym as I have got it all covered in the personal training course price.',
    },
    {
        question: 'Where do you teach yoga each week?',
        answer: 'I teach yoga 1:1 at my outdoor studio and at various yoga studios around the area. I will try and update each week where I am teaching so you can jump into a class that suits you. Currently, I teach different group classes at various locations throughout the week on Tuesdays, Wednesdays, Thursdays, Saturdays and Sundays. All studio classes need to be booked through the relevant studio. For more information, you may refer to the Yoga or Class Schedule page.',
    },
    {
        question: 'Do you do individual or group classes?',
        answer: 'There is both individual and group classes. Probably 90% of my client base do 1:1 sessions and the other 10% form their own small groups ranging from 2 to 8 people per group.',
    },
    {
        question: 'How much are the sessions? ',
        answer: 'The session prices start at $50 per half hour. I do tailor weekly packages so it is worthwhile us sitting down together and working out a package that will achieve your goal and fit within your budget.',
    },
    {
        question: 'Can I create my own group?',
        answer: 'Absolutely. This is a great way train, not only is it a great way to catch up with your friends each week, you can get fit together. You don’t all have to be at the sae fitness level. I can vary the program to each individual within the group.',
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}


function Faq() {
    return (
        <div className="border-t-2 border-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 font-serif">
                <div className="max-w-5xl mx-auto divide-y-2 divide-gray-200">
                    <div className="text-center text-[#4C683F] flex items-center justify-center">
                        <h2 className="text-2xl md:text-3xl mr-2">- frequently asked questions -</h2>
                    </div>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg sm:text-xl ">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span className="font-medium text-[#588157]">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? '-rotate-180' : 'rotate-0',
                                                            'h-6 w-6 transform text-[#588157]'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-10 font-sans">
                                            <p className="text-base sm:text-lg text-[#588157] opacity-50">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Faq;
