import { BsFacebook, BsInstagram } from 'react-icons/bs';

function Footer() {
    return (
        <div className="font-serif flex flex-wrap items-center justify-between p-5">
            <div className="text-[#97a97c] text-base">&copy; 2022 Nirvana Mcbeath. All rights reserved.</div>
            <div className="hidden sm:flex text-[#97a97c] ">
                <a className="mr-4 hover:text-[#4C683F]" href="https://www.facebook.com/Nirvanapt" target="_blank" rel="noreferrer">
                    <BsFacebook style={{ height: 20, width: 20 }} />
                </a>
                <a
                    className="mr-2 hover:text-[#4C683F]"
                    href="https://www.instagram.com/nirvanapersonaltraining"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsInstagram style={{ height: 20, width: 20 }} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
