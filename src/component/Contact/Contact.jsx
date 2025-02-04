import React from 'react'

const Contact = () => {
    return (
        <div className='bg-[#127398] bg-cover bg-center lg:p-20 p-5'
        style={{
            backgroundImage: "url('/images/darkblue.svg')",
            backgroundSize: "cover",
            backgroundPosition: "start"
        }}
    >
            <h2 className="text-3xl font-bold text-center mb-2 text-white">Contact Us</h2>
            <p className="text-white text-center text-lg">We look forward to hearing from you!</p>
            <div className='flex lg:flex-row flex-col lg:gap-20 gap-3  items-center justify-center p-10 rounded-lg bg-transparent'>
                <div>
                    <img src="/images/contact2.png" alt="Group Cards" height={400} width={400} />
                </div>
                <div className="max-w-lg w-[380px] mx-auto p-6 bg-lightBlue rounded-lg">

                    <form className="space-y-4 px-5 py-10">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Row 2 */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Row 3 */}
                        <div>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#FFC730] text-white p-2 rounded-md  transition ">
                            Send Message
                        </button>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Contact