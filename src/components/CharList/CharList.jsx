import React, {useEffect, useMemo, useState} from 'react';
import CharItem from "../CharItem/CharItem";
import usePokemonService from "../../services/PokemonService";
import Spinner from "../../spinner/Spinner";

const CharList = ({onChangeChar}) => {
    const [chars, setChars] = useState([])
    const [newCharsLoading, setNewCharsLoading] = useState(false)
    const [charsOffset, setCharsOffset] = useState(0)
    const [charsEnded, setCharsEnded] = useState(false);
    const [initialRequest, setInitialRequest] = useState(true);
    const [fetching, setFetching] = useState(true);

    const {getCharacters, process, setProcess} = usePokemonService();

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        if (fetching && !charsEnded) {
            onRequest(charsOffset, initialRequest);
            setInitialRequest(false);
        }
    }, [fetching]);

    const handleScroll = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
            setFetching(true)
        }
    };

    const onRequest = (offset, initial) => {
        initial ? setNewCharsLoading(false) : setNewCharsLoading(true)
        console.log(newCharsLoading)
        getCharacters(charsOffset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
            .finally(() => setFetching(false))
    }

    const onCharListLoaded = async (newChars) => {
        let ended = false
        if (newChars.length < 21) {
            ended = true
        }
        setChars([...chars, ...newChars])
        setNewCharsLoading(false)
        setCharsOffset(charsOffset + 21)
        setCharsEnded(ended)
    }

    const renderChars = (arr) => {
        const renderedChars = arr.map((char) => (
            <CharItem key={char.id} char={char} onChangeChar={() => onChangeChar(char.id)}/>
        ))

        return (
            <div className="grid grid-cols-2 place-items-center gap-4 pt-2 md:grid-cols-3" >
                {renderedChars}
            </div>
        );
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderChars(chars), newCharsLoading);
    }, [process])


    return (
        <div className="lg:w-2/3 w-full bg-background" onScroll={handleScroll}>
            {elements}
        </div>
    );
};

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading
                ? <>
                    <Component/>
                    <Spinner/>
                  </>
                : <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state');
    }
}

const ErrorMessage = () => {
    return (
        <>
            <h2 className="mt-6 mb-4 text-3xl text-center text-red-600">Oops! Something went wrong.</h2>
            <p className="text-center text-red-700 text-xl">Pokemons not found.</p>
        </>
    )
}

export default CharList;