import React from 'react';
import AppHeader from "../AppHeader/AppHeader";
import CharList from "../CharList/CharList";

const App = () => {
    return (
        <div>
            <AppHeader/>
            <main>
                <CharList/>
            </main>
        </div>
    );
};

export default App;