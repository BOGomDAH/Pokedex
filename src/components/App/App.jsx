import React, {useRef, useState} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import CharList from "../CharList/CharList";
import CharInfo from "../CharInfo/CharInfo";

const App = () => {
    const [charId, setCharId] = useState(null);

    const onChangeChar = (id) => {
        setCharId(id)
        handleDetailAnimation()
    }

    const openAnimationRef = useRef()

    const handleDetailAnimation = () => {
        if(!openAnimationRef.current) return
        openAnimationRef.current.classList.toggle('detail__open');
    }
    
    return (
        <div className="bg-background font-main font-normal text-xl bg-background min-h-screen">
            <AppHeader onSearchChar={onChangeChar}/>
            <main>
                <CharList onChangeChar={onChangeChar}/>
                <CharInfo charId={charId} openAnimationRef={openAnimationRef} handleDetailAnimation={handleDetailAnimation}/>
            </main>
        </div>
    );
};

export default App;