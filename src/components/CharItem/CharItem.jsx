import React from 'react';
import CharTypes from "../CharTypes/CharTypes";

const CharItem = ({char, onChangeChar}) => {
    return (
        <div className="group flex flex-col justify-center items-center hover:cursor-pointer" onClick={onChangeChar}>
            <div className="border border-solid border-black rounded-3xl bg-white my-6 relative lg:group-hover:border-r-[3px] lg:group-hover:border-b-[3px] lg:group-hover:border-black lg:group-hover:rounded-3xl transition-all ease-linear">
                <img src={char.thumbnail} alt=""/>
                <span className="absolute top-[-12px] right-0 bg-white border border-solid border-black rounded-full py-1 px-4 text-sm lg:group-hover:border-r-[3px] lg:group-hover:border-b-2 lg:group-hover:border-black lg:group-hover:rounded-3xl transition-all ease-linear">
                        #{char.id}
                </span>
            </div>
            <div className="flex gap-1 items-center my-6 h-2 lg:gap-2">
                <h1 className="capitalize text-base md:text-xl lg:text-2xl">
                    {char.name}
                </h1>
                <div className="flex flex-col gap-1 text-sm lg:text-xl">
                    <CharTypes types={char.types}/>
                </div>
            </div>
        </div>
    );
};

export default CharItem;