import React from 'react';

const ErrorContent = () => {
    return (
        <>
            <div className="border border-solid border-black rounded-3xl bg-background my-4 relative">
                <img className="group-hover:border-r-[3px] group-hover:border-b-2 group-hover:border-black group-hover:rounded-3xl delay-75" src="assets/skeleton.png" alt='Pokemon skeleton' />
                <span className="absolute top-[-12px] right-0 bg-background border border-solid border-black rounded-full py-1 px-4 text-sm">#***</span>
            </div>
            <div className="w-[20ch] text-center my-auto flex flex-col gap-4">
                <h3 className="font-medium text-red-700">This Pokemon was not found</h3>
                <p className="text-red-600">There is no Pokémon with that name.</p>
            </div>
        </>
    )
}

export default ErrorContent;