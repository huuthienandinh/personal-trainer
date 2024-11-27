import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { XIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

export default function PopupDialog() {
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleChange(value) {
        setError('');
        setCode(value);
    }

    function handleSubmit() {
        if (code === 'george') {
            setOpen(false);
            navigate('members-only');
        } else {
            setError('Invalid code. Please try again.');
        }
    }

    return (
        <div className="flex justify-center py-12">
            <button className="rounded-full bg-[#c8ddab] hover:opacity-90 opacity-70" onClick={handleClickOpen}>
                <h2 className="text-sm sm:text-lg font-serif text-[#4C683F] p-4 sm:px-8">unlock more exclusive contents</h2>
            </button>
            <Dialog open={open} onClose={handleClose}>
                <div className="flex justify-end pt-4 pr-4">
                    <XIcon className="w-5 h-5 cursor-pointer text-[#4C683F]" onClick={handleClose} />
                </div>
                <h2 className="text-center text-2xl md:text-3xl text-[#4C683F] font-serif pb-4 pt-8">Are you our member?</h2>
                <div className="text-center text-[#4C683F] opacity-50 text-sm md:text-base px-12 sm:px-24">
                    Enter your code to get more exclusive contents.
                </div>
                <div className="flex justify-center flex-col">
                    <input
                        type="text"
                        id="code"
                        name="code"
                        placeholder="Enter your code"
                        value={code}
                        onInput={(e) => handleChange(e.target.value)}
                        className={`${
                            error !== ''
                                ? `focus:ring-red-600 focus:border-red-600 border-red-500 text-red-500`
                                : `focus:ring-[#4C683F] focus:border-[#4C683F] border-[#c8ddab] text-[#4C683F]`
                        } mx-16 sm:mx-32 mt-8 text-center shadow-sm placeholder:text-center placeholder:italic placeholder:text-sm sm:placeholder:text-base placeholder-[#4C683F] placeholder-opacity-70 rounded-md`}
                    />
                    <div className="text-red-500 text-center mt-2 mb-8">{error}</div>
                </div>
                <div className="flex justify-center pb-12">
                    <button className="rounded-full bg-[#c8ddab] hover:opacity-90 opacity-70 mr-4" onClick={handleSubmit}>
                        <h2 className="text-xs sm:text-sm font-serif text-[#4C683F] py-1 px-8">submit</h2>
                    </button>
                </div>
            </Dialog>
        </div>
    );
}
