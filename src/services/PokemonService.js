import {useHttp} from "../hooks/http.hook";

class PokemonService {
    _apiBase = 'https://pokeapi.co/api/v2/pokemon'
    _limit = 12

    request = useHttp()

    async getCharacters(offset = 0){
        const res =  await this.request(`${this._apiBase}?limit=${this._limit}&offset=${offset}`)

        const urls = res.results.map(async(item) => {
            const response = await this.request(item.url)
            return response
        })

        const result = await Promise.all(urls)
        return result
    }
}

export default PokemonService;