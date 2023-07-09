import React, {useEffect, useState} from 'react';
import {ArrowCircleLeft2} from "iconsax-react";
import CharInfoTypes from "../CharInfoTypes/CharInfoTypes";
import usePokemonService from "../../services/PokemonService";
import setContent from "../../utils/setContent";
import './CharInfo.css'


const CharInfo = ({charId, openAnimationRef, handleDetailAnimation}) => {
    const [char, setChar] = useState(null);
    const {process, setProcess, getCharacter, clearError} = usePokemonService()

    const onCharLoaded = (char) => {
        setChar(char)
        setProcess('confirmed')
    }

    const updateChar = () => {
        if (!charId) {
            return;
        }

        clearError();

        getCharacter(charId)
            .then(onCharLoaded)
    }

    useEffect(() => {
        updateChar()
    }, [charId])
    
    
    return (
        <div className="lg:fixed lg:top-[95px] lg:right-0 lg:min-w-[400px] lg:mr-10 detail__closed" ref={openAnimationRef}>
            <button className="pl-3 pt-2 text-base hover:text-main-red hover:stroke-main-red lg:hidden" onClick={handleDetailAnimation}>
                <span className="flex items-center transition"><ArrowCircleLeft2 size="24" className="pr-0.5"/>Go back</span>
            </button>
            <div className="text-center font-medium">
                <div className="h-[95.5vh] py-4 overflow-y-auto scrollbar-hide flex flex-col justify-start items-center m-2 border border-solid border-black rounded-3xl lg:h-[87vh]">
                    {setContent(process, View, char)}
                </div>
            </div>
        </div>
    );
};

const View = ({data}) => {
    return (
        <>
            <div className="border border-solid border-black rounded-3xl bg-white my-4 relative">
                <img src={data.thumbnail} alt={data.name} />
                <span className="absolute top-[-12px] right-0 bg-white border border-solid border-black rounded-full py-1 px-4 text-sm">{data.id < 100 ? ('#0' + data.id).slice(-5) : ('#' + data.id).slice(-5)}</span>
            </div>
            <div className="gap-1 items-center h-2">
                <h1 className="capitalize text-xl my-2 md:text-2xl">{data.name}</h1>
                <CharInfoTypes types={data.types}/>
                <div className="p-6 my-6 bg-white border border-solid border-black rounded-3xl grid place-items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="rounded-full border border-black px-3 py-1 w-[8ch] bg-purple-200 mx-auto">{data.height}</span>
                        <span className="rounded-full border border-black px-3 py-1 w-[8ch] bg-purple-200 mx-auto">{data.weight}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="rounded-full border border-black px-3 py-1 w-[8ch] mx-auto">Height</span>
                        <span className="rounded-full border border-black px-3 py-1 w-[8ch] mx-auto">Weight</span>
                    </div>
                </div>
                <div className="p-6 bg-white border border-solid border-black rounded-3xl grid place-items-center gap-4 my-6">
                    <h3>Abilities</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {data.abilities.map(ability => (
                            <p className="px-4 py-1 bg-[#EEFFE3] border border-solid border-black rounded-full capitalize">{ability}</p>
                        ))}
                    </div>
                </div>
                <div className="px-6 py-4 my-6 bg-white border border-solid border-black rounded-3xl">
                    <h3>Stats</h3>
                    <ul>
                        {data.stats.map(stat => (
                            <li className="flex justify-between items-center gap-8 my-2 ">
                                <span className="rounded-full border border-black px-4 py-2 w-[12ch] capitalize md:text-2xl">{stat.name}</span>
                                <span className="rounded-full border border-black px-4 py-2 w-[6ch] bg-purple-200 mx-auto">{stat.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}





export default CharInfo;