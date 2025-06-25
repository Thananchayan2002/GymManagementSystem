import React, { useRef } from 'react';

const Contact = () => {
    const name = useRef('');
    const phone = useRef('');
    const description = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneValue = phone.current.value.trim();

        if (phoneValue.length !== 10) {
            alert("Phone number must be exactly 10 digits.");
            return;
        } else if (!/^\d{10}$/.test(phoneValue)) {
            alert("Phone number must contain only digits.");
            return;
        } else if (!phoneValue.startsWith("0")) {
            alert("Phone number must start with 0.");
            return;
        }

        console.log(name.current.value + "  " + phone.current.value + "  " + description.current.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
                        <input 
                            type="text"
                            ref={name}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Phone Number</label>
                        <input 
                            type="text"
                            ref={phone}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            inputMode="numeric"
                            pattern="\d{10}"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
                        <textarea
                            ref={description}
                            rows="5"
                            placeholder="Enter your message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <input
                            type="submit"
                            value="Submit"
                            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
