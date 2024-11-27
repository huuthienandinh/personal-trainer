import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';
import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

export default function ContactFormInfo() {
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [submitted, setSubmitted] = useState(false);
    const [open, setOpen] = useState(true);

    const FORM_ENDPOINT = 'https://public.herotofu.com/v1/92843070-4235-11ed-9b17-6fdf7f94f506';

    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }, 100);
    };

    return (
        <div className="font-serif ">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="relative bg-white border-2 border-[#c8ddab] border-opacity-40">
                    <h2 className="sr-only">Contact us</h2>
                    {/* Google Map frame */}
                    <div className="h-[250px] sm:h-[400px] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.675258880028!2d153.0119561150557!3d-27.41705888291302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9157800ef615c5%3A0x656b1a7790ad9bc4!2sPowerhouse%204053!5e0!3m2!1sen!2sau!4v1653020562656!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Contact information */}
                        <div className="text-[#4C683F] bg-opacity-40 relative overflow-hidden py-10 px-6 bg-[#c8ddab] sm:px-10 xl:p-12">
                            <h3 className="text-center text-2xl font-medium">- contact information -</h3>
                            <dl className="mt-10 space-y-6 opacity-80">
                                <dt>
                                    <span className="sr-only">Indoor Location</span>
                                </dt>
                                <dd className="flex items-center">
                                    <FiMapPin className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />
                                    <div className="flex flex-col">
                                        <span className="ml-3 text-sm sm:text-lg">Indoor Location</span>
                                        <a
                                            href="https://goo.gl/maps/MjyWedco6ma7tqww6"
                                            target="_blank"
                                            className="ml-3 text-sm opacity-60"
                                            rel="noreferrer"
                                        >
                                            <div>Powerhouse Gym 4053</div>
                                            <div>23 Wolverhampton St, Stafford QLD 4053</div>
                                        </a>
                                    </div>
                                </dd>
                                <dt>
                                    <span className="sr-only">Outdoor Location</span>
                                </dt>
                                <dd className="flex items-center">
                                    <FiMapPin className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />
                                    <div className="flex flex-col">
                                        <span className="ml-3 text-sm sm:text-lg">Outdoor Location</span>
                                        <a
                                            href="https://goo.gl/maps/q3RmHgnUWbk1G32k8"
                                            target="_blank"
                                            className="ml-3 text-xs sm:text-sm opacity-60"
                                            rel="noreferrer"
                                        >
                                            Kedron Brook
                                        </a>
                                    </div>
                                </dd>
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd className="flex items-center">
                                    <HiOutlineMail className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />
                                    <div className="flex flex-col">
                                        <span className="ml-3 text-sm sm:text-lg">Email</span>
                                        <a
                                            href="mailto:contact@nirvanaptyoga.com.au"
                                            target="_blank"
                                            className="ml-3 text-xs sm:text-sm opacity-60"
                                            rel="noreferrer"
                                        >
                                            hello@nirvanaptyoga.com.au
                                        </a>
                                    </div>
                                </dd>
                                <dt>
                                    <span className="sr-only">Facebook</span>
                                </dt>
                                <dd className="flex items-center">
                                    <BsFacebook className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />
                                    <div className="flex flex-col">
                                        <span className="ml-3 text-sm sm:text-lg">Facebook</span>
                                        <a
                                            href="https://www.facebook.com/Nirvanapt"
                                            target="_blank"
                                            className="ml-3 text-xs sm:text-sm opacity-60"
                                            rel="noreferrer"
                                        >
                                            Nirvana Personal Training
                                        </a>
                                    </div>
                                </dd>
                                <dt>
                                    <span className="sr-only">Instagram</span>
                                </dt>
                                <dd className="flex items-center">
                                    <BsInstagram className="flex-shrink-0 w-4 h-4 sm:w-6 sm:h-6" aria-hidden="true" />
                                    <div className="flex flex-col">
                                        <span className="ml-3 text-sm sm:text-lg">Instagram</span>
                                        <a
                                            href="https://www.instagram.com/nirvanapersonaltraining"
                                            target="_blank"
                                            className="ml-3 text-xs sm:text-sm opacity-60"
                                            rel="noreferrer"
                                        >
                                            @nirvanapersonaltraining
                                        </a>
                                    </div>
                                </dd>
                            </dl>
                        </div>

                        {/* Contact form */}
                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <div className="text-center text-[#4C683F] flex items-center justify-center">
                                <h2 className="text-2xl md:text-3xl mr-2 ">- contact us -</h2>
                            </div>
                            <form
                                action={FORM_ENDPOINT}
                                onSubmit={handleSubmit}
                                method="POST"
                                target="_blank"
                                className="mt-6 grid grid-cols-1 gap-y-6 sm:gap-x-8"
                            >
                                {submitted && (
                                    <Collapse in={open}>
                                        <Alert
                                            action={
                                                <IconButton
                                                    aria-label="close"
                                                    color="inherit"
                                                    size="small"
                                                    onClick={() => {
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <XIcon className="h-5 w-5" />
                                                </IconButton>
                                            }
                                            sx={{ mb: 2 }}
                                        >
                                            <p className="font-serif text-sm sm:text-base text-[#4C683F] italic">
                                                Thank you! We will be in touch soon.
                                            </p>
                                        </Alert>
                                    </Collapse>
                                )}
                                <div className="mt-1">
                                    <input
                                        value={name}
                                        onInput={(e) => setName(e.target.value)}
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        autoComplete="name"
                                        required
                                        className="py-3 px-4 block w-full shadow-sm placeholder:text-sm sm:placeholder:text-base placeholder-[#4C683F] placeholder-opacity-70 text-[#4C683F] focus:ring-[#4C683F] focus:border-[#4C683F] border-[#c8ddab] rounded-md"
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                        value={email}
                                        onInput={(e) => setEmail(e.target.value)}
                                        name="email"
                                        placeholder="Enter your email address"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="py-3 px-4 block w-full shadow-sm placeholder:text-sm sm:placeholder:text-base placeholder-[#4C683F] placeholder-opacity-70 text-[#4C683F] focus:ring-[#4C683F] focus:border-[#4C683F] border-[#c8ddab] rounded-md"
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                        value={phone}
                                        onInput={(e) => setPhone(e.target.value)}
                                        type="text"
                                        name="phone"
                                        placeholder="Enter your phone number (optional)"
                                        id="phone"
                                        autoComplete="tel"
                                        className="py-3 px-4 block w-full shadow-sm placeholder:text-sm sm:placeholder:text-base placeholder-[#4C683F] placeholder-opacity-70 text-[#4C683F] focus:ring-[#4C683F] focus:border-[#4C683F] border-[#c8ddab] rounded-md"
                                    />
                                </div>
                                <div className="mt-1">
                                    <textarea
                                        value={message}
                                        onInput={(e) => setMessage(e.target.value)}
                                        name="message"
                                        placeholder="Enter a message"
                                        rows={4}
                                        required
                                        className="py-3 px-4 block w-full shadow-sm placeholder:text-sm sm:placeholder:text-base placeholder-[#4C683F] placeholder-opacity-70 text-[#4C683F] focus:ring-[#4C683F] focus:border-[#4C683F] border-[#c8ddab] rounded-md"
                                    />
                                </div>
                                <div className="sm:flex sm:justify-end">
                                    <button
                                        type="submit"
                                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-[#4C683F] bg-[#c8ddab] hover:opacity-90 opacity-70 sm:w-auto"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
