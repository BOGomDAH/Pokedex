import React from 'react';

const AppHeader = () => {
    return (
        <header className="md:flex md:items-center md:gap-4 lg:gap-5 lg:justify-start sticky top-0 z-50 bg-background p-6 border-b-[1px] border-black">
            <h1 className="text-base font-light md:text-2xl md:font-medium">
                Know everything about your
            </h1>
            <a className="rounded-full bg-main-red border border-solid border-black px-6 py-2 text-white text-base md:font-normal md:px-4">
                Pokemon!
            </a>
            <div className="relative group">
                <input autoComplete="off"
                       name="searchbar"
                       id="searchbar"
                       placeholder="Write your pokemon's name..."
                       className="text-base bg-white w-full mt-6 px-12 py-3 rounded-full border border-solid border-black focus:outline-none focus:ring-main-red focus:ring-1 focus:border-main-red md:w-60 md:mt-0 md:py-2 lg:w-96"
                />
                </div>
        </header>
    );
};

export default AppHeader;