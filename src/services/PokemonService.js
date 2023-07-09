import {useHttp} from "../hooks/http.hook";

const usePokemonService = () => {
    const _apiBase = 'https://pokeapi.co/api/v2'
    const _limit = 21

    const {request, process, setProcess, clearError} = useHttp()

     const getCharacters = async (offset = 0) =>{
        const res =  await request(`${_apiBase}/pokemon?limit=${_limit}&offset=${offset}`)

        const urls = res.results.map(async(item) => {
            const response = await fetch(item.url)
            const parsedResponse = await response.json()
            return _transformCharacter(parsedResponse)
        })

        const result = await Promise.all(urls)
        return result
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}/pokemon/${id}`)
        return _transformCharacterDetails(res)
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            thumbnail: char.sprites.front_default,
            types: char.types.map(type => type.type.name),
        }
    }

    const _transformCharacterDetails = (char) => {
        return {
            id: char.id,
            name: char.name,
            thumbnail: char.sprites.front_default,
            types: char.types.map(type => type.type.name),
            height: char.height * 10 + 'cm',
            weight: char.weight / 10 + 'kg',
            abilities: char.abilities.map(ability => ability.ability.name),
            stats: char.stats.map(stat => ({
                name: stat.stat.name.includes("special") ? "s-" + stat.stat.name.split("-")[1] : stat.stat.name,
                base_stat: stat.base_stat
            }))
        }
    }

    return {
        clearError,
        process,
        setProcess,
        getCharacters,
        getCharacter,
    };
}

export default usePokemonService;