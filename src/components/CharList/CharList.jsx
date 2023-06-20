import React, {useEffect, useState} from 'react';
import PokemonService from "../../services/PokemonService";
import CharItem from "../CharItem/CharItem";

const CharList = () => {
    const [chars, setChars] = useState([])
    const [fetching, setFetching] = useState(true)
    const [charsOffset, setCharsOffset] = useState(0)
    const Pokemon = new PokemonService()

    const handleScroll = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
            setFetching(true)
        }
    };

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            Pokemon.getCharacters(charsOffset)
                .then(response => {
                    setChars([...chars, ...response])
                    setCharsOffset((prevCharsOffset) => (prevCharsOffset + 12))
                })
                .finally(() => setFetching(false))
        }

    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const renderedChars = chars.map((char) => (
        <CharItem key={char.id} char={char}/>
    ))

    return (
        <div class="lg:w-2/3 bg-background">
            <div className="grid grid-cols-2 place-items-center gap-4 pt-2 md:grid-cols-3" onScroll={handleScroll}>
                {renderedChars}
            </div>
            <div className="py-5">
                <img src="/assets/pokeballLoader.png" alt="Pokeball Spinner" className="w-12 aspect-square animate-spin mx-auto"/>
            </div>
        </div>
    );
};

export default CharList;