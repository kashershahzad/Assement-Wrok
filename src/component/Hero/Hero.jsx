'use client'
import {useState} from 'react';
import Heroleft from './Heroleft';

const Hero = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className='flex flex-col justify-center gap-20 mt-10 lg:flex-row'>
            <Heroleft />
            <div className='border-4 border-white bg-[url("/images/Background.png")] bg-cover bg-center p-4 rounded-xl'>
                <div className='bg-white px-10 py-10'>
                    <p className='font-bold text-[#00ABE1] text-xl text-center'>Welcome Back</p>
                    <form className="space-y-4 mt-5 flex flex-col">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="lg:w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-60"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="lg:w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-60"
                        />
                        <div className="flex justify-between items-center text-sm">
                            <a href="#" className="text-lightBlue hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="w-full bg-lightBlue text-white py-2 rounded-lg transition">
                            Log In
                        </button>
                        <p className="text-center text-sm text-[#127398]">
                            Don't have an account?{" "}
                            <a href="#" className="text-[#00ABE1] font-semibold hover:underline">
                                Create One
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
