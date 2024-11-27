import logo from './img/logo.jpeg';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { BiDumbbell, BiPhoneCall } from 'react-icons/bi';
import { GiMeditation } from 'react-icons/gi';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { AiOutlineForm } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsCalendarDate } from 'react-icons/bs';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const smallNav = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Classes - Yoga',
        href: '/classes/yoga',
    },
    {
        name: 'Classes - Personal Training',
        href: '/classes/personal-training',
    },
    {
        name: 'Classes - Yoga Retreat',
        href: '/classes/yoga-retreat',
    },
    {
        name: 'Classes - Schedule',
        href: '/classes/class-schedule',
    },
    {
        name: 'Contact Form',
        href: '/contact/contact-form',
    },
    {
        name: 'Schedule Call',
        href: '/contact/schedule-call',
    },
    {
        name: 'Resources',
        href: '/resources',
    },
];

const classes = [
    {
        name: 'Yoga',
        href: '/classes/yoga',
        icon: GiMeditation,
    },
    {
        name: 'Personal Training',
        href: '/classes/personal-training',
        icon: BiDumbbell,
    },
    {
        name: 'Yoga Retreat',
        href: '/classes/yoga-retreat',
        icon: FaUmbrellaBeach,
    },
    {
        name: 'Class Schedule',
        href: '/classes/class-schedule',
        icon: BsCalendarDate,
    },
];

const contact = [
    {
        name: 'Contact Form',
        href: '/contact/contact-form',
        icon: AiOutlineForm,
    },
    {
        name: 'Schedule Call',
        href: '/contact/schedule-call',
        icon: BiPhoneCall,
    },
];

const socialAccount = [
    { name: 'Facebook', href: 'https://www.facebook.com/Nirvanapt', icon: BsFacebook },
    { name: 'Instagram', href: 'https://www.instagram.com/nirvanapersonaltraining', icon: BsInstagram },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navbar() {
    return (
        <Popover className="bg-white font-serif">
            <div className="flex justify-between items-center py-2 sm:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1 pl-5">
                    <a href="/">
                        <span className="sr-only">Nirvana Mcbeath</span>
                        <img className="h-20 w-20 " src={logo} alt="" />
                    </a>
                </div>
                <div className="-mr-2 -my-2 sm:hidden pr-5">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#97a97c] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden sm:flex space-x-10 text-lg font-medium text-[#97a97c] ">
                    <a href="/" className="hover:text-[#4C683F] hover:scale-125 md:pr-4">
                        Home
                    </a>
                    <a href="/about" className="hover:text-[#4C683F] hover:scale-125 md:pr-4">
                        About
                    </a>
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open ? 'text-[#4C683F]' : 'text-[#97a97c]',
                                        'group bg-white rounded-md inline-flex items-center md:pr-4 hover:text-[#4C683F] hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                                    )}
                                >
                                    <span>Classes</span>
                                    <ChevronDownIcon
                                        className={classNames(
                                            open ? 'text-[#4C683F]' : 'text-[#97a97c]',
                                            'ml-2 h-5 w-5 group-hover:text-[#4C683F]'
                                        )}
                                        aria-hidden="true"
                                    />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0">
                                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                {classes.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 p-3 flex items-start rounded-lg text-[#97a97c] hover:bg-lime-50 hover:text-[#4C683F]"
                                                    >
                                                        <item.icon className="flex-shrink-0 h-6 w-6 " aria-hidden="true" />
                                                        <div className="ml-4">
                                                            <p>{item.name}</p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open ? 'text-[#4C683F]' : 'text-[#97a97c]',
                                        'group bg-white rounded-md inline-flex items-center md:pr-4 hover:text-[#4C683F] hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
                                    )}
                                >
                                    <span>Contact</span>
                                    <ChevronDownIcon
                                        className={classNames(
                                            open ? 'text-[#4C683F]' : 'text-[#97a97c]',
                                            'ml-2 h-5 w-5 group-hover:text-[#4C683F]'
                                        )}
                                        aria-hidden="true"
                                    />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0">
                                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                {contact.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 p-3 flex items-start rounded-lg text-[#97a97c] hover:bg-lime-50 hover:text-[#4C683F]"
                                                    >
                                                        <item.icon className="flex-shrink-0 h-6 w-6 " aria-hidden="true" />
                                                        <div className="ml-4">
                                                            <p>{item.name}</p>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <a href="/resources" className="hover:text-[#4C683F] hover:scale-125 md:pr-4">
                        Resources
                    </a>
                </Popover.Group>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right sm:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="-mr-2 flex justify-end">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-[#97a97c] hover:text-[#4C683F] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {smallNav.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md text-[#97a97c] hover:bg-lime-50 hover:text-[#4C683F]"
                                        >
                                            <span className="ml-3 text-base font-medium ">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="px-5 py-5 bg-gray-50 flex justify-end">
                            {socialAccount.map((item) => (
                                <div key={item.name} className="p-2">
                                    <a
                                        href={item.href}
                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-[#97a97c] hover:text-[#4C683F]"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <item.icon className="flex-shrink-0 h-6 w-6 " aria-hidden="true" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}

export default Navbar;
