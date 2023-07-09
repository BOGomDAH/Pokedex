const Skeleton = () => {
    return (
        <>
            <div className="border border-solid border-black rounded-3xl bg-background my-4 relative">
                <img className="group-hover:border-r-[3px] group-hover:border-b-2 group-hover:border-black group-hover:rounded-3xl delay-75" src="assets/skeleton.png" alt='Pokemon skeleton' />
                <span className="absolute top-[-12px] right-0 bg-background border border-solid border-black rounded-full py-1 px-4 text-sm">#000</span>
            </div>
            <div className="w-[20ch] text-center my-auto flex flex-col gap-4">
                <h3 className="font-normal">Your pokemon</h3>
                <p className="font-normal">Select a Pokemon which will display here! :)</p>
            </div>
        </>
    )
}

export default Skeleton;