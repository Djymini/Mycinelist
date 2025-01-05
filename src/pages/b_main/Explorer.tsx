import React, {useState, FC} from 'react';
import MovieItem from "../../components/explorer/MovieItem";
import DrawerExplorer from "../../components/explorer/DrawerExplorer";

const Explorer: FC<{}> = ({}) => {
    let arrayMovie = [];
    for (let i = 0; i < 20; i++) {
        arrayMovie.push(i);
    }
    return (
        <main>
            <aside>
                <DrawerExplorer/>
            </aside>
            <section className="explorer-movie-container">
                {arrayMovie.map((_, i) => (<MovieItem/>))}
            </section>
        </main>
    );
};

export default Explorer;
