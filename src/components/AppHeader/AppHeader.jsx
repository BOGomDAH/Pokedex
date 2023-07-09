import React, {useState} from 'react';
import {SearchNormal} from "iconsax-react";

const AppHeader = ({onSearchChar}) => {
    const [char, setChar] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if (char !== '') {
            onSearchChar(char.toLowerCase())
        }
    }

    return (
        <header className="md:flex md:items-center md:gap-4 lg:gap-5 lg:justify-start sticky top-0 z-50 bg-background p-6 border-b-[1px] border-black">
            <h1 className="text-base font-light md:text-2xl md:font-medium">
                Know everything about your Pokemon!
            </h1>
            <div className="mt-3 sm:mt-0 group">
                <form className="relative flex" onSubmit={onSubmit}>
                    <SearchNormal className="invisible absolute top-[28%] md:top-2/4 md:translate-y-[-50%] lg:top-2/4 lg:translate-y-[-50%] left-5 group-focus-within:stroke-main-red" size={20}/>
                    <input
                        id="charName"
                        name='charName'
                        type='text'
                        className="text-xs sm:text-base bg-white w-full px-3 py-1 rounded-full border border-solid border-black focus:outline-none focus:ring-main-red focus:ring-1 focus:border-main-red md:w-60 md:mt-0 md:py-2 lg:w-96"
                        placeholder="Write your pokemon's name"
                        onChange={(e) => setChar(e.target.value)}
                    />
                    <button
                        className="rounded-full bg-main-red border border-solid border-black px-6 py-2 text-white text-base md:font-normal ml-3 md:px-4"
                        type="submit"
                    >
                        Search!
                    </button>
                </form>
            </div>
        </header>
    );
};

export default AppHeader;