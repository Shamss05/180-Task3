import React from 'react';
import headerImage from '../assets/Dev-Hub-af7280d9.jpg';

function Header() {
    return (
        <header>
            <div
                className="bg-gradient-to-r from-[#700608] to-transparent bg-cover bg-center bg-no-repeat h-[500px] flex items-center pl-10"
                style={{ backgroundImage: `linear-gradient(to right, rgba(112, 6, 8, 1), rgba(255, 255, 255, 0)), url(${headerImage})` }}
            >
                <div className="text-white flex flex-col space-y-10 p-6 pl-56">
                    <p className="text-6xl font-bold border-4 border-white rounded-[15px] px-4 py-2 inline-block max-w-fit self-start">
                        DevHub'25
                    </p>
                    <p className="text-lg font-semibold self-start">
                        THE DEVHUB'25 EVENT IS UNDER THE WAY!
                    </p>
                </div>
            </div>
        </header>
    );
}

export default Header;
