import React from 'react';

const CharTypes = ({types}) => {
    if (!types) return null

    const colors = {
        grass: '#EEFFE3',
        poison: '#EBE3FF',
        fire: '#FFD3BB',
        water: '#E3EFFF',
        flying: '#D7F0FF',
        bug: '#EEFFB0',
        normal: '#EBEAE0',
        electric: '#fdf4ce',
        ice: '#daf1f0',
        fighting: '#f6d6d5',
        ground: '#f7edd4',
        psychic: '#fdcedd',
        rock: '#f3efd8',
        ghost: '#e5dfec',
        dragon: '#dbcdfe',
        dark: '#ebe5e0',
        steel: '#e1e1ea',
        fairy: '#f2d9e6',
    };

    return (
        <div className="flex flex-col gap-1 text-sm lg:text-xl">
            {types.map(type => (
                <span
                    className="rounded-full px-3 py-1 lg:text-xl lg:px-8 lg:py-1 lg:w-20 mx-auto bg-white border border-solid border-black w-16 grid place-content-center capitalize lg:group-hover:border-r-2 lg:group-hover:border-b-[3px] lg:group-hover:border-black lg:group-hover:rounded-3xl transition-all ease-linear"
                    style={{backgroundColor: colors[type.type.name]}}
                    key={type.type.name}
                >
                    {type.type.name}
                </span>
            ))}
        </div>

    );
};

export default CharTypes;